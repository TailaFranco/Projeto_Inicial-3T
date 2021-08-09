import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import './index.css';

import App from './pages/App';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Menu from './pages/Menu';
import Equipamento from './pages/Equipamento';
import Salas from './pages/Salas';

import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/cadastrar" component={Cadastrar} />
        <Route path="/menu" component={Menu} />
        <Route path="/equipamento" component={Equipamento} />
        <Route path="/salas" component={Salas} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
