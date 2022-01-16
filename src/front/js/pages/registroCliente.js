import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import Modal2 from "../component/modal2";

const RegistroCliente = () => {
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
    descripcion: "",
  };
  //VARIABLES DE ESTADOS
  const [datosCliente, setDatosCliente] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    password2: "",
    telefono: "",
    comuna: "",
    descripcion: "",
  });

  //Variables de estados
  const [validacion, setValidacion] = useState(false);
  const [error, setError] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  const [check, setChecked] = useState("")

  const handleChange = (e) =>{
    setChecked(e.target.checked)
  }
  
  console.log(check);

  //MANEJADORES
  //Funcion que limpia el formulario
  const handleReset = () => {
    setDatosCliente(formInicial);
  };

  const handleForm = (event) => {
    const { name, value } = event.target;

    setDatosCliente({
      ...datosCliente,
      [name]: value,
    });
    console.log(datosCliente);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !datosCliente.nombre ||
      !datosCliente.apellido ||
      !datosCliente.email ||
      !datosCliente.password ||
      !datosCliente.password2
    ) {
      setValidacion(true);
      setError("Campo obligatorio");
      return;
    } else setError("");

    setValidacion(false);

    if (datosCliente.password !== datosCliente.password2) {
      setErrorPassword(true);
      alert("Las Contraseñas tienen que ser identicas");
      return;
    }
    setErrorPassword(false);
    //setError("Usuario registrado exitosamente");

    if (check){

      actions.setDatosFormularioCliente(datosCliente);
      alert("Te has registrado exitosamente");
      history.push(`/`);
      handleReset();
    }else{
      alert("Debes Aceptar los Terminos y Condiciones")
    }

 

  };

  //FORMULARIO DE CLIENTE

  return (
    <div className="container bg-light bg-opacity-75 rounded-3 p-4 mt-4">
      {/* <div className="col-12 col-md-8 col-lg-6 bg-light bg-opacity-75 text-dark mt-5 mx-auto p-4 rounded-3 shadow-lg my-4"> */}
      <div className="col-12 col-md-8 col-lg-6 bg-light bg-opacity-75 text-dark mx-auto p-4 rounded-3 shadow-lg my-5">
        <div className="row">
          <div className="col d-flex justify-content-end me-2">
            <Link to={`/`} className="text-dark">
              <span className="fs-4">
                <i className="fas fa-arrow-left"></i>
              </span>
            </Link>
          </div>
        </div>
        <h2 className="col-12 text-center mb-3">Registro Cliente</h2>
        <div className="row">
          <div className="col-10 mx-auto">
            <form className="form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 d-flex flex-column">
                  <label htmlFor="nombre" className="form-label">
                    Nombre*
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
                    Apellido*
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
                    Email*
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
                    Contraseña*
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
                    Repita Contraseña*
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

              <div className="row my-3">
                <div className="col-12 col-sm-12 col-md-12 d-flex flex-column">
                  <label htmlFor="descripcion" className="form-label">
                    Cuentanos de tu Perro
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    style={{ resize: "none" }}
                    id="descripcion"
                    placeholder="Descripción"
                    value={datosCliente.descripcion}
                    name="descripcion"
                    onChange={handleForm}
                  ></textarea>
                </div>
              </div>

              <div className="">
                <div className="col- 12 my-4">
                <Modal2 handleChange={handleChange}/>
                </div>
              </div>

              <div className="d-grid gap-2 col-10 mx-auto my-4 ">
                <button className="btn btn-outline-dark btn-sm">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroCliente;
