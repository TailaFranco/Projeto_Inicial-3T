import '../style/css/App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import sM from '../style/images/sM.png'
import illustra from '../style/images/illustra.png'
import sM3 from '../style/images/sM3.png'

class App extends Component{

  render(){
    return (
      <div>
        <header>
            <div className="alinhar-cabecalho">
                <div className="logo">
                    <p className="p1">school</p>
                    <p className="p2">management</p>
                </div>
                <div className="ops-cabecalho">
                    <nav>
                        <ul className="menu">
                            <li><a href="#sobrenos">sobre nós</a></li>
                            <li><Link to="./login">login</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <section>
            <div className="banner">
                <div className="container">
                    <div className="alinhar-banner">
                        <div className="alinhar-cadastrese">
                            <div className="cadastrese">
                                <h2>Cadastre-se já!</h2>
                                <Link className="botao" to="/cadastrar">Cadastre-se</Link>
                            </div>
                        </div>
                        <div className="logo2">
                            <img src={sM} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div id="sobrenos">
                <div className="container">
                    <div className="alinhar-sobrenos">
                        <h2>sobre nós</h2>
                    </div>
                </div>
                <div className="sobrenos-txt">
                    <div className="container">
                        <div className="alinhar-txt-img">
                            <div className="alinhar-imgsn">
                                <img src={illustra} alt=""/>
                            </div>
                            <div className="alinhar-txtsn">
                                <p>A School Management é um sistema criado para ajudar na organização de escolas com as salas de aula e os equipamentos que são utilizados  nas mesmas.
                                    Nosso foco é tornar essa tarefa mais simples, rápida e facil. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="esperando">
                <div className="container">
                    <div className="alinhar-esperando">
                        <h2>Tá esperando o que?</h2>
                        <div className="txt-esperando">
                            <p>Cadastre-se já ou faça login para aproveitar ao maximo da School Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div className="container">
                <div className="alinhar-footer">
                    <div className="links">
                        <h3>Links utéis</h3>
                        <div className="lista-footer">
                            <ul>
                                {/* <li><a href="#">loremloremlorem</a></li>
                                <li><a href="#">loremloremlorem</a></li>
                                <li><a href="#">loremloremlorem</a></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="logo3">
                            <img src={sM3} alt=""/>
                            <p>Todos os Direitos Reservados</p>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
