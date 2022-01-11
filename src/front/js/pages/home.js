import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css"; 
import { Link, useParams } from "react-router-dom";
import { FormularioContacto } from "../component/fomularioContacto";
import { QuienesSomos } from "../component/quienesSomos";
import { Card } from "../component/card";
import { Banner } from "../component/banner";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-light bg-opacity-50 p-4 rounded-3 text-uppercase">
      <div className="container-fluid py-5 bg-light bg-opacity-75 rounded-3 mt-4">
        {/*Banner -  ----------->>>>>>>>>>>>>>>>>>>>>>>>>>*/}
        <Banner/>

        {/*CARDS ------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

        <div className="container-fluid">
          <div className="row mb-5">
            {/* store.detalleCuidador.map((index) => {
              return (
                <div key = {index} > <Card/> <div/>
              )
            })   */}
            {/*Card - 01 ----------->>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <Card />
            {/*Card - 02 ----------->>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <Card />
            {/*Card - 03 ----------->>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <Card />
            {/*Card - 04 ----------->>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <Card />
          </div>

          
        </div>

        {/*BOTON - Ver Todos ----------->>>>>>>>>>>>>>>>>>>>>>>>>>*/}
        <Link to={"/todoscuidadores"}>
          <div className="boton text-center">
            <button className="btn btn-outline-dark btn-sm fw-light shadow-sm">
              VER TODOS
            </button>
          </div>
        </Link>

        <hr className="my-4" />

        {/*SECCION - Quienes Somos ----------->>>>>>>>>>>>>>>>>>>>>>>>>>*/}

        <QuienesSomos />

        <hr className="my-4" />

        {/*CONTACTO - Formulario ----------->>>>>>>>>>>>>>>>>>>>>>>>>>*/}

        <FormularioContacto />
      </div>
    </div>
  );
};
