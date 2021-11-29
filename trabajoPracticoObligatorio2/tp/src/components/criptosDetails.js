import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import firebase from "../config/firebase"
import {useForm} from "react-hook-form"


function MisCriptosDetail(props){
    const {datos} = props
    const [detalleCripto,setDetalleCripto] = useState({})
    const [loading,setLoading] = useState(true)
    const {id}=useParams()
    console.log(id)

    const {setValue } = useForm();


    useEffect(
        ()=>{
            async function request(){
                try{
                    const response = await firebase.db.doc("criptomonedas/"+id)
                    .get()
                    if(response){
                        setDetalleCripto(response)
                        setLoading(false)

                        setValue("criptomoneda",response.data().criptomoneda)
                        setValue("valor",response.data().valor)
                    }
                }catch(e){
                    console.log("errores...",e)

                }
                
            }
            request()
            
        },[id]
    )

    const handleDelete = async (id) =>{
        try{
        const document = await firebase.db.doc("criptomonedas/"+id)
        .delete()
        console.log("Resultado:",id,document)
        }
        catch(e){
        console.log(e)
        }
        }

    return(
        <div className="card col-md-3 text-center m-3 pt-3" style={{backgroundColor: 'black', borderColor: 'darkgoldenrod', borderRadius: '4%', border: '2px solid darkgoldenrod', Color: 'white'}}>
            <div className="card-body">
                <h5 className="card-title my-1" style={{color: 'white'}}>{datos.criptomoneda}</h5>
                <h5 className="card-title my-3" style={{color: 'white'}}>$ {datos.valor}</h5>
                <button className="btn btn-primary btn-sm m-3 px-4"><Link to={"#"} style={{textDecoration: 'none'}}><span className="text-white">Editar</span></Link></button>
                <button className="btn btn-danger btn-sm m-3 px-3" onClick={()=>handleDelete(datos.id)} style={{textDecoration: 'none', color: 'white'}}>Eliminar</button>            </div>
        </div>
    )
}
export default MisCriptosDetail;