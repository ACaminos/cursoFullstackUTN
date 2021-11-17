import React from "react";
import {useEffect, useState} from "react";
import '../assets/styles.css';
import ProductoSlider from "./productoSlider";
import { getAll } from "../service/productoservice";

function Slider(props){
 
    const [loading, SetLoading] = useState(true);
    const [cryptosSlider, SetCryptosSlider] = useState([]);

    useEffect(
        ()=>{
             getAll()
            .then(data=>{
                console.log(data.data)
                if(data){
                    SetLoading(false)
                    SetCryptosSlider(data.data)
                }
            })
        },[]
    )
    if (loading){
    return(
        <div>
            <div className="">Loading...</div>
        </div>
    )
    }
    else{
        return(
            <div className="slider">
                <div className="slide-track">
                    {cryptosSlider.map(cryptoSlider=><ProductoSlider data={cryptoSlider}/>)}
                </div>
            </div>
        )
    }
}
export default Slider;