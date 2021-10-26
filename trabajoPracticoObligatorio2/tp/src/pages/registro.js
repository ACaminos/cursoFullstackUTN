import React from "react";

function Registro(){
    return(
        <div className="container">
            <div className="card">
            <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-4 col-form-label text-center">Ingrese su mail</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" id="" value="su_email@gmail.com"/>
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-4 col-form-label text-center">Ingrese su contrasena</label>
                <div className="col-sm-8">
                    <input type="password" className="form-control" id=""/>
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-4 col-form-label text-center">Ingrese nuevamente su contrasena</label>
                <div className="col-sm-8">
                    <input type="password" className="form-control" id=""/>
                </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto mt-4">
                <button className="btn btn-primary btn-sm" type="button">Registrarme</button>
            </div>
            </div>
      </div>
    )
}
export default Registro;