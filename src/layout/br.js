import React from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-360';
import estilo from '../style/estiloGlobal';

export default class LayoutBr extends React.Component {

  constructor(props) {
    super(props);
  }

  // inside class component
  componentDidMount() {
  }

  render() {
    return (
      <View>
        <Text style={estilo.prototype.global().br}></Text>
        <Text style={estilo.prototype.global().br}></Text>
      </View>
      );
  }

};

AppRegistry.registerComponent('LayoutBr', () => LayoutBr);
