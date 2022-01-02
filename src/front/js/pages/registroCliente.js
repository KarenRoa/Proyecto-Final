import React, { useState } from "react";
import "../../styles/registroCliente.css";

const RegistroCliente = () => {
  //VARIABLES DE ESTADOS
  const [datosCliente, setDatosCliente] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password1: "",
    password2: "",
    telefono: "",
    comuna: "",
    rrss: "",
    descripcion: "",
  });

  //Variables de estados
  const [validacion, setValidacion] = useState(false);
  const [error, setError] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  //MANEJADORES
  const handleForm = (event) => {
    const { name, value } = event.target;
    setDatosCliente((prevDatosCliente) => ({
      ...prevDatosCliente,
      [name]: value,
    }));
    //console.log(datosCliente);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !datosCliente.nombre ||
      !datosCliente.apellido ||
      !datosCliente.email ||
      !datosCliente.password1 ||
      !datosCliente.password2
    ) {
      setValidacion(true);
      setError("campo obligatorio");
      return;
    } else setError("");

    setValidacion(false);

    if (datosCliente.password1 !== datosCliente.password2) {
      setErrorPassword(true);
      alert("Las Contraseñas tienen que ser identicas");
      return;
    }
    setErrorPassword(false);
    setError("Usuario registrado exitosamente");
    alert("Te has registrado exitosamente");
  };
  

  //FORMULARIO DE CLIENTE

  return (
    <div className="container d-flex w-50 bg-dark text-light p-4 mt-5">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="text-center my-4">Registro Cliente</h1>
        <div className="campos d-flex flex-wrap">

          <div className="nombre d-flex flex-column w-50 p-4">
            <label htmlFor="">Nombre *</label>
            <input
              type="text"
              value={datosCliente.nombre}
              name="nombre"
              onChange={handleForm}
            ></input>
             {!datosCliente.nombre ? (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          ) : null}
          </div>

         

          <div className="apellido d-flex flex-column w-50 p-4">
            <label htmlFor="">Apellido *</label>
            <input
              type="text"
              value={datosCliente.apellido}
              name="apellido"
              onChange={handleForm}
            ></input>
            {!datosCliente.apellido ? (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          ) : null}
          </div>

          

          <div className="email d-flex flex-column w-100 p-4">
            <label htmlFor="">Email *</label>
            <input
              type="email"
              value={datosCliente.email}
              name="email"
              onChange={handleForm}
            ></input>
             {!datosCliente.email ? (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          ) : null}
          </div>

         

          <div className="password1 d-flex flex-column w-50 p-4">
            <label htmlFor="">Contraseña *</label>
            <input
              type="password"
              value={datosCliente.password1}
              name="password1"
              onChange={handleForm}
            ></input>
             {!datosCliente.password1 ? (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          ) : null}
          </div>

         

          <div className="password2 d-flex flex-column w-50 p-4">
            <label htmlFor="">Repetir Contraseña *</label>
            <input
              type="password"
              value={datosCliente.password2}
              name="password2"
              onChange={handleForm}
            ></input>
               {!datosCliente.password2 ? (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          ) : null}
          </div>

       

          <div className="comuna d-flex flex-column w-50 p-4">
            <label htmlFor="">Comuna</label>
            <input
              type="text"
              value={datosCliente.comuna}
              name="comuna"
              onChange={handleForm}
            ></input>
          </div>
          <div className="telefono d-flex flex-column w-50 p-4">
            <label htmlFor="">Teléfono</label>
            <input
              type="tel"
              value={datosCliente.telefono}
              name="telefono"
              onChange={handleForm}
            ></input>
          </div>
        </div>

        <button className="enviar d-block m-auto p-2">Enviar</button>
      </form>
    </div>
  );
};

export default RegistroCliente;
