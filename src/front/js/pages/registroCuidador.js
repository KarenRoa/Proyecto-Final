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
    <div className="container">
      <div className="col-12 col-md-8 col-lg-6 bg-dark text-light mt-5 mx-auto">
        <div className="row">
          <h1 className="col-12 text-center my-4">Registro Cuidador</h1>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <form className="form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 d-flex flex-column">
                  <label htmlFor="nombre" className="form-label">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="nombre"
                    placeholder="Nombre"
                    value={datosCuidador.nombre}
                    name="nombre"
                    onChange={handleForm}
                  ></input>
                  {!datosCuidador.nombre ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null}
                </div>

                <div className="col-12 col-sm-6 col-md-6 d-flex flex-column">
                  <label htmlFor="apellido" className="form-label">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="apellido"
                    placeholder="Apellido"
                    value={datosCuidador.apellido}
                    name="apellido"
                    onChange={handleForm}
                  ></input>
                  {!datosCuidador.apellido ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null}
                </div>
              </div>
              <p></p>

              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 d-flex flex-column">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    id="email"
                    placeholder="correo@example.com"
                    value={datosCuidador.email}
                    name="email"
                    onChange={handleForm}
                  ></input>
                  {!datosCuidador.email ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null}
                </div>
              </div>
              <p></p>

              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 d-flex flex-column">
                  <label htmlFor="password1" className="form-label">
                    Contraseña *
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="password"
                    placeholder="Contraseña"
                    value={datosCuidador.password1}
                    name="password1"
                    onChange={handleForm}
                  ></input>
                  {!datosCuidador.password1 ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null}
                </div>

                <div className="col-12 col-sm-6 col-md-6 d-flex flex-column">
                  <label htmlFor="password2" className="form-label">
                    Repetir Contraseña *
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="password2"
                    placeholder="Repita Contraseña"
                    value={datosCuidador.password2}
                    name="password2"
                    onChange={handleForm}
                  ></input>
                  {!datosCuidador.password2 ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null}
                  
                </div>
                
              </div>
              <p></p>

              <div className="row">
                <div className="col-12 col-sm-4 col-md-4 d-flex flex-column">
                  <label htmlFor="comuna" className="form-label">
                    Comuna
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="comuna"
                    placeholder="Comuna"
                    value={datosCuidador.comuna}
                    name="comuna"
                    onChange={handleForm}
                  ></input>
                  
                </div>
                <div className="col-12 col-sm-4 col-md-4 d-flex flex-column">
                  <label htmlFor="telefono" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-sm"
                    id="telefono"
                    placeholder="+56912345678"
                    value={datosCuidador.telefono}
                    name="telefono"
                    onChange={handleForm}
                  ></input>
                  
                </div>

                <div className="col-12 col-sm-4 col-md-4 d-flex flex-column">
                  <label htmlFor="redes sociales" className="form-label">Red Social</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="redes sociales"
                    placeholder="Redes Sociales"
                    value={datosCuidador.rrss}
                    name="rrss"
                    onChange={handleForm}
                  ></input>
                  
                </div>
              </div>
              <p></p>

              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 d-flex flex-column">
                  <label htmlFor="descripcion" className="form-label">Algo sobre ti</label>
                  <textarea
                    type="text"
                    className="form-control form-control-sm"
                    id="descripcion"
                    placeholder="Descripción"
                    value={datosCuidador.descripcion}
                    name="descripcion"
                    onChange={handleForm}
                  ></textarea>
                  
                </div>
              </div>
              <p></p>
              <div className="row">
                <div className="col-12 my-4 d-flex justify-content-center">
                  <button className="w-50 btn btn-light btn-sm">Enviar</button>
                </div>
              </div>
              <p></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroCuidador;
