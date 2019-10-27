import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-360';
import estilo from '../style/estiloGlobal';
import LayoutTexto from './texto';
import LayoutBotao from './botao';
import FunctionMusica from '../function/musica';



export default class LayoutBotaoMusica extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cssBotaoToggle: {backgroundColor: 'rgba(255, 255, 255, 0.9)'},
      cssBotaoToggleTxt: {right: -30}
    }
  }

  // inside class component
  componentDidMount() {

  }

  async click(shelf) {
    if (global.ConfigMusicaMuted == false) {
      global.ConfigMusicaMuted = true;
      FunctionMusica.prototype.pause(global.musicaAnterior);
      shelf.setState({cssBotaoToggle: {backgroundColor: 'rgba(255, 255, 255, 0.3)'}, cssBotaoToggleTxt: {right: 30}});
    } else {
      global.ConfigMusicaMuted = false;
      FunctionMusica.prototype.play(global.musicaAnterior);
      shelf.setState({cssBotaoToggle: {backgroundColor: 'rgba(255, 255, 255, 0.9)'}, cssBotaoToggleTxt: {right: -30}});
    }
  }

  render() {
    return (
        <View style={[estilo.prototype.global().viewBotaoToggle]}>
          <LayoutTexto style={[estilo.prototype.global().h5, estilo.prototype.global().textoCentro, {bottom: 5}]}>Música: </LayoutTexto>
          <LayoutBotao onClick={() => { this.click(this) }} style={[estilo.prototype.global().botaoToggle, this.state.cssBotaoToggle]} styleText={[estilo.prototype.global().botaoToggleText, this.state.cssBotaoToggleTxt]} >O</LayoutBotao>
        </View>
    );
  }


};
AppRegistry.registerComponent('LayoutBotaoMusica', () => LayoutBotaoMusica);
