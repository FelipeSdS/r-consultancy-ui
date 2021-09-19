import React, { Component } from "react";
import { Header } from "../../../components/Header";

export default class CadastrarCargo extends Component{

    constructor(props){
        super(props)

        this.state = {
            cdCliente: '',
            txNome: '',
            txDescricao: '',
            txNivel: '',
            txBaseSalarial: '',
            clientes: []
        }
    }

    componentDidMount(){
        this.loadSelect();
    }

    loadSelect = async (e) =>{
        const listEmpresa = [
            {id: 1, txNome:"FACULDADE DAS AMERICAS"},
            {id: 2, txNome:"SOCIEDADE ESPORTIVA PALMEIRAS"}]
        this.setState({ clientes: listEmpresa})
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state);
    }

    handleReset = (e) =>{
        this.setState({
            cdCliente: '', txDescricao: '', txNome: '', txNivel: '', txBaseSalarial: ''
        })
    }

    render(){

        const { clientes, cdCliente, txDescricao, txNome, txNivel, txBaseSalarial } = this.state;

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
                                        <select className="form-select" aria-label="Default select example" name="cdCliente"  value={cdCliente} onChange={this.handleChange}>
                                            <option selected></option>
                                            {clientes.map(cliente =>
                                                <option key={cliente.id} value={cliente.id}>{cliente.txNome}</option>) }
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
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txBaseSalarial" 
                                            value={txBaseSalarial}
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