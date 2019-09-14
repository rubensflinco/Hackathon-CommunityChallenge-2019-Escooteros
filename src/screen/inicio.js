import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import 'localstorage-polyfill';
import estilo from '../style/estiloGlobal';
import LayoutQuadro from '../layout/quadro';
import LayoutTexto from '../layout/texto';
import LayoutBotao from '../layout/botao';

export default class ScreenInicio extends React.Component {

  constructor(props) {
    super(props);
  }

  // inside class component
  componentDidMount() {

  }

  clickJogar(){
    global.localStorage.setItem("jogando", true);
  }

  render() {
    return (
      <LayoutQuadro style={estilo.prototype.global().fundoTransparente}>
        <LayoutTexto style={estilo.prototype.global().h1}>Bem vindo</LayoutTexto>
        <LayoutBotao onClick={this.clickJogar}>Jogar</LayoutBotao>
      </LayoutQuadro>
    );
  }


};

AppRegistry.registerComponent('ScreenInicio', () => ScreenInicio);
