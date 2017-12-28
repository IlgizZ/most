import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class AllRightsScene extends Component {

  render() {
    return (
          <View style={styles.allRightsContainer}>
            <Text style={styles.allRights}>
              2017 ©. Все права защищены.
            </Text>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  allRightsContainer: {
    flexGrow: 0,
  },
  allRights: {
    textAlign: 'center',
    color: '#FFF',
    opacity: 0.7,
    fontSize: 12
  }
})
