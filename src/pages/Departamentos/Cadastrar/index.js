import React,{ Component } from "react";

import { Header } from "../../../components/Header";
import { listUsers } from "../../../services/JsonPlaceHolder";

export default class CadastrarDepartamentos extends Component{

    constructor(props){
        super(props)

        this.state = {
            txNome : '',
            txSobrenome: '',
            txCep: '',
            txCidade: '',
            cdCliente: '',
            users: []
        }
    }

    componentDidMount(){
        this.loadSelect();
    }

    loadSelect = async (e) =>{
        const response = await listUsers();
        this.setState({ users: response})
    }

    handleChange = async (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state);
    }

    render(){
        const { txNome, txSobrenome, txCep, txCidade, cdCliente, users } = this.state
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
                            <div className="row">
                                <div className="col">
                                <select className="form-select" aria-label="Default select example" name="cdCliente"  value={cdCliente} onChange={this.handleChange}>
                                    {users.map(user =>
                                        <option key={user.id} value={user.id}>{user.name}</option>
                                    )

                                    }
                                </select>
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