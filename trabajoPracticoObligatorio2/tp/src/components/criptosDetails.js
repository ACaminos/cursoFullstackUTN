import React from "react";
import {Link} from "react-router-dom";


function MisCriptosDetail(props){
    const {datos} = props
    return(
        <div className="card col-md-3 text-center m-3 pt-3" style={{backgroundColor: 'black', borderColor: 'darkgoldenrod', borderRadius: '4%', border: '2px solid darkgoldenrod', Color: 'white'}}>
            <div className="card-body">
                <h5 className="card-title my-1" style={{color: 'white'}}>{datos.criptomoneda}</h5>
                <h5 className="card-title my-3" style={{color: 'white'}}>$ {datos.valor}</h5>
                <button className="btn btn-primary btn-sm m-3 px-4"><Link to={"#"} style={{textDecoration: 'none'}}><span className="text-white">Editar</span></Link></button>
                <button className="btn btn-danger btn-sm m-3 px-3"><Link to={"#"} style={{textDecoration: 'none'}}><span className="text-white">Eliminar</span></Link></button>
            </div>
        </div>
    )
}
export default MisCriptosDetail;