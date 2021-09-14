import React from 'react';

import mainImg from '../../assets/main.png';
import { Header } from '../../components/Header';

import './styles.css'

export function Main(){
    return(
        <>
         <Header />
         <div className="main-content-column">
            <h1>Bem vindo ao <strong>R-Consultancy</strong></h1>
            <img src={mainImg} alt="R-Consultancy" srcset="" />
         </div>   
        </>
    );
}