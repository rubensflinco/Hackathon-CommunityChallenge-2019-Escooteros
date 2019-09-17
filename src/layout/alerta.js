import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-360';
import estilo from '../style/estiloGlobal';
import LayoutQuadro from './quadro';
import LayoutTexto from './texto';
import LayoutBotao from './botao';

export default class LayoutAlerta extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LayoutQuadro style={estilo.prototype.global().quadroAlerta}>
        <View style={estilo.prototype.global().viewAlerta}>
          <LayoutTexto style={[estilo.prototype.global().h2, estilo.prototype.global().tituloAlerta]}>
            {this.props.titulo}
          </LayoutTexto>
        </View>
        <LayoutTexto style={estilo.prototype.global().h6}>
          {this.props.children}
        </LayoutTexto>
        

        <View style={estilo.prototype.global().botaoAlerta}>
          <LayoutBotao onClick={this.props.onClick}>
            {this.props.textoBotao}
          </LayoutBotao>
        </View>
      </LayoutQuadro>
    );
  }

};

AppRegistry.registerComponent('LayoutAlerta', () => LayoutAlerta);
