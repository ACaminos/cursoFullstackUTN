import React from "react";
import { useState, useEffect } from "react";
import firebase from "../config/firebase";
import MisCriptosDetail from "../components/criptosDetails";

function MisCriptos(){
    const [loading, SetLoading] = useState(true);
    const [misCriptomonedas, SetMisCriptomonedas] = useState([]);

    useEffect(
        ()=>{
            async function request(){
                try{
                    const querySnapshot = await firebase.db.collection("criptomonedas")
                    .get()
                    if(querySnapshot.docs){
                        SetMisCriptomonedas(querySnapshot.docs)
                        SetLoading(false)
                    }
                }
                catch(e){

                }

            }
            request()
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
            <div>
                <span style={{color: 'darkgoldenrod', fontWeight: '500', fontSize: '16pt'}}>Mis Criptos</span>
                <div className="row d-flex justify-content-center">
                    {misCriptomonedas.map(crypto=><MisCriptosDetail datos={{...crypto.data(), id:crypto.id}}/>)}
                </div>
            </div>
        )
    }
}

export default MisCriptos;