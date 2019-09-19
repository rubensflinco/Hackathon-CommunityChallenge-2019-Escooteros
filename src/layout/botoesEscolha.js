import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-360';
import LayoutBotao from './botao';
import estilo from '../style/estiloGlobal';
import LayoutTexto from './texto';



export default class LayoutBotoesEscolha extends React.Component {


  // inside class component
  componentDidMount() {
    
  }

  render() {
    return (
      <View style={estilo.prototype.global().quadroBototes}>
        <LayoutTexto style={estilo.prototype.global().h4}>Escolha uma opção:</LayoutTexto>
        <View style={estilo.prototype.global().ladoALado}>

          <LayoutBotao 
          styleText={estilo.prototype.global().h6}
          onClick={this.props.onClick1}>
          {this.props.texto1}
          </LayoutBotao>


          <LayoutBotao 
          styleText={estilo.prototype.global().h6}
          onClick={this.props.onClick2}>
          {this.props.texto2}
          </LayoutBotao>

        </View>
      </View>
    );
  }


};
AppRegistry.registerComponent('LayoutBotoesEscolha', () => LayoutBotoesEscolha);
