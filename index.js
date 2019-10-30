import React from 'react';
import {
  NativeModules,
  AppRegistry,
  View
} from 'react-360';
import PanelEsquerda from './src/panelEsquerda';
import PanelFrente from './src/panelFrente';
import PanelTras from './src/PanelTras';
import PanelDireita from './src/PanelDireita';
import FunctionLanguage from './src/function/language';
import ServiceLogin from './src/service/login';
const facebook = NativeModules.fbAuth;

export default class Hackathon_CommunityChallenge_2019 extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    ServiceLogin.prototype.verificarLogin();
    global.ConfigSomMuted = false;
    global.ConfigMusicaMuted = false;
    global.CreateMusica = true;
    global.BarraPontosReqOne = true;
    FunctionLanguage.prototype.trocarIdioma("en-us");
  }

  componentWillUpdate(){
    ServiceLogin.prototype.verificarLogin();
  }

  async componentDidMount(){
    await facebook.iniciar(async (sucesso, data) => {
      if (sucesso) {
        // Usuario já está logado
        let response = await ServiceLogin.prototype.postAutenticar(data);
        console.log("Usuario já logado", data, response);
        global.LayoutBarraUsuario = "ATUALIZAR";
        global.PanelFrenteTelaAtual = "ATUALIZAR";
        global.PanelTrasTelaAtual = "ATUALIZAR";
        global.PanelDireitaTelaAtual = "ATUALIZAR";
        global.PanelEsquerdaTelaAtual = "ATUALIZAR";
      }
    });
  }


  render(){
    return(<View></View>);
  }

};

AppRegistry.registerComponent('PanelTras', () => PanelTras);
AppRegistry.registerComponent('PanelFrente', () => PanelFrente);
AppRegistry.registerComponent('PanelDireita', () => PanelDireita);
AppRegistry.registerComponent('PanelEsquerda', () => PanelEsquerda);
AppRegistry.registerComponent('Hackathon_CommunityChallenge_2019', () => Hackathon_CommunityChallenge_2019);
