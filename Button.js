import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';


class Button extends Component {

  _onPress = () => {console.log('Button clicked')}

  render() {
    <TouchableOpacity onPress={this._onPress} activeOpacity={0.5}>
      {props.children}
    </TouchableOpacity>
  }
}

export class RectButton extends Component {

  const buttonWidth = this.props.width * 9 / 10;
  const buttonHeight = this.props.width * 4 / 10;
  const {color, fontSize} = StyleSheet.flatten(styles.button);

  render() {
    return (
      <Button>
        <Svg height={this.props.width / 2} width={this.props.width}>
          <Rect x='10' y='10' width={buttonWidth} height={buttonHeight} rx={buttonWidth / 4} fill={fillColor}/>
          <SvgText fill='black' textAnchor='middle' alignmentBaseline='central' fontWeight='bold' x={this.props.width / 4} y={this.props.width / 4} fontSize={fontSize}>{this.props.text}</SvgText>
        </Svg>
      </Button>
    )
  }
}

export class CircleButton extends Component {

  const center = this.props.width / 2;
  const r = this.props.width * 4 / 10;
  const {color, fontSize} = StyleSheet.flatten(styles.button);

  render() {
    return(
      <Button>
        <Svg height={this.props.width} width={this.props.width}>
          <Circle cx={center} cy={center} r={r} fill={fillColor}/>
          <SvgText fill='black' textAnchor='middle' alignmentBaseline='central' fontWeight='bold' x={center} y={center} fontSize={fontSize}>{text}</SvgText>
        </Svg>
      </Button>
    )
  }
}

//
// export default class Button extends Component {
//
//   _onPress = () => {console.log('Button clicked')}
//   const {color, fontSize} = StyleSheet.flatten(styles.button);
//
//   state = {
//     text: this.props.text || 'N/A',
//     width: this.props.width || '100',
//   };
//
//   switch (this.props.shape) {
//     case 'rect':
//       render() {
//         const {text, width} = this.state;
//         const buttonWidth = width * 9 / 10;
//
//         return (
//           <TouchableOpacity onPress={this._onPress} activeOpacity={0.5}>
//             <Svg height={width/2} width={width}>
//               <Rect x='10' y='10' width={buttonWidth} height={buttonHeight} rx={buttonWidth/4} fill={fillColor}/>
//               <SvgText fill='black' textAnchor='middle' alignmentBaseline='central' fontWeight='bold' x={width/4} y={width/4} fontSize={fontSize}>{text}</SvgText>
//             </Svg>
//           </TouchableOpacity>
//         )
//       }
//
//     default:
//       render() {
//         const {text, width} = this.state;
//         const cent = width / 2;
//         const rad = width * 4 / 10;
//
//         return (
//           <TouchableOpacity onPress={this._onPress} activeOpacity={0.5}>
//             <Svg height={width} width={width}>
//               <Circle cx={cent} cy={cent} r={rad} fill={fillColor}/>
//               <SvgText fill='black' textAnchor='middle' alignmentBaseline='central' fontWeight='bold' x={cent} y={cent} fontSize={fontSize}>{text}</SvgText>
//             </Svg>
//           </TouchableOpacity>
//         )
//       }
//   }
// }

const styles = StyleSheet.create({
  button: {
    color: '#84E790',
    fontSize: 30,
  }
});
