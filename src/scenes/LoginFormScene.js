import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

export default class LoginFormScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Номер мероприятия"
          placeholderTextColor="#FFF"
          underlineColorAndroid='#FFF'
          style = {styles.input} />
        <View style={styles.shadow}>
        <TouchableOpacity style={[styles.buttonContainer, styles.shadow]}>
          <Text style={styles.buttonText}>
            Администрировать
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 20,
    borderRadius: 4
  },
  buttonContainer: {
    backgroundColor: '#d04591',
    paddingVertical: 15,
    borderRadius: 4
  },
  shadow: {
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { height: 100, width: 100 }
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
})
