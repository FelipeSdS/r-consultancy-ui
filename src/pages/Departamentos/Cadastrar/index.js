import React,{ Component } from "react";

import { Header } from "../../../components/Header";

export default class CadastrarDepartamentos extends Component{

    constructor(props){
        super(props)

        this.state = {
            cdCliente: '',
            txNome : '',
            txSigla: '',
            txResponsavel: '',
            txEmail: '',
            txDescricao: '',
            empresas: []
        }
    }

    componentDidMount(){
        this.loadSelect();
    }

    loadSelect = async (e) =>{
        const listEmpresa = [
            {id: 1, txNome:"FACULDADE DAS AMERICAS"},
            {id: 2, txNome:"SOCIEDADE ESPORTIVA PALMEIRAS"}]
        this.setState({ empresas: listEmpresa})
    }

    handleChange = async (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state);
    }

    handleReset = (e) =>{
        this.setState({
            cdCliente: '', txNome: '',txSigla: '', txResponsavel: '', txEmail: '', txDescricao: ''
        })
    }

    render(){
        const { cdCliente, txNome, txSigla, txResponsavel, txEmail, txDescricao, empresas } = this.state
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
                                            {empresas.map(empresa =>
                                                <option key={empresa.id} value={empresa.id}>{empresa.txNome}</option>) }
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
                                        <label>Responsavel</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txResponsavel" 
                                            value={txResponsavel}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>E-mail</label>
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