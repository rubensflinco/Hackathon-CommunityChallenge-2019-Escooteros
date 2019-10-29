import React from 'react';
import {
  AppRegistry,
  Environment,
  staticAssetURL,
  Image
} from 'react-360';
import estilo from '../style/estiloGlobal';
import LayoutQuadro from '../layout/quadro';
import LayoutTexto from '../layout/texto';
import LayoutBotao from '../layout/botao';
import ScreenCreditos from './creditos';
import ScreenFimDoJogo from './fimDoJogo';
import ScreenJogando from './jogando';
import FunctionMusica from '../function/musica';

export default class ScreenInicio extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    try {
      ScreenCreditos.prototype.componentDestroy();
      ScreenFimDoJogo.prototype.componentDestroy();
      ScreenJogando.prototype.componentDestroy();
    } catch (error) {}
  }

  componentDidMount() {
    Environment.setBackgroundImage(staticAssetURL('backgroundScreenHome.jpg'));

    global.ConfigMusicaMuted = false;
    global.CreateMusica = true;
    global.BarraPontosReqOne = true;
    global.LayoutBarraPontos = "ATUALIZAR";
    global.PanelTrasTelaAtual = "VAZIA";
    global.PanelDireitaTelaAtual = "ScreenRank";
    global.PanelEsquerdaTelaAtual = "VAZIA";

    FunctionMusica.prototype.destroy();
    FunctionMusica.prototype.create("audios/ScreenInicio/radio.mp3", "musica", global.ConfigMusicaMuted, 0.1, true);
    FunctionMusica.prototype.play();
  }

  clickJogar() {
    global.PanelFrenteTelaAtual = "ScreenJogando";
  }

  render() {
    return (
      <LayoutQuadro style={[estilo.prototype.global().fundoTransparente, estilo.prototype.global().transformeQuadrado]}>
        <LayoutTexto style={estilo.prototype.global().h1}>{global.linguaAtual.ScreenInicio.boasVindas}</LayoutTexto>
        <LayoutBotao onClick={this.clickJogar}>{global.linguaAtual.ScreenInicio.botaoJogar}</LayoutBotao>
        <Image source={{ uri: staticAssetURL('logotipo.png') }} style={estilo.prototype.global().logotipo} />
      </LayoutQuadro>
    );
  }


};

AppRegistry.registerComponent('ScreenInicio', () => ScreenInicio);
