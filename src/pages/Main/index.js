import React from 'react';

import mainImg from '../../assets/main.png';
import { Header } from '../../components/Header';

export function Main(){
    return(
        <>
         <Header />
         <div class="container">
            <div class="container space-header">
                <div className="row">
                    <div className="col">
                        <p class="text-center main-name-title fs-1 text-wrap">Bem vindo ao <strong>R-Consultancy</strong></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={mainImg} alt="R-Consultancy" class="d-block w-100" srcset="" />
                    </div>
                </div>
            </div>
        </div> 
        </>
    );
}