import React,{ Component } from "react";

import { Header } from "../../../components/Header";

export default class CadastrarDepartamentos extends Component{

    constructor(props){
        super(props)

        this.state = {
            txNome : '',
            txSobrenome: '',
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state);
    }

    render(){
        const { txNome, txSobrenome } = this.state
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
                            <button type="submit" className="btn btn-primary">Salvar</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}