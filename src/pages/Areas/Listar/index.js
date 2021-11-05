import React, { Component }  from "react";
import { Header } from "../../../components/Header";

import { rConsultancyApi } from "../../../services/api";

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class ListarAreas extends Component{

    constructor(props){
        super(props)

        this.state = {
            idCliente: '',
            clientes: [],
            areas: []
        }
    }

    componentDidMount(){
        this.buscarClientes();
    }

    handleChange = async (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if([e.target.name] == "idCliente" && e.target.value != ""){
            this.buscarAreasPorCliente(e.target.value);
        }
      }

    buscarClientes = async (e) =>{
        const response = await rConsultancyApi.get('cliente');
        this.setState({ clientes: response.data });
    }

    buscarAreasPorCliente = async (idCliente) =>{
        const response = await rConsultancyApi.get(`area/cliente/${idCliente}`);
        this.setState({ areas: response.data });
    }

    editarArea(paramIdArea){
        alert('Opa, você clicou na area: ' + paramIdArea);
    }

    deletarArea(paramIdArea){
        alert('Opa, você quer deletar a area: ' + paramIdArea);
    }

    render(){

        const{ clientes, idCliente, areas } = this.state;

        return(
            <>           
            <Header />
            <div className="container">
                <div className="container shadow p-3 space-header">
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
                    <table className="table table-striped">
                        <thead className="table-head">
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Sigla</th>
                            <th scope="col">Responsavel</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            areas.map(area =>
                                    <tr key={area.idArea}>
                                        <th scope="row">{area.idArea}</th>
                                        <td>{area.txNome}</td>
                                        <td>{area.txSigla}</td>
                                        <td>{area.txGerente}</td>
                                        <td onClick={() => this.editarArea(area.idArea)}>
                                            <EditIcon 
                                                className="button-icon" 
                                            />
                                        </td>
                                        <td onClick={() => this.deletarArea(area.idArea)}>
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