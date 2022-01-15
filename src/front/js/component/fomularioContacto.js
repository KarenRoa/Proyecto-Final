import React, { Component, useState } from "react";

export const FormularioContacto = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    asunto:"",
    mensaje: "",
  });
  const [validacion, setValidacion] = useState(false);
  const [error, setError] = useState("");

  const handleFormContacto = (event) => {
    const { name, value } = event.target;
    setUsuario((prevUsuario) => ({ ...prevUsuario, [name]: value }));
    console.log(usuario);
  };

  const submit = (event) => {
    event.preventDefault();

    if (!usuario.nombre || !usuario.email || !usuario.asunto || !usuario.mensaje) {
      setValidacion(true);
      setError("Campo Obligatorio");
      return;
    } else {
      setError("");
      setValidacion(false);
    }
  };

  return (
    <div id="contacto" className="container">
      <div className="col-12 col-md-8 col-lg-7 bg-light text-dark mt-5 mx-auto p-4 rounded-2 shadow-lg ">
        <div>
          <h2 className="text-dark text-center p-3">CONTACTO</h2>
          <div className="row">
            <div className="col">
              <form className="form" onSubmit={submit}>
                <div className="row">
                  <div className="col-10 col-md-8 mx-auto">
                    <label htmlFor="nombre" className="form-label">
                      Nombre*
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="nombre"
                      placeholder="Nombre"
                      value={usuario.nombre}
                      name="nombre"
                      onChange={handleFormContacto}
                    />
                    {!usuario.nombre ? (<p className="text-center m-0 text-danger"><small>{error}</small></p>) : null}
                    {/* {!datosCliente.nombre ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null} */}
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-10 col-md-8 mx-auto">
                    <label htmlFor="email" className="form-label">
                      Email*
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      id="email"
                      placeholder="correo@example.com"
                      value={usuario.email}
                      name="email"
                      onChange={handleFormContacto}
                    />
                    {!usuario.email ? (<p className="text-center m-0 text-danger"><small>{error}</small></p>) : null}
                    {/* {!datosCliente.nombre ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null} */}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-10 col-md-8 mx-auto">
                    <label htmlFor="asunto" className="form-label">
                      Asunto
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="asunto"
                      placeholder="Asunto"
                      value={usuario.asunto}
                      name="asunto"
                      onChange={handleFormContacto}
                    />
                    {!usuario.asunto ? (<p className="text-center m-0 text-danger"><small>{error}</small></p>) : null}
                    {/* {!datosCliente.nombre ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null} */}
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-10 col-md-8 mx-auto">
                    <label htmlFor="descripcion" className="form-label">
                      Mensaje*
                    </label>
                    <textarea
                      className="form-control"
                      value={usuario.mensaje}
                      name="mensaje"
                      onChange={handleFormContacto}
                      style={{ resize: "none" }}
                    ></textarea>
                    {!usuario.mensaje ? (<p className="text-center m-0 text-danger"><small>{error}</small></p>) : null}
                  </div>
                </div>
                <div className="d-grid gap-2 col-10 col-md-8 mx-auto my-4">
                  <button className="btn btn-outline-dark btn-sm">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
