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
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Registrate</h1>
        <div className="nombre">
          <label htmlFor="">Nombre</label>
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

        <div className="apellido">
          <label htmlFor="">Apellido</label>
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

        <div className="email">
          <label htmlFor="">Email</label>
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

        <div className="password1">
          <label htmlFor="">Contraseña</label>
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

        <div className="password2">
          <label htmlFor="">Repetir Contraseña</label>
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

        <div className="comuna">
          <label htmlFor="">Comuna</label>
          <input
            type="text"
            value={datosCuidador.comuna}
            name="comuna"
            onChange={handleForm}
          ></input>
        </div>
        <div className="telefono">
          <label htmlFor="">Teléfono</label>
          <input
            type="tel"
            value={datosCuidador.telefono}
            name="telefono"
            onChange={handleForm}
          ></input>
        </div>

        <div className="rrss">
          <label htmlFor="">Red Social</label>
          <input
            type="text"
            value={datosCuidador.rrss}
            name="rrss"
            onChange={handleForm}
          ></input>
        </div>
        <div className="descripcion">
          <label htmlFor="">Algo sobre ti</label>
          <input
            type="text"
            value={datosCuidador.descripcion}
            name="descripcion"
            onChange={handleForm}
          ></input>
        </div>
        <button className="enviar">Enviar</button>
      </form>
    </div>
  );
};

export default RegistroCuidador;
