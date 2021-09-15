import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastrarDepartamentos from './pages/Departamentos/Cadastrar';
import ListarDepartamentos from './pages/Departamentos/Listar';
import { Main } from './pages/Main';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Main} />
                <Route exact={true} path="/departamentos" component={ListarDepartamentos} />
                <Route exact={true} path="/departamentos/cadastro" component={CadastrarDepartamentos} />
            </Switch>
        </BrowserRouter>
    );
}