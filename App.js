import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import RoundButton from './RoundButton';
import RectButton from './RectButton';


export default class Calculator extends Component {

  state = {
    nums: 15
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.displayScreen}>
          <Text style={styles.displayNum}>{this.state.nums}</Text>
        </View>
        <NumPad/>
      </View>
    )
  }
}

class DigitPad extends Component {
  render() {

    var {height, width} = Dimensions.get('window');
    const digits = [[7, 8, 9], [4, 5, 6], [1, 2, 3]];
    const {color, fontSize} = StyleSheet.flatten(styles.button);

    return(

      <View style={{flex: 4}}>
        {digits.map(row =>
          <View style={{flex: 1, flexDirection: 'row'}}>
            {row.map(digit => <RoundButton color={color} text={digit} width={width/4} fontSize={fontSize}/>)}
          </View>
        )}
        <View style={{flex: 1, flexDirection: 'row'}}>
          <RectButton color={color} text='0' width={width/2} fontSize={fontSize}/>
          <RoundButton color={color} text={'.'} width={width/4} fontSize={fontSize}/>)}
        </View>
      </View>
    )
  }
}

class NumPad extends Component {

  render() {
    var {height, width} = Dimensions.get('window');
    const symbols = ["+", "-", "x", "/", "="];
    const singleOperator = ["C", "+/-", "%"];
    const {color, fontSize} = StyleSheet.flatten(styles.button);

    return (
      <View style={styles.numpad}>
        <View style={{flex: 3}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            {singleOperator.map(oper => <RoundButton color={color} text={oper} width={width/4} fontSize={fontSize}/>)}
          </View>
          <DigitPad />
        </View>
        <View style={{flex: 1}}>
          {symbols.map(symbol => <RoundButton color={color} text={symbol} width={width/4} fontSize={fontSize}/>)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7F5F8',
  },
  displayScreen: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  displayNum: {
    color: '#7BCED6',
    fontSize: 60,
  },
  numpad: {
    flex: 7,
    flexDirection: 'row',
    backgroundColor: '#DAFBDE'
  },
  button: {
    color: '#84E790',
    fontSize: 30,
  }
});
