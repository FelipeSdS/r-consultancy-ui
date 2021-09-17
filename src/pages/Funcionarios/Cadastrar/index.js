import React from "react";
import { Component } from "react";

import { Header } from "../../../components/Header";

import { findByCep } from "../../../services/ViaCep";

export default class CadastrarFuncionario extends Component{

    constructor(props){
        super(props)

        this.state = {
            txNome : '',
            txSobrenome: '',
            txCep: '',
            txCidade: ''
        }
    }

    handleChange = async (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if([e.target.name] == 'txCep' && e.target.value.length == 8){
          const response = await findByCep(e.target.value);
          console.log(response);
          this.setState({txCidade: response.logradouro})
        }
      }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state);
    }

    render(){
        const { txNome, txSobrenome, txCep, txCidade } = this.state
        return(
            <>
                <Header />
                <div className="container">
                    <div className="container shadow p-3 space-header">
                        <form onSubmit={this.handleSubmit}>
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
                                        <label>Sobrenome</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txSobrenome" 
                                            value={txSobrenome}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Cep</label>
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
                            </div>
                            <button type="submit" className="btn btn-primary">Salvar</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}