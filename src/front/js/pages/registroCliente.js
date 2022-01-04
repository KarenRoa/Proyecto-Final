import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/registroCliente.css";
import { useHistory } from 'react-router-dom'


const RegistroCliente = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory()


  const formInicial = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    password2: "",
    telefono: "",
    comuna: "",
  };
  //VARIABLES DE ESTADOS
  const [datosCliente, setDatosCliente] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    password2: "",
    telefono: "",
    comuna: "",
  });

  //Variables de estados
  const [validacion, setValidacion] = useState(false);
  const [error, setError] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  //MANEJADORES
  //Funcion que limpia el formulario
  const handleReset = () => {
    setDatosCliente(formInicial);
  };

  const handleForm = (event) => {
    const { name, value } = event.target;
    
    setDatosCliente({
      ...datosCliente,
      [name]: value,
    });
    console.log(datosCliente);
  };
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (
      !datosCliente.nombre ||
      !datosCliente.apellido ||
      !datosCliente.email ||
      !datosCliente.password ||
      !datosCliente.password2
      ) {
        setValidacion(true);
        setError("Campo obligatorio");
        return;
      } else setError("");
      
      setValidacion(false);
      
      if (datosCliente.password !== datosCliente.password2) {
        setErrorPassword(true);
        alert("Las Contraseñas tienen que ser identicas");
        return;
    }
    setErrorPassword(false);
    //setError("Usuario registrado exitosamente");
    
    actions.setDatosFormularioCliente(datosCliente);

    handleReset();
    
    alert("Te has registrado exitosamente");
    history.push('/')

  };

  //FORMULARIO DE CLIENTE

  return (
    <div className="container">
      <div className="col-12 col-md-8 col-lg-6 bg-dark text-white mt-5 mx-auto p-4 rounded-2">
        <h2 className="text-white text-center p-3">Registro de Cliente</h2>
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="nombre"
                    placeholder="Nombre"
                    name="nombre"
                    onChange={handleForm}
                    value={datosCliente.nombre}
                  />
                  {!datosCliente.nombre ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null}
                </div>
                <div className="col-12 col-sm-6 col-md-6 mt-3 mt-md-0">
                  <label htmlFor="apellido" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="apellido"
                    placeholder="Apellido"
                    name="apellido"
                    onChange={handleForm}
                    value={datosCliente.apellido}
                  />
                  {!datosCliente.apellido ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <label
                    htmlFor="email"
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    id="email"
                    placeholder="correo@example.com"
                    name="email"
                    onChange={handleForm}
                    value={datosCliente.email}
                  />
                  {!datosCliente.email ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-sm-6 col-md-6">
                  <label
                    htmlFor="password"
                    className="form-label"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="password"
                    placeholder="Contraseña"
                    name="password"
                    onChange={handleForm}
                    value={datosCliente.password}
                  />
                  {!datosCliente.password ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null}
                </div>
                <div className="col-12 col-sm-6 col-md-6 mt-3 mt-md-0">
                  <label
                    htmlFor="password2"
                    className="form-label"
                  >
                    Repita Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="password2"
                    placeholder="Repita Contraseña"
                    name="password2"
                    onChange={handleForm}
                    value={datosCliente.password2}
                  />
                  {!datosCliente.password2 ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-sm-6 col-md-6">
                  <label
                    htmlFor="comuna"
                    className="form-label"
                  >
                    Comuna
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="comuna"
                    placeholder="Comuna"
                    name="comuna"
                    onChange={handleForm}
                    value={datosCliente.comuna}
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-6 mt-3 mt-md-0">
                  <label
                    htmlFor="telefono"
                    className="form-label"
                  >
                    Telefono
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="telefono"
                    placeholder="+56912345678"
                    name="telefono"
                    onChange={handleForm}
                    value={datosCliente.telefono}
                  />
                </div>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto mt-4">
                <button className="btn btn-outline-light btn-sm">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    // <div className="container d-flex w-50 bg-dark text-light p-4 mt-5">
    //   <form className="form" onSubmit={handleSubmit}>
    //     <h1 className="text-center my-4">Registro Cliente</h1>
    //     <div className="campos d-flex flex-wrap">
    //       <div className="nombre d-flex flex-column w-50 p-4">
    //         <label htmlFor="">Nombre *</label>
    //         <input
    //           type="text"
    //           value={datosCliente.nombre}
    //           name="nombre"
    //           onChange={handleForm}
    //         ></input>
    //          {!datosCliente.nombre ? (
    //         <p style={{ color: "red", textAlign: "center" }}>{error}</p>
    //       ) : null}
    //       </div>

    //       <div className="apellido d-flex flex-column w-50 p-4">
    //         <label htmlFor="">Apellido *</label>
    //         <input
    //           type="text"
    //           value={datosCliente.apellido}
    //           name="apellido"
    //           onChange={handleForm}
    //         ></input>
    //         {!datosCliente.apellido ? (
    //         <p style={{ color: "red", textAlign: "center" }}>{error}</p>
    //       ) : null}
    //       </div>

    //       <div className="email d-flex flex-column w-100 p-4">
    //         <label htmlFor="">Email *</label>
    //         <input
    //           type="email"
    //           value={datosCliente.email}
    //           name="email"
    //           onChange={handleForm}
    //         ></input>
    //          {!datosCliente.email ? (
    //         <p style={{ color: "red", textAlign: "center" }}>{error}</p>
    //       ) : null}
    //       </div>

    //       <div className="password1 d-flex flex-column w-50 p-4">
    //         <label htmlFor="">Contraseña *</label>
    //         <input
    //           type="password"
    //           value={datosCliente.password}
    //           name="password"
    //           onChange={handleForm}
    //         ></input>
    //          {!datosCliente.password ? (
    //         <p style={{ color: "red", textAlign: "center" }}>{error}</p>
    //       ) : null}
    //       </div>

    //       <div className="password2 d-flex flex-column w-50 p-4">
    //         <label htmlFor="">Repetir Contraseña *</label>
    //         <input
    //           type="password"
    //           value={datosCliente.password2}
    //           name="password2"
    //           onChange={handleForm}
    //         ></input>
    //            {!datosCliente.password2 ? (
    //         <p style={{ color: "red", textAlign: "center" }}>{error}</p>
    //       ) : null}
    //       </div>

    //       <div className="comuna d-flex flex-column w-50 p-4">
    //         <label htmlFor="">Comuna</label>
    //         <input
    //           type="text"
    //           value={datosCliente.comuna}
    //           name="comuna"
    //           onChange={handleForm}
    //         ></input>
    //       </div>
    //       <div className="telefono d-flex flex-column w-50 p-4">
    //         <label htmlFor="">Teléfono</label>
    //         <input
    //           type="tel"
    //           value={datosCliente.telefono}
    //           name="telefono"
    //           onChange={handleForm}
    //         ></input>
    //       </div>
    //     </div>

    //     <button className="enviar d-block m-auto p-2">Enviar</button>
    //   </form>
    // </div>
  );
};

export default RegistroCliente;
