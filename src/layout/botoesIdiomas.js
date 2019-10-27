import React from 'react';
import {
  AppRegistry,
  View,
  staticAssetURL,
  Image,
  VrButton
} from 'react-360';
import estilo from '../style/estiloGlobal';
import LayoutTexto from './texto';
import FunctionLanguage from '../function/language';



export default class LayoutBotoesIdiomas extends React.Component {


  // inside class component
  componentDidMount() {

  }

  async clickLanguage(idioma) {
    await FunctionLanguage.prototype.trocarIdioma(idioma);
    global.PanelFrenteTelaAtual = "ATUALIZAR";
    global.PanelTrasTelaAtual = "ATUALIZAR";
    global.PanelDireitaTelaAtual = "ATUALIZAR";
    global.PanelEsquerdaTelaAtual = "ATUALIZAR";
  }

  render() {
    return (
      <View>
        <LayoutTexto style={[estilo.prototype.global().h5, estilo.prototype.global().textoCentro]}>Language: </LayoutTexto>
        <View style={[estilo.prototype.global().ladoALado]}>

          <VrButton onClick={() => { this.clickLanguage('pt-br') }} style={estilo.prototype.global().botaoIdioma}>
          <Image
            source={{ uri: staticAssetURL('icons/br.png') }}
            style={{ width: 100, height: 100 }} />
          </VrButton>

          <VrButton onClick={() => { this.clickLanguage('en-us') }} style={estilo.prototype.global().botaoIdioma}>
          <Image
            source={{ uri: staticAssetURL('icons/eua.png') }}
            style={{ width: 100, height: 100 }} />
          </VrButton>

        </View>
      </View>
    );
  }


};
AppRegistry.registerComponent('LayoutBotoesIdiomas', () => LayoutBotoesIdiomas);
