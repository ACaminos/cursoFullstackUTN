import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import firebase from "../config/firebase";
import {useHistory} from "react-router-dom";


function Registro(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()
    const onSubmit = async (data) =>{
        console.log(data);
        try{
            const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email, data.password)
            console.log("user", responseUser.user.uid)
            if(responseUser.user.uid){
                const document = await firebase.db.collection("usuarios")
                .add({
                    nombre: data.nombre,
                    apellido: data.apellido,
                    userId: responseUser.user.uid
                })
                console.log("documento", document)
                swal("¡Bienvenido!","Registro exitoso","success")
                history.push("/")
            }
        }
        catch(e){
            console.log("error",e)
            if (e.code === "auth/email-already-in-use"){
                alert("El email ya se encuentra registrado");
            }

        }
    }
    return(
        <div className="container d-flex justify-content-center">
             <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card mt-4 p-4" style={{ width: '35rem', backgroundColor: 'blacK', borderColor: 'darkgoldenrod', border: '1px solid darkgoldenrod'}}>
                    <div className="mb-3 row">
                        <label for="staticEmail" className="col-sm-4 col-form-label" style={{color: 'white'}}>Ingrese su nombre</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control form-control-sm" {...register("nombre",{required: true})}/>
                        </div>
                    </div>
                    {errors.nombre && <span className="text-end pb-3" style={{color: 'white'}}>El campo es obligatorio</span>}

                    <div className="mb-3 row">
                        <label for="staticEmail" className="col-sm-4 col-form-label" style={{color: 'white'}}>Ingrese su apellido</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control form-control-sm" {...register("apellido",{required: true})}/>
                        </div>
                    </div>
                    {errors.apellido && <span className="text-end pb-3" style={{color: 'white'}}>El campo es obligatorio</span>}

                    <div className="mb-3 row">
                        <label for="staticEmail" className="col-sm-4 col-form-label" style={{color: 'white'}}>Ingrese su mail</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control form-control-sm" {...register("email",{required: true})}/>
                        </div>
                    </div>
                    {errors.email && <span className="text-end pb-3" style={{color: 'white'}}>El campo es obligatorio</span>}

                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-4 col-form-label" style={{color: 'white'}}>Ingrese su contraseña</label>
                        <div className="col-sm-8">
                            <input type="password" className="form-control form-control-sm" {...register("password",{required: true, minLength:6})}/>
                        </div>
                    </div>
                        {errors.password?.type==='required' && <span className="text-end pb-3" style={{color: 'white'}}>El campo es obligatorio</span>}
                        {errors.password?.type==='minLength' && <span className="text-end pb-3" style={{color: 'white'}}>El minimo de caracteres es de 6</span>}

                    <div className="d-grid gap-2 col-6 mx-auto mt-2">
                        <button className="btn btn-primary btn-sm" type="submit">Registrarme</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Registro;