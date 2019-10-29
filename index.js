import React from 'react';
import {
  AppRegistry,
  View
} from 'react-360';
import PanelEsquerda from './src/panelEsquerda';
import PanelFrente from './src/panelFrente';
import PanelTras from './src/PanelTras';
import PanelDireita from './src/PanelDireita';
import FunctionLanguage from './src/function/language';
import ServiceLogin from './src/service/login';

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


  render(){
    return(<View></View>);
  }

};

AppRegistry.registerComponent('PanelTras', () => PanelTras);
AppRegistry.registerComponent('PanelFrente', () => PanelFrente);
AppRegistry.registerComponent('PanelDireita', () => PanelDireita);
AppRegistry.registerComponent('PanelEsquerda', () => PanelEsquerda);
AppRegistry.registerComponent('Hackathon_CommunityChallenge_2019', () => Hackathon_CommunityChallenge_2019);
