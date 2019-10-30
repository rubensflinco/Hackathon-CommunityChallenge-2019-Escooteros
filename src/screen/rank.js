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
import ScreenCarregando from './carregando';
import ServiceUser from '../service/user';
import ServiceLogin from '../service/login';

export default class ScreenRank extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      carregado: false,
      getUsers: []
    }
  }

  async componentDidMount() {
    await this.getUsers();
  }

  async getUsers() {
    await this.setState({ carregado: false });
    let response = await ServiceUser.prototype.getTodos("?filtroRank=true");
    let getUsers = response.data;
    console.log(getUsers);
    await this.setState({ getUsers, carregado: true });
  }

  render() {
    if (this.state.carregado) {
      return (
        <LayoutQuadro style={[estilo.prototype.global().fundoTransparente, estilo.prototype.global().transformeQuadrado]}>
          <LayoutBarraUsuario />

          <LayoutQuadro style={[estilo.prototype.global().quadroRank]}>
            <LayoutTexto style={[estilo.prototype.global().quadroRankTitulo]}>{global.linguaAtual.ScreenRank.titulo}</LayoutTexto>

            {
              this.state.getUsers.map((user, index) => {return(
                  <LayoutTabelaLinha key={user._id}>
                    <Image
                      source={{ uri: user.foto }}
                      style={[estilo.prototype.global().tabelaItensImg, { width: 50, height: 50 }]} />
                    <LayoutTexto style={estilo.prototype.global().tabelaItens}>{user.nome}</LayoutTexto>
                    <Image
                      source={{ uri: staticAssetURL('icons/estrela.png') }}
                      style={[estilo.prototype.global().tabelaItensIcons, { width: 60, height: 60 }]} />
                    <LayoutTexto style={estilo.prototype.global().tabelaItens}>{user.pontos}</LayoutTexto>
                  </LayoutTabelaLinha>
                )})
            }

          </LayoutQuadro>
        </LayoutQuadro>
      );
    } else {
      return (<ScreenCarregando />)
    }
  }


};

AppRegistry.registerComponent('ScreenRank', () => ScreenRank);
