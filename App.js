import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Calculator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NumDisplay/>
        <NumPad/>
      </View>
    )
  }
}

class NumDisplay extends Component {
  state = {
    nums: 15
  }
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.display}>{this.state.nums}</Text>
      </View>
    );
  }
}

class NumPad extends Component {
  render() {
    return (
      <View style={styles.numpad}></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  screen: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  display: {
    color: 'white',
    fontSize: 60,
  },
  numpad: {
    flex: 7,
  }
});
