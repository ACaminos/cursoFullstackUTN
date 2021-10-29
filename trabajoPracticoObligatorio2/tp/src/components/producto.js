import React from "react";
import {Link} from "react-router-dom";
function Producto(props){
    const{data} = props
    return(
            <div className="card col-md-3 align-self-center text-center m-3 pt-3">
                <img src={data.image} className="card-img-top w-25" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <button className="btn btn-dark btn-sm mt-2"><Link to={"/producto/"+data.high_24h+data.id+data.symbol}>Mas detalles</Link></button>
                </div>
            </div>
    );
}
export default Producto;