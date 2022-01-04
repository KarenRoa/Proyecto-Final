import React, { useState } from "react";

const RegistroCuidador = () => {
  //VARIABLES DE ESTADOS
  const [datosCuidador, setDatosCuidador] = useState({
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
    
    setDatosCuidador((prevDatosCuidador) => ({
      ...prevDatosCuidador,
      [name]: value,
    }));
    //console.log(datosCuidador);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !datosCuidador.nombre ||
      !datosCuidador.apellido ||
      !datosCuidador.email ||
      !datosCuidador.password1 ||
      !datosCuidador.password2
    ) {
      setValidacion(true);
      setError("campo obligatorio");
      return;
    } else setError("");

    setValidacion(false);

    if (datosCuidador.password1 !== datosCuidador.password2) {
      setErrorPassword(true);
      alert("Las Contraseñas tienen que ser identicas");
      return;
    }
    setErrorPassword(false);
    setError("Usuario registrado exitosamente");
    alert("Te has registrado exitosamente");
  };

  //FORMULARIO DE CUIDADOR

  return (
    <div className="container d-flex justify-content-center bg-dark w-50 text-light mt-5 ">
      
      <form className="form d-flex justify-content-center flex-column" onSubmit={handleSubmit}>
      <h1 className="text-center my-2">Registro Cuidador</h1>
        <div className="nombre d-flex flex-column m-auto">
          <label htmlFor="">Nombre *</label>
          <input
            type="text"
            value={datosCuidador.nombre}
            name="nombre"
            onChange={handleForm}
          ></input>
        </div>

        {!datosCuidador.nombre ? (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        ) : null}

        <div className="apellido d-flex flex-column m-auto">
          <label htmlFor="">Apellido *</label>
          <input
            type="text"
            value={datosCuidador.apellido}
            name="apellido"
            onChange={handleForm}
          ></input>
        </div>

        {!datosCuidador.apellido ? (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        ) : null}

        <div className="email d-flex flex-column">
          <label htmlFor="">Email *</label>
          <input
            type="email"
            value={datosCuidador.email}
            name="email"
            onChange={handleForm}
          ></input>
        </div>

        {!datosCuidador.email ? (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        ) : null}

        <div className="password1 d-flex flex-column">
          <label htmlFor="">Contraseña *</label>
          <input
            type="password"
            value={datosCuidador.password1}
            name="password1"
            onChange={handleForm}
          ></input>
        </div>

        {!datosCuidador.password1 ? (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        ) : null}

        <div className="password2 d-flex flex-column">
          <label htmlFor="">Repetir Contraseña *</label>
          <input
            type="password"
            value={datosCuidador.password2}
            name="password2"
            onChange={handleForm}
          ></input>
        </div>

        {!datosCuidador.password2 ? (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        ) : null}

        <div className="comuna d-flex flex-column">
          <label htmlFor="">Comuna</label>
          <input
            type="text"
            value={datosCuidador.comuna}
            name="comuna"
            onChange={handleForm}
          ></input>
        </div>
        <div className="telefono d-flex flex-column">
          <label htmlFor="">Teléfono</label>
          <input
            type="tel"
            value={datosCuidador.telefono}
            name="telefono"
            onChange={handleForm}
          ></input>
        </div>

        <div className="rrss d-flex flex-column">
          <label htmlFor="">Red Social</label>
          <input
            type="text"
            value={datosCuidador.rrss}
            name="rrss"
            onChange={handleForm}
          ></input>
        </div>
        <div className="descripcion d-flex flex-column">
          <label htmlFor="">Algo sobre ti</label>
          <input
            type="text"
            value={datosCuidador.descripcion}
            name="descripcion"
            onChange={handleForm}
          ></input>
        </div>
        <button className="enviar my-2">Enviar</button>
      </form>
    </div>
  );
};

export default RegistroCuidador;
