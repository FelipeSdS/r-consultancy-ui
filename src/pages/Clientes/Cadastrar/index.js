import React, { Component } from "react";


import { create } from "../../../services/ClienteService";
import { findByCep } from "../../../services/ViaCep";


import { Header } from "../../../components/Header";

export default class CadastrarCliente extends Component{

    constructor(props){
        super(props)

        this.state = {
            txRazaoSocial: '',
            txNomeFantasia: '',
            txNomeSimples: '',
            txCpf: '',
            txCnpj: '',
            txCep: '',
            txLogradouro: '',
            vlNumero: '',
            txBairro: '',
            txComplemento: '',
            txCidade: '',
            txUf: '',
            txPais: '',
            txTelefone: '',
            txEmail: '',
            txWebSite: '',
            txAreaNegocios : ''
        }
    }

    handleChange = async (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if([e.target.name] == 'txCep' && e.target.value.length == 8){
            const response = await findByCep(e.target.value);
            this.setState({ txLogradouro: response.logradouro, txBairro: response.bairro,
                            txCidade: response.localidade, txUf: response.uf,
                            txComplemento: response.complemento                           
                        })
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        create(this.state);
    }

    handleReset = (e) =>{
        this.setState({
            txRazaoSocial: '', txNomeFantasia: '',txNomeSimples: '', txCpf: '', txCnpj: '', txCep: '',
            txLogradouro: '', vlNumero: '', txBairro: '', txComplemento: '', txCidade: '', txUf: '',
            txPais: '', txTelefone: '', txEmail: '', txWebSite: '', txAreaNegocios : ''
        })
    }

    render(){

        const { txRazaoSocial, txNomeFantasia, txNomeSimples, 
                txCpf, txCnpj, txCep, txLogradouro, vlNumero, txBairro, txComplemento, txCidade, txUf, txPais,
                txTelefone, txEmail, txWebSite, txAreaNegocios
            } = this.state

        return(
            <>
                <Header />
                <div className="container">
                    <div className="container shadow p-3 space-header">
                        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                            <label>Razão social</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                name="txRazaoSocial" 
                                                value={txRazaoSocial}
                                                onChange={this.handleChange}
                                            />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Nome Fantasia</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txNomeFantasia" 
                                            value={txNomeFantasia}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>Nome Simples</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txNomeSimples" 
                                            value={txNomeSimples}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>CPF</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txCpf" 
                                            value={txCpf}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>CNPJ</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txCnpj" 
                                            value={txCnpj}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>CEP</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txCep" 
                                            value={txCep}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>Logradouro</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txLogradouro" 
                                            value={txLogradouro}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Numero</label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            name="vlNumero" 
                                            value={vlNumero}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>Bairro</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txBairro" 
                                            value={txBairro}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>Complemento</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txComplemento" 
                                            value={txComplemento}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Cidade</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txCidade" 
                                            value={txCidade}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>UF</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txUf" 
                                            value={txUf}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>País</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txPais" 
                                            value={txPais}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Telefone</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txTelefone" 
                                            value={txTelefone}
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
                                    <div className="form-group">
                                        <label>WebSite</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txWebSite" 
                                            value={txWebSite}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>Área de Negócios</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txAreaNegocios" 
                                            value={txAreaNegocios}
                                            onChange={this.handleChange}
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