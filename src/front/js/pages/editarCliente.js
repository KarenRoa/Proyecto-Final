import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../../styles/editarBtn.css";

export const EditarCliente = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const history = useNavigate();

  //VARIABLES DE ESTADOS

  const [datosCliente, setDatosCliente] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    comuna: "",
    rrss: "",
    descripcion: "",
  });

  const datos = store.detalleCliente;

  //Variables de estados
  const [dataToEdit, setDataToEdit] = useState(datos);
  const [validacion, setValidacion] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    actions.detalleCliente(id);
  }, []);

  //MANEJADORES
  const handleForm = (event) => {
    const { name, value } = event.target;

    setDataToEdit((prevDatosCliente) => ({
      ...prevDatosCliente,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dataToEdit);
    if (!dataToEdit.nombre || !dataToEdit.apellido || !dataToEdit.email) {
      setValidacion(true);
      setError("campo obligatorio");
      return;
    } else setError("");

    setValidacion(false);

    actions.updateCliente(dataToEdit, id);

    alert("Datos modificados con Éxito");
    history.push(`/perfilCliente/${id}`);
  };

  //FORMULARIO DE Cliente

  return (
    <div className="container my-4 bg-light bg-opacity-50 p-5 rounded-3 boxed">
      <div className="col-12 col-md-8 col-lg-6 bg-light text-dark mt-5 mx-auto rounded-3 shadow-lg">
        <div className="row">
          <h1 className="col-12 text-center my-4">Editar Mi Perfil</h1>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <form className="form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 d-flex flex-column">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="nombre"
                    placeholder="Nombre"
                    value={dataToEdit.nombre}
                    name="nombre"
                    onChange={handleForm}
                  ></input>
                  {!dataToEdit.nombre ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null}
                </div>
                <div className="col-12 col-sm-6 col-md-6 d-flex flex-column">
                  <label htmlFor="apellido" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="apellido"
                    placeholder="Apellido"
                    value={dataToEdit.apellido}
                    name="apellido"
                    onChange={handleForm}
                  ></input>
                  {!dataToEdit.apellido ? (
                    <p className="text-center m-0 text-danger">{error}</p>
                  ) : null}
                </div>
              </div>
              <p></p>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 d-flex flex-column">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    id="email"
                    placeholder="correo@example.com"
                    value={dataToEdit.email}
                    name="email"
                    onChange={handleForm}
                  ></input>
                  {!dataToEdit.email ? (
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
                    value={dataToEdit.comuna}
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
                    value={dataToEdit.telefono}
                    name="telefono"
                    onChange={handleForm}
                  ></input>
                </div>
              </div>
              <p></p>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 d-flex flex-column">
                  <label htmlFor="descripcion" className="form-label">
                    Algo sobre ti y tu perro
                  </label>
                  <textarea
                    type="text"
                    className="form-control form-control-sm"
                    id="descripcion"
                    placeholder="Descripción"
                    value={dataToEdit.descripcion}
                    name="descripcion"
                    onChange={handleForm}
                  ></textarea>
                </div>
              </div>
              <p></p>
              <div className="row">
                <div className="col-12 my-4 d-flex justify-content-center">
                  <button className="btn btn-transparent me-3 px-3">
                    <span className="fs-5">
                      <i className="fas fa-check fs-4 mx-2"></i>
                    </span>
                  </button>
                  <Link to={`/perfilPrivado/${id}`} className="text-dark">
                    <span className="fs-3">
                      <i className="fas fa-arrow-left"></i>
                    </span>
                  </Link>
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
