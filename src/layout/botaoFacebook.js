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
const facebook = NativeModules.fbAuth;


export default class LayoutBotaoFacebook extends React.Component {

  constructor(props) {
    super(props);
  }

  // inside class component
  componentDidMount() {

  }

  clickLogarFace() {
    facebook.iniciar((sucesso, data) => {
      if (sucesso) {
        // Usuario já está logado
        console.log("Usuario já Logado", data);
      } else {
        // Usuario não está logado
        facebook.autenticar((sucesso, data) => {
          if (sucesso) {
            console.log("Usuario Logado", data);
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
            style={{ height: 40, width: 40 }} />
          <LayoutTexto>Fazer login com Facebook</LayoutTexto>
        </VrButton>
      </View>
    );
  }

};

AppRegistry.registerComponent('LayoutBotaoFacebook', () => LayoutBotaoFacebook);
