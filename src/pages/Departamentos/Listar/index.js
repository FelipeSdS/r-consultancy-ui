import React, { Component }  from "react";
import { Header } from "../../../components/Header";

import { rConsultancyApi } from "../../../services/api";

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class ListarDepartamentos extends Component{

    constructor(props){
        super(props)

        this.state = {
            idCliente: '',
            clientes: [],
            idArea: '',
            areas: [],
            departamentos: []
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
        if([e.target.name] == 'idArea' && e.target.value !== ""){
            this.buscarDepartamentosPorArea(e.target.value);
        }

        if(([e.target.name] == 'idArea' [e.target.name] == 'idCliente')  && e.target.value !== ""){
            this.limpaSelect();
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

    buscarDepartamentosPorArea = async (idArea) =>{
        const response = await rConsultancyApi.get(`departamento/area/${idArea}`);
        this.setState({departamentos :response.data });
    }

    limpaSelect(){
        this.setState({departamentos: [], areas: [], departamentos: [] });
    }

    editarDepartamento(paramIdDepartamento){
        alert('Opa, você clicou no departamento: ' + paramIdDepartamento);
    }

    deletarDepartamento(paramIdDepartamento){
        alert('Opa, você quer deletar o departamento: ' + paramIdDepartamento);
    }

    render(){

        const{ clientes, idCliente, areas, idArea, departamentos } = this.state;

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
                         <div className="col">
                            <div className="form-group">
                                <label>Areas</label>
                                <select className="form-select" aria-label="Default select example" name="idArea"  value={idArea} onChange={this.handleChange}>
                                    <option selected value="0">Seleciona uma opção ...</option>
                                    {areas.map(area =>
                                        <option key={area.idArea} value={area.idArea}>{area.txNome}</option>) }
                                </select>
                            </div>
                        </div>
                    </div>                
                    <table className="table table-striped">
                        <thead className="table-head">
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Responsavel</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            departamentos.map(departamento =>
                                    <tr key={departamento.idDepartamento}>
                                        <th scope="row">{departamento.idDepartamento}</th>
                                        <td>{departamento.txNome}</td>
                                        <td>{departamento.txResponsavel}</td>
                                        <td onClick={() => this.editarDepartamento(departamento.idDepartamento)}>
                                            <EditIcon 
                                                className="button-icon" 
                                                data-toggle="modal" 
                                                data-target="#exampleModal"
                                            />
                                        </td>
                                        <td onClick={() => this.deletarDepartamento(departamento.idDepartamento)}>
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