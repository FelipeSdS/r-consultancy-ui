import React,{ Component } from "react";

import { Header } from "../../../components/Header";

export default class CadastrarDepartamentos extends Component{

    render(){
        return(
            <>
                <Header />
                <div class="container">
                    <div className="generic-div-style shadow p-3 mb-5 bg-body rounded">
                        <div>
                            <h1>Cadastrar Departamentos</h1>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}