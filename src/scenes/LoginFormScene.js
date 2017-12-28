import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

export default class LoginFormScene extends Component {
  render() {
    return (
      <View style={styles.form_container}>
        <TextInput
          placeholder="Номер мероприятия"
          placeholderTextColor="#FFF"
          underlineColorAndroid='#FFF'
          style = {styles.form_input} />
        <TouchableOpacity style={[styles.form_buttonContainer, styles.form_shadow]}>
          <Text style={styles.form_buttonText}>
            Администрировать
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
  }
})
