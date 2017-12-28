import React, { Component } from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import { Spinner } from '../components/common';
import { login } from '../actions';
import QRReader from '../components/QRReader';

export default class LoginScene extends Component {
  state = {
    logedIn: false,
    loading: false,
    eventId: '',
    error: ''
 };

  onEventIdChange(text) {
    this.setState({
      eventId: text
    })
  }

  onButtonPress() {
    this.setState({
      loading: true,
      error: ''
    })

    login(this.state.eventId)
      .then(response => {
        console.log(response)
        var data = response.data
        var id = data.id
        if (!id)
          throw new Error('Неверный номер!');
        this.setState({
          logedIn: true,
          loading: false,
          id,
          eventId: ''
        })
      })
      .catch(error => {
        console.log(error)
        if (error.message.indexOf('Request failed with status code 5') !== -1)
          error.message = 'Ошибка сервера!'

        this.setState({
          error: error.message,
          loading: false
        })
      });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="large" />;
    }

    return (
      <TouchableOpacity style={[styles.form_buttonContainer, styles.form_shadow]} onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.form_buttonText}>
          Администрировать
        </Text>
      </TouchableOpacity>
    );
  }

  renderForm() {
    return (
      <View style={styles.form_container}>
        <TextInput
          placeholder="Номер мероприятия"
          placeholderTextColor="#FFF"
          underlineColorAndroid='#FFF'
          style = {styles.form_input}
          onChangeText={this.onEventIdChange.bind(this)}
          value={this.state.eventId}/>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        {this.renderButton()}
      </View>
    );
  }

  render() {
    if (this.state.logedIn) {
      return <QRReader id={this.state.id}/>
    }
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
          style={styles.logo}
          source={require('../logo.png')} />

          <Text style={styles.title}>
            Электронное сопровождение мероприятий
          </Text>
        </View>

        <View style={styles.LoginFormScene}>
          {this.renderForm()}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.85,
    backgroundColor: '#2e8fe6'
  },
  logo: {
    width: 200,
    height: 40
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width: 260,
    fontSize: 15,
    textAlign: 'center',
    opacity: 0.9
  },
  form_container: {
    padding: 20
  },
  form_input: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 20,
    borderRadius: 4
  },
  form_buttonContainer: {
    backgroundColor: '#d04591',
    paddingVertical: 15,
    borderRadius: 4
  },
  form_shadow: {
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { height: 100, width: 100 }
  },
  form_buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});
