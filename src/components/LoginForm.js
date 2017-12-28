import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { login } from '../actions';
import QRReader from './QRReader';


class LoginForm extends Component {
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
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }
  renderForm() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Номер мероприятия"
            placeholder="Введите номер"
            onChangeText={this.onEventIdChange.bind(this)}
            value={this.state.eventId}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }

  render() {
    if (this.state.logedIn) {
      return <QRReader id={this.state.id}/>
    }
    return this.renderForm()
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm
