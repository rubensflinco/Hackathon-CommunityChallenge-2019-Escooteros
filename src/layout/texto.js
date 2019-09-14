import React from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-360';
import estilo from '../style/estiloGlobal';

export default class LayoutTexto extends React.Component {

  constructor(props) {
    super(props);
  }

  // inside class component
  componentDidMount() {
  }

  render() {
    return (
      <Text style={[estilo.prototype.global().texto, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }

};

AppRegistry.registerComponent('LayoutTexto', () => LayoutTexto);
