import React from "react";

import './styles.css'

import { Link } from "react-router-dom";

import closeButton from '../../assets/close.png';
import employeeLogo from '../../assets/employee.png';
import cargosLogo from '../../assets/cargos.png';
import departamentosLogo from '../../assets/departamentos.png';


export function Header(){
    return(
        <>
            <nav className="navbar navbar-dark bg-dark shadow">
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
                                    <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        <img src={departamentosLogo} alt="" />
                                        <strong>Departamentos</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>
                                                    <button data-bs-dismiss="modal" aria-label="Close">
                                                        <Link to="/departamentos">Listar</Link>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button data-bs-dismiss="modal" aria-label="Close">
                                                        <Link to="/departamentos/cadastro">Cadastrar</Link>
                                                    </button>
                                                </li>
                                            </ul>
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
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <img src={employeeLogo} alt="" />
                                        <strong>Funcionarios</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        
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