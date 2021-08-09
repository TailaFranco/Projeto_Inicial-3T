import '../style/css/App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Cadastrar extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome : '',
            email : '',
            senha : '',
            senhaConf : '',
            erroMensagem : '',
            isLoading : false
        }
    }

    confirmar = (event) =>{

        event.preventDefault();

        this.setState({erroMensagem : '', isLoading : true})

        if (this.state.senha === this.state.senhaConf) {

            this.cadastrar()
            console.log('cadastrado!')
        }
        else{
            this.setState({erroMensagem : 'As senhas não são iguais!'})
            console.log('incorreto!')
        }
    }

    cadastrar = () => {

        axios.post('http://localhost:5000/api/Usuario', {

            nome : this.state.nome,
            email : this.state.email,
            senha : this.state.senha
        })

        .catch(this.setState({erroMensagem : 'erro'}))

        .then(this.props.history.push('/login'))
    }

    attCampos = async (campo) => {
        await this.setState({[campo.target.name] : campo.target.value })
    }

    render(){
        return(
            <section className="login">
                <div className="propaganda">
                    <div className="texto-propaganda">
                        <p>Livre-se das planilhas e venha para a School Management</p>
                    </div>
                </div>
                <div className="sec-login">
                    <div className="alinhar-login">
                        <h2>Cadastre-se</h2>
                        <form onSubmit={this.confirmar}>
                            <div className="alinhar-form">
                                <div className="campo">
                                    <p>Nome</p>
                                    <input 
                                        type="text"
                                        name='nome'
                                        onChange={this.attCampos}
                                        value={this.state.nome} 
                                        required
                                    />
                                </div>
                                <div className="campo">
                                    <p>Email</p>
                                    <input 
                                        type="email"
                                        name='email'
                                        onChange={this.attCampos}
                                        value={this.state.email}
                                        required
                                    />
                                </div>
                                <div className="campo">
                                    <p>Senha</p>
                                    <input 
                                        type="password"
                                        name='senha'
                                        onChange={this.attCampos}
                                        value={this.state.senha}
                                        required
                                    />
                                </div>
                                <div className="campo">
                                    <p>Confirmar Senha</p>
                                    <input 
                                        type="password"
                                        name='senhaConf'
                                        onChange={this.attCampos}
                                        value={this.state.senhaConf}
                                        required
                                    />
                                </div>
                                    <button type="submit">Cadastre-se</button>
                                    <p style={{ color : 'white', textAlign : 'center'}} >{this.state.erroMensagem}</p>
                            </div>
                        </form>
                        <p style={{color : 'white'}}>Ou faça <Link to='/login' style={{borderBottom : '1px #FF3535 solid'}}>login</Link></p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cadastrar;