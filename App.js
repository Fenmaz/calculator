import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  state = {
    nums: 15
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.screen}>
          <View style={styles.display}>
              <Text style={{color: 'white', fontSize: 40}}>{this.state.nums}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
  },
  display: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  }
});
