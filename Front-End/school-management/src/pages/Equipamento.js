import '../style/css/App.css';
import { Component } from 'react';
import axios from 'axios';
import { parseJwt } from '../services/auth';

import Lateral from './Lateral';

class Equipamento extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaSalas : [],
            idTipoEquipamento: '',
            idAtivo: '',
            idSala: '',
            marca: '',
            numeroSerie: '',
            descricao: '',
            idUsuario: parseJwt().jti,
        }
    }

    buscarSalas = () => {

        fetch('http://localhost:5000/api/Sala/User/'+parseJwt().jti)
        
        .then(resposta => resposta.json())

        .then(data => this.setState({ listaSalas : data }))

        .catch(erro => console.log(erro));
    };


    Cadastrar = async () => {

        await axios.post('http://localhost:5000/api/Equipamento',{

            listaSalas : this.state.listaSalas,
            idTipoEquipamento : this.state.idTipoEquipamento,
            idAtivo : this.state.idAtivo,
            idSala : this.state.idSala,
            marca : this.state.marca,
            numeroSerie : this.state.numeroSerie,
            descricao : this.state.descricao,
            idUsuario : this.state.idUsuario
        })

        .then(console.log('cadastrado'))
        
        .catch(erro => console.log(erro))

        .then(Location.reload())
    };

    attCampos = async (campo) => {
        await this.setState({[campo.target.name] : campo.target.value })
        console.log(this.state.idUsuario)
        console.log(this.state.marca)
        console.log(this.state.numeroSerie)
        console.log(this.state.descricao)
        console.log(this.state.idTipoEquipamento)
        console.log(this.state.idAtivo)
        console.log(this.state.idSala)
    }

    componentDidMount(){
        this.buscarSalas()
    }

    render(){
        return(
            <div className="div-Flex">
                <Lateral/>
                <div className="conteudo-menu">
                    <div className="alinhar-content-menu">
                        <div className="titulo-menu">
                            <h1>Cadastrar Equipamentos</h1>
                        </div>
                        <div className="alinhar-form">
                            <div className="content-classe">


                                <form onSubmit={this.Cadastrar}>
                                    <div className="alinhar-form-sup">
                                        <div className="campo">
                                            <p>Marca</p>
                                            <input 
                                                type="text" 
                                                value={this.state.marca} 
                                                onChange={this.attCampos}
                                                name="marca"
                                                required
                                            />
                                        </div>
                                        <div className="campo">
                                            <p>N° de série</p>
                                            <input 
                                                type="number" 
                                                value={this.state.numeroSerie} 
                                                onChange={this.attCampos}
                                                name="numeroSerie"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="alinhar-form-sup inferior">
                                        <div className="campo">
                                            <p>Descrição</p>
                                            <input 
                                                type="text" 
                                                value={this.state.descricao} 
                                                onChange={this.attCampos}
                                                name="descricao"
                                                required
                                            />
                                        </div>
                                        <div className="select-opt">
                                            <div className="campo">
                                                <p>Tipo Equipamento</p>
                                                <select name="idTipoEquipamento" required value={this.state.idTipoEquipamento} onChange={this.attCampos}>
                                                    <option value="0">Selecionar...</option>
                                                    <option value="1">Mobiliário</option>
                                                    <option value="2">Informática</option>
                                                    <option value="3">Eletroeletrônico</option>
                                                </select>
                                            </div>
                                            <div className="campo">
                                                <p>Atividade</p>
                                                <select name="idAtivo" required value={this.state.idAtivo} onChange={this.attCampos}>
                                                    <option value="0">Selecionar...</option>
                                                    <option value="1">Ativo</option>
                                                    <option value="2">Inativo</option>
                                                </select>
                                            </div>
                                            <div className="campo">
                                                <p>Sala</p>
                                                <select name="idSala" value={this.state.idSala}  onChange={this.attCampos}>
                                                    <option value="0">Selecionar...</option>
                                                    {
                                                        this.state.listaSalas.map( (salas) => {
                                                            return(
                                                                <option key={salas.idSala} value={salas.idSala}>{salas.nome}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
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

export default Equipamento