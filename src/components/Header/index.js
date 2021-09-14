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
            <nav class="navbar navbar-dark bg-dark shadow">
                <div class="container-fluid">
                    <Link to="/">
                        <span class="navbar-brand mb-0 h1 title">R-Consultancy</span>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title title" id="exampleModalLabel">Menu</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <img src={closeButton} width="30px" height="30px" alt="" />
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        <img src={departamentosLogo} alt="" />
                                        <strong>Departamentos</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
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
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <img src={cargosLogo} alt="" />
                                        <strong>Cargos</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <img src={employeeLogo} alt="" />
                                        <strong>Funcionarios</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div class="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}