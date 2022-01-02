import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
	return (
        <div id="main-box" className="shadow-6">
            <div id="mb-c">
                <h1 className="log-title">INICIO DE SESIÓN</h1>
            </div>

            <div className="form-body">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Correo Electrónico / E-mail</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu E-mail" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1" id="password-text">CONTRASEÑA</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                        <small id="emailHelp" className="form-text text-muted">*NUNCA COMPARTIREMOS TUS DATOS CON NADIE*</small>
                    </div>

                    <div className="form-footer">
                        <br />
                        <a href="#" className="pass-recovery">Olvidé mi contraseña</a>
                        <br />
                        <br />
                        <Link to="/">
                            <button type="button" className="btn btn-outline-dark" id="btn-login">ENTRAR</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
	);
};