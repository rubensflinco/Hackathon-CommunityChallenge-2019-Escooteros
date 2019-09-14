import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-360';
import estilo from '../style/estiloGlobal';

export default class LayoutQuadro extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[estilo.prototype.global().quadro, this.props.style]}>
        {this.props.children}
      </View>
    );
  }

};

AppRegistry.registerComponent('LayoutQuadro', () => LayoutQuadro);
