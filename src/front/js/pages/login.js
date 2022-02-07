import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, Navigate } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/login.css";

export const Login = () => {
  const formInicial = { email: "", password: "" };

  const { store, actions } = useContext(Context);
  const [datoslogin, setDatosLogin] = useState({ email: "", password: "" });
  const [validacion, setValidacion] = useState(false);
  const [error, setError] = useState("");
  const [errorValidacion, setErrorValidacion] = useState(false);



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

    actions.setLoginCliente(datoslogin)

    if (!store.datosTokenCliente?.status) {
      setErrorValidacion(true);
      return
    }
    setErrorValidacion(false);

    handleReset();
  };

  return (
    <>
      <div className="container bg-light my-4 bg-opacity-50 p-5 rounded-3 boxed">
        <div className="col-12 col-md-8 col-lg-6 mx-auto my-auto bg-opacity-75 bg-light rounded-3 shadow-lg">
          <h2 className="text-center p-4">Inicio de Sesión Cliente</h2>
          {errorValidacion ? (
            <div className="text-center">
              <p className="text-center text-danger mt-1">
            Email o Contraseñas Ingresados son Incorrectos
          </p></div>
          ) : null}
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-10 col-md-8 mx-auto">
                  <label className="form-label">Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-sm"
                    onChange={handleChange}
                    value={datoslogin.email}
                  />
                  {validacion ? (
                    <p className="text-center text-danger mt-1">{error}</p>
                  ) : null}
                </div>
              </div>
              <div className="row my-3">
                <div className="col-10 col-md-8 mx-auto">
                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-sm"
                    onChange={handleChange}
                    value={datoslogin.password}
                  />
                  {validacion ? (
                    <p className="text-center text-danger mt-1">{error}</p>
                  ) : null}
                </div>
              </div>
              <div className="d-grid gap-2 col-10 col-md-8 mx-auto my-5">
                <button className="btn btn-outline-dark btn-sm">Enviar</button>
              </div>
              {store.datosTokenCliente ? <Navigate to={`/perfilCliente/${store.datosTokenCliente.info_user.id}`} /> : null}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
