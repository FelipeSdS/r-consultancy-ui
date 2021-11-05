import React, { Component } from "react";
import { Header } from "../../../components/Header";

import { rConsultancyApi } from "../../../services/api";

import { findByClienteId } from "../../../services/AreaService";
import { criarNovoCargo } from "../../../services/CargoService";
import { list } from "../../../services/ClienteService";
import { findByAreaId } from "../../../services/DepartamentoService";
import InputMask from "react-number-format";


export default class CadastrarCargo extends Component{

    constructor(props){
        super(props)

        this.state = {
            idCliente: '',
            idArea: '',
            idDepartamento: '',
            txNome: '',
            txDescricao: '',
            txNivel: '',
            vlBaseSalarial: '',
            clientes: [],
            areas: [],
            departamentos: [],
        }
    }

    componentDidMount(){
        this.loadSelect();
    }

    loadSelect = async (e) =>{
        const listEmpresa = await list();
        this.setState({ clientes: listEmpresa});
    }

    handleChange = async (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if([e.target.name] == 'idCliente' && e.target.value !== ""){
            const listAreas = await findByClienteId(e.target.value);
            this.setState({areas : listAreas});
        }
        if([e.target.name] == 'idArea' && e.target.value !== ""){
            const listDepartamentos = await findByAreaId(e.target.value);
            console.log(listDepartamentos);
            this.setState({departamentos : listDepartamentos});
        }
      }

    handleSubmit = async (e) =>{
        e.preventDefault()
        await rConsultancyApi.post('cargo', this.state)
        .then(response =>{
            alert('Criado com sucesso.');
        })
        .catch(error =>{
            console.log(error.response.data.message);
            alert(error.response.data.message);
        })
    }

    handleReset = (e) =>{
        this.setState({
            idCliente: '', idArea: '', idDepartamento: '', txDescricao: '', txNome: '', txNivel: '', txBaseSalarial: ''
        })
    }

    render(){

        const { clientes, idCliente, areas, idArea, departamentos, idDepartamento, txDescricao, txNome, txNivel, vlBaseSalarial } = this.state;

        return(
            <>
                <Header />
                <div className="container">
                    <div className="container shadow p-3 space-header">
                        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Empresa Cliente</label>
                                        <select className="form-select" name="idCliente"  value={idCliente} onChange={this.handleChange} >
                                            <option selected value="0">Seleciona uma opção ...</option>
                                            {clientes.map(cliente =>
                                                <option key={cliente.idCliente} value={cliente.idCliente}>{cliente.txRazaoSocial}</option>) 
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Area</label>
                                        <select className="form-select" name="idArea"  value={idArea} onChange={this.handleChange}>
                                            <option selected value="0">Seleciona uma opção ...</option>
                                            {areas.map(area =>
                                                <option key={area.idArea} value={area.idArea}>{area.txNome}</option>) 
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>Departamento</label>
                                        <select className="form-select"  name="idDepartamento"  value={idDepartamento} onChange={this.handleChange}>
                                            <option selected value="0">Seleciona uma opção ...</option>
                                            {departamentos.map(departamento =>
                                                <option key={departamento.idDepartamento} value={departamento.idDepartamento}>{departamento.txNome}</option>) 
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Nome</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txNome" 
                                            value={txNome}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>Nivel</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txNivel" 
                                            value={txNivel}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Base Salarial</label>
                                        <InputMask 
                                            thousandSeparator={true}  
                                            prefix={'R$'}
                                            type="text" 
                                            className="form-control" 
                                            name="vlBaseSalarial" 
                                            value={vlBaseSalarial}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>                      
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label>Descrição</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" 
                                            name="txDescricao" 
                                            value={txDescricao}
                                            onChange={this.handleChange}
                                            rows="3" 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button type="reset" className="btn btn-danger col-12">
                                        <label>Limpar</label>
                                    </button>
                                </div>
                                <div className="col">
                                    <button type="submit" className="btn btn-primary col-12">
                                        <label>Salvar</label>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}