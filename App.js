/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import LoginScene from './src/scenes/LoginScene'
import AllRightsScene  from './src/scenes/AllRightsScene'

export default class App extends Component<{}> {

  render() {
    return (
        <View style={styles.container}>
          <LoginScene />
          <AllRightsScene />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2e8fe6'
  }
})
