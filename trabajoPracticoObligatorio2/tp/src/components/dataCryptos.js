import React from "react";
/* import {link} from "react-router-dom";
 */
function DataCryptos(props){
    const{data} = props
    return(
            <div className="card col-3 align-self-center text-center m-3 pt-3">
                <img src={data.image} className="card-img-top w-25" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">U$S {data.ath}</p>
                    <button className="btn btn-success btn-sm">Mas detalles</button>
                </div>
            </div>
    );
}

export default DataCryptos;