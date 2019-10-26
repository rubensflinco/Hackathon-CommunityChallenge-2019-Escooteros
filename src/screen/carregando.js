import React from 'react';
import {
  AppRegistry,
  Environment,
  staticAssetURL,
} from 'react-360';
import ReactDOM from 'react-dom'
import estilo from '../style/estiloGlobal';
import LayoutQuadro from '../layout/quadro';
import LayoutTexto from '../layout/texto';

export default class ScreenCarregando extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDestroy() {
    console.log("Componente destruido");
    var container = ReactDOM.findDOMNode(this).parentNode;
    ReactDOM.unmountComponentAtNode(container);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <LayoutQuadro style={estilo.prototype.global().fundoTransparente}>
        <LayoutTexto style={estilo.prototype.global().h1}>Carregando...</LayoutTexto>
        <LayoutTexto style={estilo.prototype.global().h1}>Loading...</LayoutTexto>
      </LayoutQuadro>
    );
  }


};

AppRegistry.registerComponent('ScreenCarregando', () => ScreenCarregando);
