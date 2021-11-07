import React from "react";
import { useForm } from "react-hook-form";


function Registro(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return(
        <div className="container">
             <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card mt-4 p-4">
                    <div className="mb-3 row">
                        <label for="staticEmail" className="col-sm-4 col-form-label text-center">Ingrese su mail</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" {...register("email")}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-4 col-form-label text-center">Ingrese su contrasena</label>
                        <div className="col-sm-8">
                            <input type="password" className="form-control" {...register("password")}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-4 col-form-label text-center">Ingrese nuevamente su contrasena</label>
                        <div className="col-sm-8">
                            <input type="password" className="form-control" {...register("confirmPassword")}/>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto mt-4">
                        <button className="btn btn-primary btn-sm" type="submit">Registrarme</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Registro;