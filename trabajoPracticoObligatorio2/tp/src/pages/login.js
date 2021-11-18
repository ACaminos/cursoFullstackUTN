import React from "react";
import { useForm } from "react-hook-form";
import firebase from "../config/firebase";
import swal from 'sweetalert';


function Login(){
    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = async (data) => {
        console.log("data", data);
        try{
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email, data.password)
            if(responseUser.user.uid){
                const userInfo = await firebase.db.collection("usuarios")
                .where("userId", "==", responseUser.user.uid)
                .get()
                console.log("userInfo", userInfo.docs[0]?.data())
                swal("","Login exitoso","success")
            }
        }
        catch(e){
            console.log("error",e)
            if(e.code === 'auth/wrong-password'){
                return(
                    swal("Error", "Contrasena/usuario invalido", "error")
                    );
            }
            else if(e.code === 'auth/too-many-requests'){
                return(
                   swal("","Su cuenta fue suspendida temporalmente","warning")
                )
            }
        }
    }

    return(
        <div className="container p-4 mt-4 d-flex justify-content-center">
             <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card mt-4 p-4" style={{ width: '35rem'}}>
                    <div className="my-3 row">
                        <label for="staticEmail" className="col-sm-4 col-form-label">Ingrese su mail</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" {...register("email",{required: true})}/>
                        </div>
                    </div>
                    {errors.email && <span className="text-end pb-3">El campo es obligatorio</span>}

                    <div className="row">
                        <label for="inputPassword" className="col-sm-4 col-form-label">Ingrese su contrasena</label>
                        <div className="col-sm-8">
                            <input type="password" className="form-control" {...register("password",{required: true, minLength:6})}/>
                        </div>
                    </div>
                        {errors.password?.type==='required' && <span className="text-end pb-3">El campo es obligatorio</span>}
                        <div className="d-grid gap-2 col-6 mx-auto mt-4 mb-2">
                        <button className="btn btn-primary btn-sm mt-4" type="submit">Iniciar sesion</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Login;