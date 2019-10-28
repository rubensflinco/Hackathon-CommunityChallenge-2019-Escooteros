import React from 'react';
import {
  NativeModules,
  staticAssetURL,
  AppRegistry,
  View,
  VrButton,
  Image
} from 'react-360';
import estilo from '../style/estiloGlobal';
import LayoutTexto from './texto';
import ServiceLogin from '../service/login';
import LayoutBarraUsuario from './barraUsuario';
const facebook = NativeModules.fbAuth;


export default class LayoutBotaoFacebook extends React.Component {

  constructor(props) {
    super(props);
  }

  // inside class component
  componentDidMount() {

  }

  async clickLogarFace() {
    facebook.iniciar(async (sucesso, data) => {
      if (sucesso) {
        // Usuario já está logado
        let response = await ServiceLogin.prototype.postAutenticar(data);
        LayoutBarraUsuario.prototype.render();
        global.PanelFrenteTelaAtual = "ATUALIZAR";
        global.PanelTrasTelaAtual = "ATUALIZAR";
        global.PanelDireitaTelaAtual = "ATUALIZAR";
        global.PanelEsquerdaTelaAtual = "ATUALIZAR";
      } else {
        // Usuario não está logado
        facebook.autenticar(async (sucesso, data) => {
          if (sucesso) {
            let response = await ServiceLogin.prototype.postAutenticar(data);
            LayoutBarraUsuario.prototype.render();
            global.PanelFrenteTelaAtual = "ATUALIZAR";
            global.PanelTrasTelaAtual = "ATUALIZAR";
            global.PanelDireitaTelaAtual = "ATUALIZAR";
            global.PanelEsquerdaTelaAtual = "ATUALIZAR";
          } else {
            console.log("Deu erro", data)
          }
        });
      }
    });
  }

  render() {
    return (
      <View>
        <VrButton onClick={this.clickLogarFace} style={[estilo.prototype.global().botao, estilo.prototype.global().botaoFacebook]}>
          <Image
            source={{ uri: staticAssetURL('icons/facebook.png') }}
            style={{ height: 40, width: 40, marginRight: 20 }} />
          <LayoutTexto>{global.linguaAtual.LayoutBotaoFacebook.titulo}</LayoutTexto>
        </VrButton>
      </View>
    );
  }

};

AppRegistry.registerComponent('LayoutBotaoFacebook', () => LayoutBotaoFacebook);
