import React from 'react';

import mainImg from '../../assets/main.png';
import { Header } from '../../components/Header';

export function Main(){
    return(
        <>
         <Header />
         <div className="container">
            <div className="container space-header">
                <div className="row">
                    <div className="col">
                        <p className="text-center main-name-title fs-1 text-wrap">Bem vindo</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="text-center">
                            <img src={mainImg} alt="R-Consultancy" className="rounded img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </>
    );
}