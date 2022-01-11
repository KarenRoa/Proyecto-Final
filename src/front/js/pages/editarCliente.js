import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const EditarCliente = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  
  //VARIABLES DE ESTADOS
  
  //const [datosCuidador, setDatosCuidador] = useState({
  const [datosCliente, setDatosCliente] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    comuna: "",
    rrss: "",
    descripcion: "",
  });
  
  const datos = store.detalleCliente
    
  
  //Variables de estados
  const [dataToEdit, setDataToEdit] = useState(datos)
  const [error, setError] = useState("");
  
  useEffect(() => {
    //actions.detalleCliente(id);
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

    if (
      !datosCliente.nombre ||
      !datosCliente.apellido ||
      !datosCliente.email
    ) {
      setValidacion(true);
      setError("campo obligatorio");
      return;
    } else setError("");

    setValidacion(false);

  };

  //FORMULARIO DE CLIENTE/DUENO

  return (
    <div className="container">
      <div className="col-12 col-md-8 col-lg-6 bg-dark text-light mt-5 mx-auto rounded-2">
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
                    //value={dataToEdit.nombre}
                    name="nombre"
                    onChange={handleForm}
                  ></input>
                  {!datosCliente.nombre ? (
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
                    //value={dataToEdit.apellido}
                    name="apellido"
                    onChange={handleForm}
                  ></input>
                  {!datosCliente.apellido ? (
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
                    //value={dataToEdit.email}
                    name="email"
                    onChange={handleForm}
                  ></input>
                  {!datosCliente.email ? (
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
                    //value={dataToEdit.comuna}
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
                    //value={dataToEdit.telefono}
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
                    //value={dataToEdit.rrss}
                    name="rrss"
                    onChange={handleForm}
                  ></input>
                </div>
              </div>
              <p></p>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 d-flex flex-column">
                  <label htmlFor="descripcion" className="form-label">Algo sobre ti o tu perro</label>
                  <textarea
                    type="text"
                    className="form-control form-control-sm"
                    id="descripcion"
                    placeholder="Descripción"
                    //value={dataToEdit.descripcion}
                    name="descripcion"
                    onChange={handleForm}
                  ></textarea>
                </div>
              </div>
              <p></p>
              <div className="row">
                <div className="col-12 my-4 d-flex justify-content-center">
                <Link to={`/#`} 
                      className="text-white">
                  <span className="fs-3"><i className="far fa-check-square me-4"></i></span>
                </Link>
                <Link to={`/perfilCliente/${id}`} 
                      className="text-white">
                  <span className="fs-3"><i className="fas fa-arrow-left"></i></span>
                </Link>
                </div>
              </div>
              <p></p>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <div className="container d-flex justify-content-center bg-dark w-50 text-light mt-5 ">
      
    //   <form className="form d-flex justify-content-center flex-column" onSubmit={handleSubmit}>
    //   <h1 className="text-center my-2">Editar Mi Perfil</h1>
    //     <div className="nombre d-flex flex-column m-auto">
    //       <label htmlFor="">Nombre *</label>
    //       <input
    //         type="text"
    //         value={dataToEdit.nombre}
    //         name="nombre"
    //         onChange={handleForm}
    //       ></input>
    //     </div>

    //     {!datosCuidador.nombre ? (
    //       <p style={{ color: "red", textAlign: "center" }}>{error}</p>
    //     ) : null}

    //     <div className="apellido d-flex flex-column m-auto">
    //       <label htmlFor="">Apellido *</label>
    //       <input
    //         type="text"
    //         value={dataToEdit.apellido}
    //         name="apellido"
    //         onChange={handleForm}
    //       ></input>
    //     </div>

    //     {!datosCuidador.apellido ? (
    //       <p style={{ color: "red", textAlign: "center" }}>{error}</p>
    //     ) : null}

    //     <div className="email d-flex flex-column">
    //       <label htmlFor="">Email *</label>
    //       <input
    //         type="email"
    //         value={dataToEdit.email}
    //         name="email"
    //         onChange={handleForm}
    //       ></input>
    //     </div>

    //     {!datosCuidador.email ? (
    //       <p style={{ color: "red", textAlign: "center" }}>{error}</p>
    //     ) : null}

        

    //     <div className="comuna d-flex flex-column">
    //       <label htmlFor="">Comuna</label>
    //       <input
    //         type="text"
    //         value={dataToEdit.comuna}
    //         name="comuna"
    //         onChange={handleForm}
    //       ></input>
    //     </div>
    //     <div className="telefono d-flex flex-column">
    //       <label htmlFor="">Teléfono</label>
    //       <input
    //         type="tel"
    //         value={dataToEdit.telefono}
    //         name="telefono"
    //         onChange={handleForm}
    //       ></input>
    //     </div>

    //     <div className="rrss d-flex flex-column">
    //       <label htmlFor="">Red Social</label>
    //       <input
    //         type="text"
    //         value={datosCuidador.rrss}
    //         name="rrss"
    //         onChange={handleForm}
    //       ></input>
    //     </div>
    //     <div className="descripcion d-flex flex-column">
    //       <label htmlFor="">Algo sobre ti</label>
    //       <input
    //         type="text"
    //         value={datosCuidador.descripcion}
    //         name="descripcion"
    //         onChange={handleForm}
    //       ></input>
    //     </div>
    //     <button className="enviar my-2">Enviar</button>
    //   </form>
    // </div>
  );
};