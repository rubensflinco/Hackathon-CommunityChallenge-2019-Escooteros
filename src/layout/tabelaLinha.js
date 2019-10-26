import React from 'react';
import {
  AppRegistry,
  View
} from 'react-360';
import estilo from '../style/estiloGlobal';

export default class LayoutTabelaLinha extends React.Component {

  constructor(props) {
    super(props);
  }

  // inside class component
  componentDidMount() {
  }

  render() {
    return (
      <View style={[estilo.prototype.global().tabelaLinha, this.props.style]}>
      {this.props.children}
      </View>
    );
  }

};

AppRegistry.registerComponent('LayoutTabelaLinha', () => LayoutTabelaLinha);
