import '../style/css/App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            // email : 'adm@gmail.com',
            // senha : 'adm123',
            email : '',
            senha : '',
            erroMensagem : '',
            isLoading : false
        }
    }

    efetuarLogin = (event) => {

        event.preventDefault();

        this.setState({erroMensagem : '', isLoading : true})

        axios.post('http://localhost:5000/api/Login', {

            email : this.state.email,
            senha : this.state.senha
        })
        .then(resposta => {
            if (resposta.status === 200) {
                localStorage.setItem('usuario-token', resposta.data.token);
                this.setState({ isLoading : false })

                this.props.history.push('/Menu')
            }
        })
        .catch(() => {
            this.setState({ erroMensagem : 'Email ou senho incorretos', isLoading: false })
        })
    }

    attCampos = async (campo) => {
        await this.setState({[campo.target.name] : campo.target.value })
        console.log(this.state.email)
        console.log(this.state.senha)
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
                        <h2>Login</h2>
                        <form onSubmit={this.efetuarLogin}>
                            <div className="alinhar-form alinhar-from2">
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
                                {
                                    this.state.isLoading === true &&
                                    <button 
                                        type="submit"
                                        disabled
                                    >Loading</button>
                                }
                                {
                                    this.state.isLoading === false &&
                                    <button 
                                        type="submit"
                                    >Login</button>
                                }
                                    <p style={{ color : 'red', textAlign : 'center'}} >{this.state.erroMensagem}</p>
                            </div>
                        </form>
                        <p style={{color: 'white'}}>Ou <Link to="/cadastrar" style={{borderBottom: '1px #FF3535 solid'}}>cadastre-se</Link> já!</p>
                    </div>
                </div>
            </section>
        );  
    }
}
export default Login;