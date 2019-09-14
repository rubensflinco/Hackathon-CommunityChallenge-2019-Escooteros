import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import estilo from '../style/estiloGlobal';
import LayoutQuadro from '../layout/quadro';
import LayoutTexto from '../layout/texto';

export default class ScreenCarregando extends React.Component {

  constructor(props) {
    super(props);
  }

  // inside class component
  componentDidMount() {

  }

  render() {
    return (
      <LayoutQuadro style={estilo.prototype.global().fundoTransparente}>
        <LayoutTexto style={estilo.prototype.global().h1}>Carregando...</LayoutTexto>
      </LayoutQuadro>
    );
  }


};

AppRegistry.registerComponent('ScreenCarregando', () => ScreenCarregando);
