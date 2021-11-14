import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
/* import instance from "../config/axios" */
import {useEffect, useState} from "react";
import "../App.css";
import Producto from "./producto";
import { getAll } from "../service/productoservice";

function Card(){
    const [loading, SetLoading] = useState(true);
    const [cryptos, SetCryptos] = useState([]);

    useEffect(
        ()=>{
             getAll()
            .then(data=>{
                console.log(data.data)
                if(data){
                    SetLoading(false)
                    SetCryptos(data.data)
                }
            })
        },[]
    )
    if (loading){
    return(
        <div>
            <div className="LoadingSpiner spinner-border text-success" role="status"/>
        </div>
    )
    }
    else{
        return(
                <div className="row d-flex justify-content-center">
                    {cryptos.map(crypto=><Producto data={crypto}/>)}
                </div>
        )
    }
}

export default Card;