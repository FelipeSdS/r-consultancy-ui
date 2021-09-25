import React from "react";

import './styles.css'

import { Link } from "react-router-dom";

import closeButton from '../../assets/close.png';
import funcionarioLogo from '../../assets/employee.png';
import cargosLogo from '../../assets/cargos.png';
import areasLogo from '../../assets/areas.png';
import departamentosLogo from '../../assets/departamentos.png';
import clientesLogo from '../../assets/cliente.png';


export function Header(){
    return(
        <>
            <nav className="navbar navbar-dark  shadow">
                <div className="container-fluid">
                    <Link to="/">
                        <span className="navbar-brand mb-0 h1 title">R-Consultancy</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title title" id="exampleModalLabel">Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <img src={closeButton} width="30px" height="30px" alt="" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">
                                        <img src={clientesLogo} alt="" />
                                        <strong>Clientes</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="list-group">
                                                <Link to="/clientes/cadastro">
                                                    <button className="list-group-item list-group-item-action" data-bs-dismiss="modal" aria-label="Close">
                                                        <strong className="main-name-title">Cadastrar</strong>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <img src={areasLogo} alt="" />
                                        <strong>Areas</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="list-group">
                                                <Link to="/areas/cadastro">
                                                    <button className="list-group-item list-group-item-action" data-bs-dismiss="modal" aria-label="Close">
                                                        <strong className="main-name-title">Cadastrar</strong>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        <img src={departamentosLogo} alt="" />
                                        <strong>Departamentos</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="list-group">
                                                <Link to="/departamentos/cadastro">
                                                    <button className="list-group-item list-group-item-action" data-bs-dismiss="modal" aria-label="Close">
                                                        <strong className="main-name-title">Cadastrar</strong>
                                                    </button>
                                                </Link>
                                                <Link to="/departamentos">
                                                    <button className="list-group-item list-group-item-action" data-bs-dismiss="modal" aria-label="Close">
                                                        <strong className="main-name-title">Listar</strong>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <img src={cargosLogo} alt="" />
                                        <strong>Cargos</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <Link to="/cargos/cadastro">
                                                <button className="list-group-item list-group-item-action" data-bs-dismiss="modal" aria-label="Close">
                                                    <strong className="main-name-title">Cadastrar</strong>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <img src={funcionarioLogo} alt="" />
                                        <strong>Funcionarios</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="list-group">
                                                <Link to="/funcionarios/cadastro">
                                                    <button className="list-group-item list-group-item-action" data-bs-dismiss="modal" aria-label="Close">
                                                        <strong className="main-name-title">Cadastrar</strong>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}