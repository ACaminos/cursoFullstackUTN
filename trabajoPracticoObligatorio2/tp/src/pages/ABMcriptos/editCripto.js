import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import firebase from "../../config/firebase";
import swal from "sweetalert";

function EditarCripto(){
    const {register, handleSubmit, formState:{errors}, setValue } = useForm();
    const history = useHistory()
    const onSubmit = async(data)=>{

    console.log("contenido data", data);
    try{
        const document = await firebase.db.doc("criptomonedas/"+id)
        .set(data)
        console.log("modificar", document)
        swal("","Su cripto ha sido modificada exitosamente","success")
        history.push("/misCriptos")
    }
    catch(e){
        console.log("errores",e)
    }
}

const [detalleCripto,setDetalleCripto] = useState({})
const [loading,setLoading] = useState(true)
const {id}=useParams()


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

    return(
        <div className="d-flex justify-content-center my-4">
             <Form style={{width: '32rem'}} onSubmit={handleSubmit(onSubmit)}>

                <Form.Group className="mb-3">
                    <Form.Label style={{color: 'white'}}>Nombre de su criptomoneda</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nuevo nombre de su criptomoneda" {...register("criptomoneda", {required:true})} />
                    {errors.criptomoneda && <span>El campo es obligatorio</span>}
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label style={{color: 'white'}}>Nuevo Valor</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese el nuevo valor de su criptomoneda" {...register("valor", {required:true})} />
                    {errors.valor && <span>El campo es obligatorio</span>}
                </Form.Group>

                <div className="d-grid col-6 mx-auto mt-4">
                    <Button variant="warning" type="submit">Modificar</Button>
                </div>

            </Form>

      </div>
    )
}

export default EditarCripto;