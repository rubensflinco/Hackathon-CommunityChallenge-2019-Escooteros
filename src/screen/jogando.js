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
import LayoutQuadro from '../layout/quadro';
import LayoutTexto from '../layout/texto';

export default class ScreenJogando extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cssNovosPontos: { display: 'none' },
      // cssNovosPontos: { color: '#7bf17b' },
      // cssNovosPontos: { color: '#f15d59' },
    }
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
    FunctionMusica.prototype.destroy(global.musicaAnterior);
  }

  render() {
    return (
      <View>
        <LayoutQuadro style={estilo.prototype.global().quadroBarraPontos}>
          <View style={estilo.prototype.global().pontos}>
            <Image
              source={{ uri: staticAssetURL('icons/estrela.png') }}
              style={[estilo.prototype.global().tabelaItensIcons, { width: 60, height: 60 }]} />
            <LayoutTexto style={estilo.prototype.global().tabelaItens}>14328</LayoutTexto>
            <LayoutTexto style={[estilo.prototype.global().tabelaItens, this.state.cssNovosPontos]}>+100</LayoutTexto>
          </View>
        </LayoutQuadro>

        <FunctionTimeline />
      </View>
    )
  }


};

AppRegistry.registerComponent('ScreenJogando', () => ScreenJogando);
