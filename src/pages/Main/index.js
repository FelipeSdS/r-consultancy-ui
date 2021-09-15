import React from 'react';

import mainImg from '../../assets/main.png';
import { Header } from '../../components/Header';

export function Main(){
    return(
        <>
         <Header />
         <div class="container">
            <div className="main-content-column">
                <h1>Bem vindo ao <strong className="main-name-title">R-Consultancy</strong></h1>
                <img src={mainImg} alt="R-Consultancy" srcset="" />
            </div>
        </div> 
        </>
    );
}