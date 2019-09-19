import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import FunctionTimeline from '../function/timeline';

export default class ScreenJogando extends React.Component {

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    
  }

  render() {
    return(<FunctionTimeline/>)
  }


};

AppRegistry.registerComponent('ScreenJogando', () => ScreenJogando);
