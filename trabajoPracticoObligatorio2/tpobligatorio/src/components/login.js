import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardLogin(){
    return(
        <div className="container d-flex justify-content-center">
            <div className="card bg-black">
                <div className="card-body">
                    <div className="mb-3 row">
                        <label for="staticEmail" className="form-label text-white">Email</label>
                        <input type="mail" className=""></input>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputPassword" className="form-label text-white">Contraseña</label>
                        <input type="password" className="form-control form-control-sm" id="inputPassword"/>
                    </div><br/>
                    <a href="#" className="btn btn-primary btn-sm d-flex justify-content-center">Iniciar sesion</a>
                </div>
            </div>
        </div>
    )
}
export default CardLogin;