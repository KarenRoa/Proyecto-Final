import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import Modal from "../component/modal";
import { check } from "prettier";

const RegistroCuidador = () => {
  const { store, actions } = useContext(Context);
  const history = useNavigate();

  const formInicial = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    password2: "",
    telefono: "",
    comuna: "",
    rrss: "",
    descripcion: "",
  };

  //VARIABLES DE ESTADOS
  const [datosCuidador, setDatosCuidador] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    password2: "",
    telefono: "",
    comuna: "",
    rrss: "",
    descripcion: "",
  });

  const [validacion, setValidacion] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [error, setError] = useState("");

  const [checkedC, setCheckedC] = useState("")

  const handleChange = (e) =>{
    setCheckedC(e.target.checked)
  }
  

  //MANEJADORES

  //Funcion que limpia el formulario
  const handleReset = () => {
    setDatosCuidador(formInicial);
  };

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
      !datosCuidador.password ||
      !datosCuidador.password2
    ) {
      setValidacion(true);
      setError("campo obligatorio");
      return;
    } else setError("");

    setValidacion(false);

    if (datosCuidador.password !== datosCuidador.password2) {
      setErrorPassword(true);
      alert("Las Contraseñas tienen que ser identicas");
      return;
    }
    setErrorPassword(false);

    if(checkedC){
      actions.setDatosFormularioCuidador(datosCuidador);
      alert("Te has registrado exitosamente");
      history.push("/");
      handleReset();
    }else{
      alert("Debes Aceptar los Terminos y Condiciones")
    }

  };

  //FORMULARIO DE CUIDADOR
  return (
    
    <div className="container bg-light bg-opacity-75 rounded-3 p-4 mt-5">
      <div className="col-12 col-md-8 col-lg-6 bg-light bg-opacity-75 text-dark  mx-auto p-4 rounded-3 shadow-lg my-5">
        <div className="row">
          <div className="col d-flex justify-content-end me-2">
          <Link to={`/`} 
                className="text-dark">
                  <span className="fs-4"><i className="fas fa-arrow-left"></i></span>
          </Link>
          </div>
        </div>
        <div className="row">
          <h2 className="col-12 text-center mb-3">Registro Paseador</h2>
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
                    value={datosCuidador.password}
                    name="password"
                    onChange={handleForm}
                  ></input>
                  {!datosCuidador.password ? (
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
                  <label htmlFor="redes sociales" className="form-label">
                    Red Social
                  </label>
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
                  <label htmlFor="descripcion" className="form-label">
                    Algo sobre ti
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    style={{ resize: "none" }}
                    id="descripcion"
                    placeholder="Descripción"
                    value={datosCuidador.descripcion}
                    name="descripcion"
                    onChange={handleForm}
                  ></textarea>
                </div>
              </div>
              <div>
                <div className=" col- 12 my-4">
                  <Modal handleChange={handleChange}/>
                </div>
              </div>
              <div className="d-grid gap-2 col-10 mx-auto my-4">
                <button className="btn btn-outline-dark btn-sm">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistroCuidador;
