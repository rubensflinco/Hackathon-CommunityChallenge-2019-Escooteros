import React from 'react';
import {
  staticAssetURL,
  AppRegistry,
  Image,
  View
} from 'react-360';
import ReactDOM from 'react-dom'
import estilo from '../style/estiloGlobal';
import FunctionTimeline from '../function/timeline';
import FunctionMusica from '../function/musica';
import LayoutBarraPontos from '../layout/barraPontos';

export default class ScreenJogando extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDestroy() {
    console.log("Componente destruido");
    var container = ReactDOM.findDOMNode(this).parentNode;
    ReactDOM.unmountComponentAtNode(container);
    FunctionTimeline.prototype.componentDestroy();
  }

  componentDidMount() {
    global.PanelTrasTelaAtual = "VAZIA";
    global.PanelDireitaTelaAtual = "VAZIA";
    global.PanelEsquerdaTelaAtual = "VAZIA";
    global.ConfigMusicaMuted = true;
    FunctionMusica.prototype.destroy();
  }

  render() {
    return (
      <View>
        <LayoutBarraPontos />
        <FunctionTimeline />
      </View>
    )
  }


};

AppRegistry.registerComponent('ScreenJogando', () => ScreenJogando);
