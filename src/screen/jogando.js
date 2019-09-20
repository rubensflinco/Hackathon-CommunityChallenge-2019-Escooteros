import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import ReactDOM from 'react-dom'
import FunctionTimeline from '../function/timeline';

export default class ScreenJogando extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDestroy() {
    console.log("Componente destruido");
    var container = ReactDOM.findDOMNode(this).parentNode;
    ReactDOM.unmountComponentAtNode(container);
    FunctionTimeline.prototype.componentDestroy();
  }

  componentWillMount() {
    
  }

  render() {
    return(<FunctionTimeline/>)
  }


};

AppRegistry.registerComponent('ScreenJogando', () => ScreenJogando);
