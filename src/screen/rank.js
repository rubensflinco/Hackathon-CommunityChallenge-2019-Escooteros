import React from 'react';
import {
  AppRegistry,
  Environment,
  staticAssetURL,
  VrButton,
  Image
} from 'react-360';
import estilo from '../style/estiloGlobal';
import LayoutQuadro from '../layout/quadro';
import LayoutTexto from '../layout/texto';
import ScreenCreditos from './creditos';
import ScreenFimDoJogo from './fimDoJogo';
import ScreenJogando from './jogando';
import LayoutTabelaLinha from '../layout/tabelaLinha';
import LayoutBarraUsuario from '../layout/barraUsuario';

export default class ScreenRank extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Environment.setBackgroundImage(staticAssetURL('backgroundScreenHome.jpg'));
    try {
      ScreenCreditos.prototype.componentDestroy();
      ScreenFimDoJogo.prototype.componentDestroy();
      ScreenJogando.prototype.componentDestroy();
    } catch (error) {

    }
  }

  clickPerfilRank() {
    global.PanelDireitaTelaAtual = "ScreenPerfil";
  }

  render() {

    return (
      <LayoutQuadro style={[estilo.prototype.global().fundoTransparente, estilo.prototype.global().quadroInicio]}>
        <LayoutBarraUsuario />

        <LayoutQuadro style={[estilo.prototype.global().quadroRank]}>
          <LayoutTexto style={[estilo.prototype.global().quadroRankTitulo]}>{global.linguaAtual.ScreenRank.titulo}</LayoutTexto>

          <VrButton onClick={this.clickPerfilRank}>
            <LayoutTabelaLinha>
              <Image
                source={{ uri: "http://graph.facebook.com/1722854961180673/picture?type=large&width=720&height=720" }}
                style={[estilo.prototype.global().tabelaItensImg, { width: 50, height: 50 }]} />
              <LayoutTexto style={estilo.prototype.global().tabelaItens}>Rubens Flinco</LayoutTexto>
              <Image 
                source={{ uri: staticAssetURL('icons/estrela.png') }} 
                style={[estilo.prototype.global().tabelaItensIcons, { width: 60, height: 60 }]} />
              <LayoutTexto style={estilo.prototype.global().tabelaItens}>14328</LayoutTexto>
            </LayoutTabelaLinha>
          </VrButton>

          <VrButton onClick={this.clickPerfilRank}>
            <LayoutTabelaLinha>
              <Image
                source={{ uri: "http://graph.facebook.com/1722854961180673/picture?type=large&width=720&height=720" }}
                style={[estilo.prototype.global().tabelaItensImg, { width: 50, height: 50 }]} />
              <LayoutTexto style={estilo.prototype.global().tabelaItens}>Rubens Flinco</LayoutTexto>
              <Image 
                source={{ uri: staticAssetURL('icons/estrela.png') }} 
                style={[estilo.prototype.global().tabelaItensIcons, { width: 60, height: 60 }]} />
              <LayoutTexto style={estilo.prototype.global().tabelaItens}>14328</LayoutTexto>
            </LayoutTabelaLinha>
          </VrButton>

          
          <VrButton onClick={this.clickPerfilRank}>
            <LayoutTabelaLinha>
              <Image
                source={{ uri: "http://graph.facebook.com/1722854961180673/picture?type=large&width=720&height=720" }}
                style={[estilo.prototype.global().tabelaItensImg, { width: 50, height: 50 }]} />
              <LayoutTexto style={estilo.prototype.global().tabelaItens}>Rubens Flinco</LayoutTexto>
              <Image 
                source={{ uri: staticAssetURL('icons/estrela.png') }} 
                style={[estilo.prototype.global().tabelaItensIcons, { width: 60, height: 60 }]} />
              <LayoutTexto style={estilo.prototype.global().tabelaItens}>14328</LayoutTexto>
            </LayoutTabelaLinha>
          </VrButton>

          
          <VrButton onClick={this.clickPerfilRank}>
            <LayoutTabelaLinha>
              <Image
                source={{ uri: "http://graph.facebook.com/1722854961180673/picture?type=large&width=720&height=720" }}
                style={[estilo.prototype.global().tabelaItensImg, { width: 50, height: 50 }]} />
              <LayoutTexto style={estilo.prototype.global().tabelaItens}>Rubens Flinco</LayoutTexto>
              <Image 
                source={{ uri: staticAssetURL('icons/estrela.png') }} 
                style={[estilo.prototype.global().tabelaItensIcons, { width: 60, height: 60 }]} />
              <LayoutTexto style={estilo.prototype.global().tabelaItens}>14328</LayoutTexto>
            </LayoutTabelaLinha>
          </VrButton>

          
          <VrButton onClick={this.clickPerfilRank}>
            <LayoutTabelaLinha>
              <Image
                source={{ uri: "http://graph.facebook.com/1722854961180673/picture?type=large&width=720&height=720" }}
                style={[estilo.prototype.global().tabelaItensImg, { width: 50, height: 50 }]} />
              <LayoutTexto style={estilo.prototype.global().tabelaItens}>Rubens Flinco</LayoutTexto>
              <Image 
                source={{ uri: staticAssetURL('icons/estrela.png') }} 
                style={[estilo.prototype.global().tabelaItensIcons, { width: 60, height: 60 }]} />
              <LayoutTexto style={estilo.prototype.global().tabelaItens}>14328</LayoutTexto>
            </LayoutTabelaLinha>
          </VrButton>

        </LayoutQuadro>
      </LayoutQuadro>
    );
  }


};

AppRegistry.registerComponent('ScreenRank', () => ScreenRank);
