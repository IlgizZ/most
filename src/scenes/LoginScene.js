import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import LoginFormScene from './LoginFormScene'
export default class LoginScene extends Component {
  render() {
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
          <LoginFormScene />
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
  }
});
