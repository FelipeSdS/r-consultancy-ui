import React, { Component }  from "react";
import { Header } from "../../../components/Header";

import { list } from "../../../services/ClienteService";

import { create } from "../../../services/AreaService";

export default class CadastrarAreas extends Component{

    constructor(props){
        super(props)

        this.state = {
            idCliente: '',
            txNome: '',
            txSigla: '',
            txDescricao: '',
            txGerente: '',
            txEmail: '',
            clientes: []
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
    }

    handleSubmit = async (e) =>{
        e.preventDefault()
        const response = await create(this.state);
        this.handleReset();
    }

    handleReset = (e) =>{
        this.setState({
            cdCliente: '', txNome: '', txSigla:'', txGerente: '', txEmail: '', txDescricao: ''
        })
    }

    render(){

        const { clientes, idCliente, txNome, txSigla, txGerente, txEmail, txDescricao } = this.state;

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
                                            <select className="form-select" aria-label="Default select example" name="idCliente"  value={idCliente} onChange={this.handleChange}>
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
                                            <label>Sigla</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                name="txSigla" 
                                                value={txSigla}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                     </div>
                                </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Gerente</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txGerente" 
                                            value={txGerente}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txEmail" 
                                            value={txEmail}
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