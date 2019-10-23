import React from 'react';
import {
  AppRegistry,
} from 'react-360';

export default class FunctionLanguage extends React.Component {

  constructor(props) {
    super(props);
  }
  

  async trocarIdioma(idioma = "pt-br") {
    return new Promise (function (resolve, reject) {
      let caminho = 'static_assets/language/';
      let filename = idioma+'.json';
      fetch(caminho+filename)
      .then(response=>response.json())
      .then(data=>{ 
        global.linguaAtual = data;
        resolve(data);
       });
    });
  }

};

AppRegistry.registerComponent('FunctionLanguage', () => FunctionLanguage);
