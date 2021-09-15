import React, { Component }  from "react";
import { Header } from "../../../components/Header";

import { findByCep } from "../../../services/ViaCep";

export default class ListarDepartamentos extends Component{

    async componentDidMount(){
        const retorno = await findByCep('03262070');
        console.log(retorno.bairro);
    }

    render(){
        return(
            <>
            <Header />
                <div>
                    <h1>Listar Departamentos</h1>
                </div>
            </>
        );
    }
}