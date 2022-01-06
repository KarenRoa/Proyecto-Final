import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/login.css"

export const Login = () => {
  const formInicial = { email: "", password: "" };

  const { store, actions } = useContext(Context);
  const [datoslogin, setDatosLogin] = useState({ email: "", password: "" });
  const [validacion, setValidacion] = useState(false);
  const [error, setError] = useState("");

  const handleReset = () => {
    setDatosLogin(formInicial);
  };

  const handleChange = (e) => {
    setDatosLogin({ ...datoslogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (datoslogin.email == "" || datoslogin.password == "") {
      console.log("error");
      setError("Todos los campos son obligatorios");
      setValidacion(true);

      return;
    }
    setValidacion(false);

    handleReset();
  };

  return (
    <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div id="main-box" className="col-8 shadow-6 mt-5 mt-5">
            <div className="row">
            
              <div className="col-10">
                <h1 className="log-title">INICIO DE SESIÓN</h1>
              </div>
            </div>

              <div className="form-body">
                <form onSubmit={handleSubmit}>

                  <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Correo Electrónico / E-mail
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Ingresa tu E-mail"
                          onChange={handleChange}
                          value={datoslogin.email}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    
                    <div className="col-10">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1" id="password-text">
                            Contraseña
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Contraseña"
                            onChange={handleChange}
                            value={datoslogin.password}
                          />

                          {validacion ? (
                            <p className="text-center text-danger mt-2">{error}</p>
                          ) : null}
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark" id="btn-login">
                      ENTRAR
                    </button>
                  </div>
                </form>
              </div>
          </div>
          <div className="col-2"></div>
        </div>
    </div>
  );
};
