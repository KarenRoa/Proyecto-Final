import React, { Component } from "react";

export const FormularioContacto = () => {
  return (
    <div className="container">
      <div className="col-12 col-md-8 col-lg-7 bg-light text-dark mt-5 mx-auto p-4 rounded-2 shadow-lg">
        <div>
          <h2 className="text-dark text-center p-3">Contacto</h2>
          <div className="row">
            <div className="col">
              <form>
                <div className="row">
                  <div className="col-10 col-md-8 mx-auto">
                    <label htmlFor="nombre" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="nombre"
                      placeholder="Nombre"
                      name="nombre"
                    />
                    {/* {!datosCliente.nombre ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null} */}
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-10 col-md-8 mx-auto">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      id="email"
                      placeholder="correo@example.com"
                      name="email"
                    />
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
                      name="asunto"
                    />
                    {/* {!datosCliente.nombre ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null} */}
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-10 col-md-8 mx-auto">
                    <label htmlFor="descripcion" className="form-label">
                      Mensaje
                    </label>
                    <textarea
                      className="form-control"
                      style={{ resize: "none" }}
                    ></textarea>
                  </div>
                </div>
                <div className="d-grid gap-2 col-10 col-md-8 mx-auto my-4">
                  <button className="btn btn-outline-light btn-sm">
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
