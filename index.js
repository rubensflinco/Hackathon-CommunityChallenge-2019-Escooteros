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

export default class Hackathon_CommunityChallenge_2019 extends React.Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await FunctionLanguage.prototype.trocarIdioma("en-us");
  }

};

AppRegistry.registerComponent('PanelTras', () => PanelTras);
AppRegistry.registerComponent('PanelFrente', () => PanelFrente);
AppRegistry.registerComponent('PanelDireita', () => PanelDireita);
AppRegistry.registerComponent('PanelEsquerda', () => PanelEsquerda);
AppRegistry.registerComponent('Hackathon_CommunityChallenge_2019', () => Hackathon_CommunityChallenge_2019);
