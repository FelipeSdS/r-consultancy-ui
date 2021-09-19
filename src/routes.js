import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastrarCliente from './pages/Clientes/Cadastrar';
import CadastrarDepartamentos from './pages/Departamentos/Cadastrar';
import CadastrarFuncionario from './pages/Funcionarios/Cadastrar'
import CadastrarCargo from './pages/Cargos/Cadastrar';

import ListarDepartamentos from './pages/Departamentos/Listar';

import { Main } from './pages/Main';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Main} />
                <Route exact={true} path="/departamentos" component={ListarDepartamentos} />
                <Route exact={true} path="/departamentos/cadastro" component={CadastrarDepartamentos} />
                <Route exact={true} path="/funcionarios/cadastro" component={CadastrarFuncionario} />
                <Route exact={true} path="/clientes/cadastro" component={CadastrarCliente} />
                <Route exact={true} path="/cargos/cadastro" component={CadastrarCargo} />
            </Switch>
        </BrowserRouter>
    );
}