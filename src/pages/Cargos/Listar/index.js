import React, { Component }  from "react";
import { Header } from "../../../components/Header";

import { rConsultancyApi } from "../../../services/api";

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class ListarCargos extends Component{

    constructor(props){
        super(props)

        this.state = {
            idCliente: '',
            clientes: [],
            idArea: '',
            areas: [],
            idDepartamento: '',
            departamentos: [],
            cargos: []
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
        if([e.target.name] == 'idDepartamento' && e.target.value !== ""){
            this.buscarCargosPorDepartamento(e.target.value);
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
        this.setState({ departamentos :response.data });
    }

    buscarCargosPorDepartamento = async (idDepartamento) =>{
        const response = await rConsultancyApi.get(`cargo/departamento/${idDepartamento}`);
        this.setState({ cargos :response.data });
    }



    editarCargo(paramIdCargo){
        alert('Opa, você clicou no cargo: ' + paramIdCargo);
    }

    deletarCargo(paramIdCargo){
        alert('Opa, você quer deletar o cargo: ' + paramIdCargo);
    }

    render(){

        const{ clientes, idCliente, areas, idArea, idDepartamento, departamentos, cargos } = this.state;

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
                    <div className="row">
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
                        <div className="col">
                            <div className="form-group">
                                <label>Departamento</label>
                                <select className="form-select"  name="idDepartamento"  value={idDepartamento} onChange={this.handleChange}>
                                    <option selected value="0">Seleciona uma opção ...</option>
                                    {departamentos.map(departamento =>
                                        <option key={departamento.idDepartamento} value={departamento.idDepartamento}>{departamento.txNome}</option>) 
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
                            <th scope="col">Nivel</th>
                            <th scope="col">Base Salarial</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            cargos.map(cargo =>
                                    <tr key={cargo.idCargo}>
                                        <th scope="row">{cargo.idCargo}</th>
                                        <td>{cargo.txNome}</td>
                                        <td>{cargo.txNivel}</td>
                                        <td>{cargo.vlBaseSalarial}</td>
                                        <td onClick={() => this.editarCargo(cargo.idCargo)}>
                                            <EditIcon 
                                                className="button-icon" 
                                            />
                                        </td>
                                        <td onClick={() => this.deletarCargo(cargo.idCargo)}>
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