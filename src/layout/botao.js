import React from 'react';
import {
  AppRegistry,
  VrButton
} from 'react-360';
import LayoutTexto from './texto';
import estilo from '../style/estiloGlobal';


export default class LayoutBotao extends React.Component {


  // inside class component
  componentDidMount() {
  }

  render() {
    return (
      <VrButton onClick={this.props.onClick} style={[estilo.prototype.global().botao, this.props.style]}>
        <LayoutTexto style={[estilo.prototype.global().botaoTexto, this.props.styleText]}>{this.props.children}</LayoutTexto>
      </VrButton>
    );
  }

};

AppRegistry.registerComponent('LayoutBotao', () => LayoutBotao);
