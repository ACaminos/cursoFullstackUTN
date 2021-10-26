import React from "react";

function Login(){
    return(
        <div className="container">
            <div className="card p-4">
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Ingrese su mail</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id=""/>
                        </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputPassword" className="col-sm-4 col-form-label">Ingrese su contrasena</label>
                    <div className="col-sm-8">
                        <input type="password" className="form-control" id=""/>
                    </div>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto mt-4">
                    <button className="btn btn-primary btn-sm" type="button">Iniciar sesion</button>
                </div>
            </div>
        </div>
    )
}
export default Login;