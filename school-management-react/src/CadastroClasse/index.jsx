import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import style from './style.css'

function CadastroClasses() {

    const [tipoEquipamento, setTipoEquipamento] = useState('');
    const [sala, setSala] = useState('');
    const [marca, setMarca] = useState('');
    const [numeroSerie, setNumeroSerie] = useState('');
    const [descricao, setDescricao] = useState('');


    const salvar = () => {
        const form = {
            tipoEquipamento: tipoEquipamento,
            sala: sala,
            marca: marca,
            numeroSerie: numeroSerie,
            descricao: descricao
        }
        fetch('http://localhost:5000/api/Sala', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then(re => re.json())
    }



    return (
        <div className="pegaNaMinha" >

            <section>
                <div className="barra">
                    <div className="container1">
                        <div className="alinhar-barra">
                            <div className="alinhar-menu">
                                <div className="menu">
                                    <a href="#"><h2>Menu</h2></a>
                                </div>
                            </div>
                            <div className="alinhar-classes">
                                <div className="classes">
                                    <a href="#"><h2>Cadastrar Classes</h2></a>
                                </div>

                            </div>
                            <div className="alinhar-equipamentos">
                                <div className="equipamentos">
                                    <a href="#"><h2>Cadastrar Equipamentos</h2></a>
                                </div>
                            </div>
                            <div className="alinhar-sair">
                                <div className="sair">
                                    <a href="#"><h2>Sair</h2></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section class="cadastro-classe">
                <div class="home">
                    <div class="container2">
                        <div class="alinhar-home">
                            <div class="alinhar-classe">
                                <div class="classe">
                                    <h2>CADASTRAR CLASSE</h2>
                                    <hr />
                                </div>
                            </div>
                            <div class="info-classe">
                                <form onSubmit={eve => {
                                    eve.preventDefault()
                                    salvar()
                                }}>
                                    <div class="linha-cima">

                                        <div class="alinhar-nome">

                                            <div class="nome">
                                                <h2 class="title-input">Nome</h2>
                                                <input class="input-classe" type="text" />
                                            </div>
                                        </div>
                                        <div class="alinhar-metragem">
                                            <div class="metragem">
                                                <h2 class="title-input">Metragem</h2>
                                                <input class="input-classe" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="alinhar-andar">
                                        <div class="andar">
                                            <h2 class="title-input">Andar</h2>
                                            <input class="input-classe" type="text" />
                                        </div>
                                    </div>
                                    <button className="btn-salvar">SALVAR</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default CadastroClasses;