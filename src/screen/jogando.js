import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import LayoutBotoesEscolha from '../layout/botoesEscolha';

export default class ScreenJogando extends React.Component {

  constructor(props) {
    super(props);
  }

  // inside class component
  componentDidMount() {

  }

  click() {
    console.log('test');
  }

  render() {
    return (
      <LayoutBotoesEscolha
        texto1="test"
        onClick1={this.click}
        texto2="test 2 dwad wad"
        onClick2={this.click}
      ></LayoutBotoesEscolha>
    );
  }


};

AppRegistry.registerComponent('ScreenJogando', () => ScreenJogando);
