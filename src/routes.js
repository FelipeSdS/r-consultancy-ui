import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Cadastrar } from './pages/Departamentos/Cadastrar';
import { Listar } from './pages/Departamentos/Listar';
import { Main } from './pages/Main';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Main} />
                <Route exact={true} path="/departamentos" component={Listar} />
                <Route exact={true} path="/departamentos/cadastro" component={Cadastrar} />
            </Switch>
        </BrowserRouter>
    );
}