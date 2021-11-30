import React from "react";
import { useHistory } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import firebase from "../../config/firebase";
import swal from "sweetalert";

function CrearMisCriptos(){
    const {register, handleSubmit, formState:{errors} } = useForm();
    const history = useHistory();

    const onSubmit = async(data)=>{

    console.log("contenido data", data);
    try{
        const document = await firebase.db.collection("criptomonedas")
        .add(data)
        console.log(document)
        swal("","Su criptomoneda a sido creada","success")
        history.push("/")

    }
    catch(e){
        console.log("errores",e)
    }
}
    return(
        <div className="d-flex justify-content-center my-4">
             <Form style={{width: '32rem'}} onSubmit={handleSubmit(onSubmit)}>

                <Form.Group className="mb-3">
                    <Form.Label style={{color: 'white'}}>Nombre de su criptomoneda</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre de su criptomoneda" {...register("criptomoneda", {required:true})} />
                    {errors.criptomoneda && <span>El campo es obligatorio</span>}
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label style={{color: 'white'}}>Valor inicial</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese el valor inicial de su criptomoneda" {...register("valor", {required:true})} />
                    {errors.valor && <span>El campo es obligatorio</span>}
                </Form.Group>

                <div className="d-grid col-6 mx-auto mt-4">
                    <Button variant="success" type="submit">Crear</Button>
                </div>

            </Form>

      </div>
    )
}
export default CrearMisCriptos;