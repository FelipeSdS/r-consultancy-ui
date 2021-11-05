import React, { Component } from "react";
import { Header } from "../../../components/Header";
import { rConsultancyApi } from "../../../services/api";

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class ListarCliente extends Component{

    constructor(props){
        super(props)

        this.state = {
            clientes: []
        }
    }

    componentDidMount(){
        this.buscarClientes();
    }

    

    buscarClientes = async (e) =>{
        const response = await rConsultancyApi.get('cliente');
        this.setState({ clientes: response.data });
    }

    editarCliente(paramIdCliente){
        alert('Opa, você clicou no cliente: ' + paramIdCliente);
    }

    deletarCliente(paramIdCliente){
        alert('Opa, você quer deletar o cliente: ' + paramIdCliente);
    }

    render(){

        const{ clientes } = this.state;

        return(
            <>           
            <Header />
            <div className="container">
                <div className="container shadow p-3 space-header">
                <table className="table table-striped">
                    <thead className="table-head">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Razão social</th>
                        <th scope="col">Nome fantasia</th>
                        <th scope="col">CNPJ</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        clientes.map(cliente =>
                                <tr key={cliente.idCliente}>
                                    <th scope="row">{cliente.idCliente}</th>
                                    <td>{cliente.txRazaoSocial}</td>
                                    <td>{cliente.txNomeFantasia}</td>
                                    <td>{cliente.txCnpj}</td>
                                    <td onClick={() => this.editarCliente(cliente.idCliente)}>
                                        <EditIcon 
                                            className="button-icon" 
                                            data-toggle="modal" 
                                            data-target="#exampleModal"
                                        />
                                    </td>
                                    <td onClick={() => this.deletarCliente(cliente.idCliente)}>
                                        <DeleteIcon className="button-icon" />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
            </>
        );
    }
}