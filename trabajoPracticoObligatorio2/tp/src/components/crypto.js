import React from "react";
/* import instance from "../config/axios" */
import {useEffect, useState} from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataCryptos from "./dataCryptos";

function Card(){
    const [loading, SetLoading] = useState(true);
    const [cryptos, SetCryptos] = useState([]);

    useEffect(
        ()=>{
             fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&price_change_percentage=1h")
            .then(res=>res.json())
            .then(data=>{
                console.log("data",data)
                if(data){
                    SetLoading(false)
                    SetCryptos(data)
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
                <div className="row">
                    {cryptos.map(crypto=><DataCryptos data={crypto}/>)}
                </div>
        )
    }
}

export default Card;