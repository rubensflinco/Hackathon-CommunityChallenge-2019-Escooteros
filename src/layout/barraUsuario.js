import React from 'react';
import {
  AppRegistry,
  Image,
  VrButton,
  staticAssetURL
} from 'react-360';
import estilo from '../style/estiloGlobal';
import LayoutQuadro from './quadro';
import LayoutBotaoFacebook from './botaoFacebook';
import LayoutTexto from './texto';

export default class LayoutBarraUsuario extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    if (true) {
      return (<LayoutBotaoFacebook />)
    } else {
      return (
        <LayoutQuadro style={[estilo.prototype.global().quadroBarraUsuario]}>

          <Image
            source={{ uri: "http://graph.facebook.com/1722854961180673/picture?type=large&width=720&height=720" }}
            style={[estilo.prototype.global().tabelaItensImg, { width: 50, height: 50 }]} />
          <LayoutTexto style={estilo.prototype.global().tabelaItens}>Rubens Flinco</LayoutTexto>
          
          <Image
            source={{ uri: staticAssetURL('icons/estrela.png') }}
            style={[estilo.prototype.global().barraUsuariosIcons, { width: 60, height: 60 }]} />
          <LayoutTexto style={estilo.prototype.global().tabelaItens}> 8273428</LayoutTexto>

          <VrButton style={[estilo.prototype.global().ladoALado]}>
            <Image
              source={{ uri: staticAssetURL('icons/config.png') }}
              style={[estilo.prototype.global().barraUsuariosIcons, { width: 60, height: 60 }]} />
            <LayoutTexto style={estilo.prototype.global().tabelaItens}>Configurações</LayoutTexto>
          </VrButton>

          <VrButton style={[estilo.prototype.global().ladoALado]}>
            <Image
              source={{ uri: staticAssetURL('icons/sair.png') }}
              style={[estilo.prototype.global().barraUsuariosIcons, { width: 60, height: 60 }]} />
            <LayoutTexto style={estilo.prototype.global().tabelaItens}>Sair</LayoutTexto>
          </VrButton>

        </LayoutQuadro>
      );
    }

  }

};

AppRegistry.registerComponent('LayoutBarraUsuario', () => LayoutBarraUsuario);
