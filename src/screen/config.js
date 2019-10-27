import React from 'react';
import {
  AppRegistry,
  Environment,
  staticAssetURL,
  VrButton,
  Image
} from 'react-360';
import estilo from '../style/estiloGlobal';
import LayoutQuadro from '../layout/quadro';
import LayoutTexto from '../layout/texto';
import ScreenCreditos from './creditos';
import ScreenFimDoJogo from './fimDoJogo';
import ScreenJogando from './jogando';
import LayoutBarraUsuario from '../layout/barraUsuario';
import LayoutBotoesIdiomas from '../layout/botoesIdiomas';
import LayoutBotaoSom from '../layout/botaoSom';
import LayoutBotaoMusica from '../layout/botaoMusica';

export default class ScreenConfig extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Environment.setBackgroundImage(staticAssetURL('backgroundScreenHome.jpg'));
    try {
      ScreenCreditos.prototype.componentDestroy();
      ScreenFimDoJogo.prototype.componentDestroy();
      ScreenJogando.prototype.componentDestroy();
    } catch (error) {

    }
  }

  render() {

    return (
      <LayoutQuadro style={[estilo.prototype.global().fundoTransparente, estilo.prototype.global().transformeQuadrado]}>
        <LayoutBarraUsuario />

        <LayoutQuadro style={[estilo.prototype.global().quadroConfig]}>
          <LayoutTexto style={[estilo.prototype.global().quadroRankTitulo]}>{global.linguaAtual.ScreenConfig.titulo}</LayoutTexto>

          <LayoutBotaoSom />
          <LayoutBotaoMusica />
          <LayoutBotoesIdiomas />

        </LayoutQuadro>
      </LayoutQuadro>
    );
  }


};

AppRegistry.registerComponent('ScreenConfig', () => ScreenConfig);
