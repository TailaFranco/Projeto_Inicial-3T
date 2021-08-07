import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import '../CadastroClasse/index'


function CadastrarEquipamento(){
    return(
        <div className="pegaNaMinha">
            <section>
            <div class="barra">
                <div class="container1">
                    <div class="alinhar-barra">
                        <div class="alinhar-menu">
                            <div class="menu">
                                <a href="#"><h2>Menu</h2></a>
                            </div>
                        </div>
                        <div class="alinhar-classes">
                            <div class="classes">
                                <a href="#"><h2>Cadastrar Classes</h2></a>
                            </div>
    
                        </div>
                        <div class="alinhar-equipamentos">
                            <div class="equipamentos">
                                <a href="#"><h2>Cadastrar Equipamentos</h2></a>
                            </div>
                        </div>
                        <div class="alinhar-sair">
                            <div class="sair">
                                <a href="#"><h2>Sair</h2></a>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        </section>
        <section class="cadastro-equipamento">
            <div class="home">
                <div class="container2">
                    <div class="alinhar-home">
                        <div class="alinhar-equipamento">
                            <div class="equipamento">
                                <h2>CADASTRAR EQUIPAMENTOS</h2>
                                <hr/>
                            </div>
                        </div>
                        <div class="info-equipamento">
                            <div class="linha-cima">                       
                                <div class="alinhar-marca">
                                    <div class="marca">
                                        <h2 class="title-input">Marca</h2>
                                        <input class="input-equipamento" type="text"/>
                                    </div>
                                </div>
                                <div class="alinhar-serie">
                                    <div class="serie">
                                        <h2 class="title-input">Número de Série</h2>
                                        <input class="input-equipamento" type="text"/>
                                    </div>
                                </div>
                            </div>  
                            <div class="linha-baixo"> 
                                <div class="alinhar-descricao">
                                    <div class="descricao">
                                        <h2 class="title-input">Descrição</h2>
                                        <textarea class="input-descricao" type="text"></textarea>
                                    </div>
                                </div>
                                <div class="coluna-select" >
                                    <div class="form-select">
                                        <h2 class="title-input">Tipo Equipamento</h2>
                                        <select class="input-select">
                                          <option value="0">Selecionar</option>
                                          <option value="1">.</option>
                                          <option value="2">.</option>
                                        </select>
                                    </div>
                                    <div class="form-select">
                                        <h2 class="title-input">Atividade</h2>
                                        <select class="input-select">
                                          <option value="0">Selecionar</option>
                                          <option value="1">.</option>
                                          <option value="2">.</option>
                                        </select>
                                    </div>
                                    <div class="form-select">
                                        <h2 class="title-input">Sala</h2>
                                        <select class="input-select">
                                          <option value="0">Selecionar</option>
                                          <option value="1">.</option>
                                          <option value="2">.</option>
                                        </select>
                                    </div>        
                                </div>
                            </div>   
                            
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default CadastrarEquipamento;