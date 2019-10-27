import React from 'react';
import {
  AppRegistry,
  Image,
  VrButton,
  staticAssetURL
} from 'react-360';
import estilo from '../style/estiloGlobal';
import LayoutQuadro from './quadro';
import LayoutBotaoFacebook from './botaoFacebook';
import LayoutTexto from './texto';

export default class LayoutBarraUsuario extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toogleConfig: false,
      tooglePerfilMe: false
    }
  }

  componentDidMount() {
    
  }

  clickConfig(shelf) {
    if (!shelf.state.toogleConfig) {
      global.PanelDireitaTelaAtual = "ScreenConfig";
      shelf.setState({ toogleConfig: true });
    } else {
      global.PanelDireitaTelaAtual = "ScreenRank";
      shelf.setState({ toogleConfig: false });
    }
  }

  clickPerfilMe(shelf) {
    if (!shelf.state.tooglePerfilMe) {
      global.PanelDireitaTelaAtual = "ScreenPerfil";
      shelf.setState({ tooglePerfilMe: true });
    } else {
      global.PanelDireitaTelaAtual = "ScreenRank";
      shelf.setState({ tooglePerfilMe: false });
    }
  }

  clickSair() {
    // Deslogar o usuario
  }

  render() {

    if (false) {
      return (<LayoutBotaoFacebook />)
    } else {
      return (
        <LayoutQuadro style={[estilo.prototype.global().quadroBarraUsuario]}>

          <VrButton onClick={()=>{this.clickPerfilMe(this)}} style={[estilo.prototype.global().ladoALado]}>
            <Image
              source={{ uri: "http://graph.facebook.com/1722854961180673/picture?type=large&width=720&height=720" }}
              style={[estilo.prototype.global().tabelaItensImg, { width: 50, height: 50 }]} />
            <LayoutTexto style={estilo.prototype.global().tabelaItens}>Rubens Flinco</LayoutTexto>

            <Image
              source={{ uri: staticAssetURL('icons/estrela.png') }}
              style={[estilo.prototype.global().barraUsuariosIcons, { width: 60, height: 60 }]} />
            <LayoutTexto style={estilo.prototype.global().tabelaItens}> 8273428</LayoutTexto>
          </VrButton>

          <VrButton onClick={()=>{this.clickConfig(this)}} style={[estilo.prototype.global().ladoALado]}>
            <Image
              source={{ uri: staticAssetURL('icons/config.png') }}
              style={[estilo.prototype.global().barraUsuariosIcons, { width: 60, height: 60 }]} />
            <LayoutTexto style={estilo.prototype.global().tabelaItens}>{global.linguaAtual.LayoutBarraUsuario.configuracoes}</LayoutTexto>
          </VrButton>

          <VrButton onClick={this.clickSair} style={[estilo.prototype.global().ladoALado]}>
            <Image
              source={{ uri: staticAssetURL('icons/sair.png') }}
              style={[estilo.prototype.global().barraUsuariosIcons, { width: 60, height: 60 }]} />
            <LayoutTexto style={estilo.prototype.global().tabelaItens}>{global.linguaAtual.LayoutBarraUsuario.sair}</LayoutTexto>
          </VrButton>

        </LayoutQuadro>
      );
    }

  }

};

AppRegistry.registerComponent('LayoutBarraUsuario', () => LayoutBarraUsuario);
