import React from "react";

import InputMask from "react-number-format";

export function InputMaskCPF(){
    return(
        <InputMask  
            format="###.###.###-##" 
            type="text" 
            className="form-control" 
        />
    );
}

export function InputMaskCNPJ({txName, txValue}){
    return(
        <InputMask  
            format="##.###.###/####-##" 
            type="text" 
            className="form-control" 
        />
    );
}

export function InputMaskTelefone(){
    return(
        <InputMask  
            format="(##)####-####" 
            type="text" 
            className="form-control" 
        />
    );
}

export function InputMaskCelular(){
    return(
        <InputMask  
            format="(##)#####-####" 
            type="text" 
            className="form-control" 
        />
    );
}

export function InputMaskDinheiro(){
    return(
        <InputMask 
            thousandSeparator={true}  
            prefix={'R$'}
            className="form-control" 
        />
    );
}