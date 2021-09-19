import React from "react";

export function SelectCliente({ clientes }){
    
    return(
        <>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label>Empresa Cliente</label>
                             <select className="form-select" aria-label="Default select example">
                                <option selected></option>
                                {clientes.map(cliente =>
                                    <option key={cliente.id} value={cliente.id}>{cliente.name}</option>) }
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}