import React from 'react';
import {
  AppRegistry,
  Image,
  VrButton,
  staticAssetURL,
  View
} from 'react-360';
import estilo from '../style/estiloGlobal';
import LayoutQuadro from './quadro';
import LayoutBotaoFacebook from './botaoFacebook';
import LayoutTexto from './texto';
import ServiceLogin from '../service/login';
import ScreenCarregando from '../screen/carregando';
import ServiceUser from '../service/user';

export default class LayoutBarraUsuario extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toogleConfig: false,
      tooglePerfilMe: false,
      carregado: false,
      getUser: {}
    }
  }

  async componentDidMount() {
    await this.getUser();
    await this.setState({ carregado: true });

    // Codigo a baixo é responsavel por atualizar a tela e modificar a tela atual
    setInterval(async () => {
      if (global.LayoutBarraUsuario == "ATUALIZAR") {
        await this.setState({ carregado: false });
        global.LayoutBarraUsuario = "ATUALIZADO";
        await this.setState({ carregado: true });
      }
    }, 0);
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

  async getUser() {
    if (global.UserLogado) {
      let token = await ServiceLogin.prototype.getToken();
      let response = await ServiceUser.prototype.getUnico(token);
      let getUser = response.data;
      await this.setState({ getUser });
    }
  }

  clickSair() {
    // Deslogar o usuario
    ServiceLogin.prototype.sairDaConta();
  }

  render() {
    if (this.state.carregado) {
      if (!global.UserLogado) {
        return (<LayoutBotaoFacebook />)
      } else {
        return (
          <LayoutQuadro style={[estilo.prototype.global().quadroBarraUsuario]}>

            <View style={[estilo.prototype.global().ladoALado]}>
              <Image
                source={{ uri: this.state.getUser.foto }}
                style={[estilo.prototype.global().tabelaItensImg, { width: 50, height: 50 }]} />
              <LayoutTexto style={estilo.prototype.global().tabelaItens}>{this.state.getUser.nome}</LayoutTexto>

              <Image
                source={{ uri: staticAssetURL('icons/estrela.png') }}
                style={[estilo.prototype.global().barraUsuariosIcons, { width: 60, height: 60 }]} />
              <LayoutTexto style={estilo.prototype.global().tabelaItens}> {this.state.getUser.pontos}</LayoutTexto>
            </View>

            <VrButton onClick={() => { this.clickConfig(this) }} style={[estilo.prototype.global().ladoALado]}>
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

    } else {
      return (<ScreenCarregando />)
    }

  }

};

AppRegistry.registerComponent('LayoutBarraUsuario', () => LayoutBarraUsuario);
