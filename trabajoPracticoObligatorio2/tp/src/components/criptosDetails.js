import React from "react";
import {Link} from "react-router-dom";


function MisCriptosDetail(props){
    const {datos} = props
    return(
        <div className="card col-md-3 text-center m-3 pt-3" style={{backgroundColor: 'black', borderColor: 'darkgoldenrod', borderRadius: '4%', border: '2px solid darkgoldenrod', Color: 'white'}}>
            <div className="card-body">
                <h5 className="card-title" style={{color: 'white'}}>{datos.criptomoneda}</h5>
                <h5 className="card-title" style={{color: 'white'}}>{datos.valor}</h5>
                <button className="btn btn-primary btn-sm mt-2 mx-2"><Link to={"#"} style={{textDecoration: 'none'}}><span className="text-white">Editar</span></Link></button>
                <button className="btn btn-danger btn-sm mt-2 mx-2"><Link to={"#"} style={{textDecoration: 'none'}}><span className="text-white">Eliminar</span></Link></button>
            </div>
        </div>
    )
}
export default MisCriptosDetail;