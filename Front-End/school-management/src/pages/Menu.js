import '../style/css/App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { parseJwt } from '../services/auth';

import Lateral from './Lateral';

import lixeira from '../style/images/lixeira.png'
import lapis from '../style/images/lapis.png'

export default function Menu(){
    const [ listaSalas, setListaSalas ] = useState( [] );
    const [ listaEquip, setListaEquip ] = useState( [] );

    function buscarSalas(){
        axios('http://localhost:5000/api/Sala/User/'+parseJwt().jti)

        .then(resposta => {
            if (resposta.status === 200) {
                setListaSalas(resposta.data)
            }
        })

        .catch(erro => console.log(erro))
    };

    function buscarEquip(){
        
        axios('http://localhost:5000/api/Equipamento/User/'+parseJwt().jti)

        .then(resposta => {
            if (resposta.status === 200) {
                setListaEquip(resposta.data)
            }
        })
    };

    function excluirSala(salas){

        axios.delete('http://localhost:5000/api/Sala/'+salas.idSala)
        
        .then(resposta => {
            if (resposta.status === 204) {
                console.log('excluido')
                .then(window.location.reload())
            }
        })

        .catch(alert('Verifique se não há equipamentos cadastrados nessa sala!'))
 
        .then(window.location.reload())
    }

    function excluirEquip(Equip){

        axios.delete('http://localhost:5000/api/Equipamento/'+Equip.idEquipamento)

        .then(console.log('Excluido'))
        
        .catch(erro => console.log(erro))
        
        .then(window.location.reload())
                
    }

    useEffect( buscarEquip , [] );
    useEffect( buscarSalas , [] );

    return(
        <div className="div-Flex">
            <Lateral/>
            <div className="conteudo-menu">
                <div className="alinhar-content-menu">
                    <div className="titulo-menu">
                        <h1>Menu</h1>
                    </div>
                    <div className="alinhar-info">
                            <h2 className="titulo-salas">Salas</h2>
                        <div className="info-salas">
                            <div className="quadro">
                                <div className="titulos-quad">
                                    <div className="titulos titulosalas">
                                        <p>Nome</p>
                                        <p>Metragem</p>
                                        <p>Andar</p>
                                    </div>
                                </div>
                                <div className="conteudo">
                                    {
                                        listaSalas.map( (salas) => {
                                            return(
                                                <div key={salas.idSala} className="linha">
                                                    <div className="infolinha contentSalas">
                                                        <p>{salas.nome}</p>
                                                    </div>
                                                    <div className="infolinha contentSalas">
                                                        <p>{salas.metragem}</p>
                                                    </div>
                                                    <div className="infolinha contentSalas">
                                                        <p>{salas.andar}</p>
                                                    </div>
                                                    <div className="infolinha contentSalas">
                                                        <div className="alinharBotaoEditar">
                                                            <button onClick={() => excluirSala(salas)} className="botaoExcluir"><img alt='excluir' src={lixeira}/></button>
                                                            <button className="botaoExcluir"><img alt='Editar' src={lapis}/></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <h2 className="titulo-salas titulo-equip">Equipamento</h2>
                        <div className="info-salas">
                            <div className="quadro">
                                <div className="titulos-quad">
                                    <div className="titulos titulosEquip">
                                        <p>Marca</p>
                                        <p>N° de série</p>
                                        <p>Descrição</p>
                                        <p>Ativo/Inativo</p>
                                        <p>Sala</p>
                                    </div>
                                </div>
                                <div className="conteudo">
                                    {
                                        listaEquip.map((Equip) => {
                                            return(
                                                <div key={Equip.idEquipamento} className="linha">
                                                    <div className="infolinha infolinhaequipamento">
                                                        <p>{Equip.marca}</p>
                                                    </div>
                                                    <div className="infolinha infolinhaequipamento">
                                                        <p>{Equip.numeroSerie}</p>
                                                    </div>
                                                    <div className="infolinha infolinhaequipamento">
                                                        <p>{Equip.descricao}</p>
                                                    </div>
                                                    <div className="infolinha infolinhaequipamento">
                                                        <p>{Equip.idAtivoNavigation.ativo1}</p>
                                                    </div>
                                                    <div className="infolinha infolinhaequipamento">
                                                        <p>{Equip.idSalaNavigation.nome}</p>
                                                    </div>
                                                    <div className="infolinha infolinhaequipamento">
                                                        <div className="alinharBotaoEditar">
                                                            <button onClick={() => excluirEquip(Equip)} className="botaoExcluir"><img src={lixeira} alt="excluir" /></button>
                                                            <button  className="botaoExcluir"><img src={lapis} alt="excluir" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}