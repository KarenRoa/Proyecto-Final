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
                  <label htmlFor="email" className="form-label">
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
                  <label htmlFor="password" className="form-label">
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
                  <label htmlFor="password2" className="form-label">
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
                  <label htmlFor="comuna" className="form-label">
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
                  <label htmlFor="telefono" className="form-label">
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
  );
};

export default RegistroCliente;
