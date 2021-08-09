import '../style/css/App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Lateral extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <aside className="menu-lateral">
                <nav style={{width : '100%'}}>
                    <ul className="menu-lat-lista">
                        <li id="menu"><Link to="/menu">Menu</Link></li>
                        <li><Link to="/salas">Cadastrar Classes</Link></li>
                        <li><Link to="/equipamento">Cadastrar Equipamento</Link></li>
                    </ul>
                </nav>
                <div className="sair">
                    <Link to="/" style={{borderBottom : '1px #FF3535 solid'}}>Sair</Link>
                </div>
            </aside>
        )
    }
}
export default Lateral