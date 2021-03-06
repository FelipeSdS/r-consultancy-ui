import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastrarCliente from './pages/Clientes/Cadastrar';
import CadastrarAreas from './pages/Areas/Cadastrar';
import CadastrarDepartamentos from './pages/Departamentos/Cadastrar';
import CadastrarFuncionario from './pages/Funcionarios/Cadastrar'
import CadastrarCargo from './pages/Cargos/Cadastrar';

import ListarCargos from './pages/Cargos/Listar';
import ListarAreas from './pages/Areas/Listar';
import ListarDepartamentos from './pages/Departamentos/Listar';
import ListarClientes from './pages/Clientes/Listar';

import { Main } from './pages/Main';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Main} />

                <Route exact={true} path="/clientes" component={ListarClientes} />
                <Route exact={true} path="/areas" component={ListarAreas} />
                <Route exact={true} path="/departamentos" component={ListarDepartamentos} />
                <Route exact={true} path="/cargos" component={ListarCargos} />
                
                <Route exact={true} path="/clientes/cadastro" component={CadastrarCliente} />
                <Route exact={true} path="/areas/cadastro" component={CadastrarAreas} />
                <Route exact={true} path="/departamentos/cadastro" component={CadastrarDepartamentos} />
                <Route exact={true} path="/cargos/cadastro" component={CadastrarCargo} />
                <Route exact={true} path="/funcionarios/cadastro" component={CadastrarFuncionario} />
            </Switch>
        </BrowserRouter>
    );
}