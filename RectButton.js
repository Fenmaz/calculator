import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';

export default class RectButton extends Component {

  _onPress = () => {console.log('Button clicked')}

  state = {
    fillColor: this.props.color || 'blue',
    text: this.props.text || 'N/A',
    width: this.props.width || '100',
    fontSize: this.props.fontSize || '40',
  };

  render() {
    const {fillColor, text, width, fontSize} = this.state;
    const buttonWidth = width * 9 / 10;
    const buttonHeight = width * 4 / 10;

    return (
      <TouchableOpacity onPress={this._onPress} activeOpacity={0.5}>
        <Svg height={width/2} width={width}>
          <Rect x='10' y='10' width={buttonWidth} height={buttonHeight} rx={buttonWidth/4} fill={fillColor}/>
          <SvgText fill='black' textAnchor='middle' alignmentBaseline='central' fontWeight='bold' x={width/4} y={width/4} fontSize={fontSize}>{text}</SvgText>
        </Svg>
      </TouchableOpacity>
    )
  }
}
