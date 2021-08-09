import '../style/css/App.css';
import { Component } from 'react';
import axios from 'axios';
import { parseJwt } from '../services/auth';

import Lateral from './Lateral';

class Salas extends Component{
    constructor(props){
        super(props);
        this.state = {
            idUsuario: parseJwt().jti,
            nome: '',
            metragem: '',
            andar: '',
        }
    }


    Cadastrar = async () => {

        await axios.post('http://localhost:5000/api/Sala',{

            idUsuario : this.state.idUsuario,
            nome : this.state.nome,
            metragem : this.state.metragem,
            andar : this.state.andar
        })

        .then(console.log('cadastrado'))
        
        .catch(erro => console.log(erro))

        .then(Location.reload())
    };

    attCampos = async (campo) => {
        await this.setState({[campo.target.name] : campo.target.value })
        console.log(this.state.idUsuario)
        console.log(this.state.nome)
        console.log(this.state.numeroSerie)
        console.log(this.state.andar)
    }

    render(){
        return(
            <div className="div-Flex">
                <Lateral/>
                <div className="conteudo-menu">
                    <div className="alinhar-content-menu">
                        <div className="titulo-menu">
                            <h1>Cadastrar Salas</h1>
                        </div>
                        <div className="alinhar-form">
                            <div className="content-classe">
                                <form onSubmit={this.Cadastrar}>
                                        <div className="campo">
                                            <p>Nome</p>
                                            <input 
                                                type="text" 
                                                value={this.state.nome} 
                                                onChange={this.attCampos}
                                                name="nome"
                                                required
                                            />
                                        </div>
                                        <div className="campo">
                                            <p>Metragem</p>
                                            <input 
                                                type="text" 
                                                value={this.state.metragem} 
                                                onChange={this.attCampos}
                                                name="metragem"
                                                required
                                            />
                                        </div>
                                        <div className="campo">
                                            <p>Andar</p>
                                            <input 
                                                type="number" 
                                                value={this.state.andar} 
                                                onChange={this.attCampos}
                                                name="andar"
                                                required
                                            />
                                        </div>
                                    <div className="alinhar-botao">
                                        <button type="submit">Cadastrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Salas