import React from "react";
import { Component } from "react";

import { Header } from "../../../components/Header";
import InputMask from "react-number-format";

import { rConsultancyApi } from "../../../services/api";

import { findByClienteId } from "../../../services/AreaService";
import { buscarCargoPorDepartamentoId } from "../../../services/CargoService";
import { list } from "../../../services/ClienteService";
import { findByAreaId } from "../../../services/DepartamentoService";
import { findByCep } from "../../../services/ViaCep";

export default class CadastrarFuncionario extends Component{

    constructor(props){
        super(props)

        this.state = {
            idCliente: '',
            idArea: '',
            idDepartamento: '',
            idCargo: '',
            txNome : '',
            txSobrenome: '',
            dtNascimento: '',
            txCpf: '',
            txComplementoSalario: '',
            ckValeAlimentacao: false,
            ckValeRefeicao: false,
            ckConvenio: false,
            txCep: '',
            txCidade: '',
            txLogradouro: '',
            vlNumero: '',
            txBairro: '',
            txComplemento: '',
            txUf: '',
            txPais: '',
            clientes: [],
            areas: [],
            departamentos: [],
            cargos: []
        }
    }
    componentDidMount(){
        this.loadSelect();
    }

    loadSelect = async (e) =>{
        const listClientes = await list();
        this.setState({ clientes: listClientes});
    }

    handleChange = async (e) => {
        this.setState({ [e.target.name]: e.target.value });

        if([e.target.name] == 'idCliente' && e.target.value !== ""){
            const listAreas = await findByClienteId(e.target.value);
            this.setState({areas : listAreas});
        }
        if([e.target.name] == 'idArea' && e.target.value !== ""){
            const listDepartamentos = await findByAreaId(e.target.value);
            console.log(listDepartamentos);
            this.setState({departamentos : listDepartamentos});
        }
        if([e.target.name] == 'idDepartamento' && e.target.value !== ""){
            const listCargos = await buscarCargoPorDepartamentoId(e.target.value);
            console.log(listCargos);
            this.setState({cargos : listCargos});
        }

        if([e.target.name] == 'txCep' && e.target.value.length == 8){
          const response = await findByCep(e.target.value);
          console.log(response);
          this.setState({ txLogradouro: response.logradouro, txBairro: response.bairro,
                          txCidade: response.localidade, txUf: response.uf,
                          txComplemento: response.complemento                           
                        });
        }

      }

    handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(this.state);
        await rConsultancyApi.post('funcionario', this.state)
        .then(response =>{
            alert('Criado com sucesso.');
        })
        .catch(error =>{
            console.log(error.response.data.message);
            alert(error.response.data.message);
        })
    }



    render(){
        const { idCliente, clientes, idArea, areas, idDepartamento, departamentos, idCargo, cargos,
                ckValeAlimentacao, ckValeRefeicao, ckConvenio, txComplementoSalario,
                txNome, txSobrenome, dtNascimento, txCpf, txCep, txLogradouro, vlNumero, txBairro, 
                txComplemento, txCidade, txUf, txPais } = this.state
        return(
            <>
                <Header />
                <div className="container">
                    <div className="container shadow p-3 space-header">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Empresa Cliente</label>
                                        <select className="form-select" name="idCliente"  value={idCliente} onChange={this.handleChange} >
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
                            <div className="row">
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
                                <div className="col">
                                    <div className="form-group">
                                        <label>Cargo</label>
                                        <select className="form-select"  name="idCargo"  value={idCargo} onChange={this.handleChange}>
                                            <option selected value="0">Seleciona uma opção ...</option>
                                            {cargos.map(cargo =>
                                                <option key={cargo.idCargo} value={cargo.idCargo}>{cargo.txCargoNivel}</option>) 
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Vale Alimentação?</label>
                                        <select className="form-select"  name="ckValeAlimentacao"  value={ckValeAlimentacao} onChange={this.handleChange}>
                                            <option selected value="false">Não</option>
                                            <option value="true">Sim</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>Vale Refeição?</label>
                                        <select className="form-select"  name="ckValeRefeicao"  value={ckValeRefeicao} onChange={this.handleChange}>
                                            <option selected value="false">Não</option>
                                            <option value="true">Sim</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>Convênio Médico?</label>
                                        <select className="form-select"  name="ckConvenio"  value={ckConvenio} onChange={this.handleChange}>
                                            <option selected value="false">Não</option>
                                            <option value="true">Sim</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Complemento Salario</label>
                                        <InputMask 
                                            thousandSeparator={true}  
                                            prefix={'R$'}
                                            className="form-control" 
                                            name="txComplementoSalario"
                                            value={txComplementoSalario}
                                            onChange={this.handleChange}
                                        />
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
                                        <label>Data Nascimento</label>
                                        <input 
                                            type="date" 
                                            className="form-control" 
                                            name="dtNascimento" 
                                            value={dtNascimento}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>CPF</label>
                                        <InputMask
                                            format="###.###.###-##" 
                                            className="form-control"    
                                            name="txCpf" 
                                            value={txCpf}
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