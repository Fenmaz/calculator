import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

export default class RoundButton extends Component {

  _onPress = () => {console.log('Button clicked')}

  state = {
    fillColor: this.props.color || 'blue',
    text: this.props.text || 'N/A',
    width: this.props.width || '100',
    fontSize: this.props.fontSize || '40',
  };

  render() {
    const {fillColor, text, width, fontSize} = this.state;
    const cent = width/2
    const rad = width * 4 / 10;

    return (
      <TouchableOpacity onPress={this._onPress} activeOpacity={0.5}>
        <Svg height={width} width={width}>
          <Circle cx={cent} cy={cent} r={rad} fill={fillColor}/>
          <SvgText fill='black' textAnchor='middle' alignmentBaseline='central' fontWeight='bold' x={cent} y={cent} fontSize={fontSize}>{text}</SvgText>
        </Svg>
      </TouchableOpacity>
    )
  }
}
