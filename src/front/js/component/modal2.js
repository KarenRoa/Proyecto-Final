import React, { useState } from "react";

const Modal2 = ({ handleChange}) => {

  

  return (
    <div>
      <div className="box-mayor d-flex justify-content-center">
        <div className="mx-2">
          <button
            type="button"
            className="btn btn-outline-dark"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fas fa-paw"></i> Terminos y condiciones
          </button>
        </div>

        <div className="form-check form-check-inline d-flex">
          <input
            className="form-check-input my-auto"
            type="checkbox"
            id="checkboxNoLabel"
          
            aria-label="..."
            onChange={(e)=>{
              handleChange(e)}}
          />
        </div>
      </div>

      <div className="modal-dialog modal-dialog-scrollable">
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header text-light bg-dark">
                <h5 className="modal-title" id="exampleModalLabel">
                  <i className="fas fa-paw"></i> Terminos y Condiciones
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-light bg-dark">
                Yo, .................... En mi calidad de dueño de .............. me
                comprometo a través de este documento a que al momento de
                entregar el cuidado de mi mascota al cuidador, le comunicaré a
                este sobre cualquier medida o atencion especial que se deba tener
                al momento de salir oon ella a la calle, asi mismo, me
                comprometo a:
                <li>
                  Entregar mi mascota al cuidador en las mejores condiciones
                  posibles.
                </li>
                <li>
                  Haré entrega al cuidador de bolsas para recoger las heces de
                  mi mascota y agua con su bebedero para la hidratación.
                </li>
                <li>
                  Si mi mascota usa protesis de algun tipo, debo verificar que
                  esta funcione de manera optima.
                </li>
                <li>
                  En caso de ser necesario comunicar al paseador la cancelacion
                  del paseo con un minimo de 24 horas antes de la hora acordada
                </li>
                Además de ello tomo conocimiento de que:
                <li>
                  Segun indica la{" "}
                  <a href="https://www.bcn.cl/leychile/navegar?idNorma=1106037">
                    Ley de Tenencia Responsable 
                  </a>
                   en caso de fiscalizacion es mi responsabilidad que mi mascota esté debidamente inscrita en el {" "}
                  <a href="https://www.chileatiende.gob.cl/fichas/53562-inscripcion-en-el-registro-nacional-de-mascotas-o-animales-de-compania ">
                    Registro Nacional de Mascotas
                  </a>
                </li>
                <li>
                 Responderé civilmente por los daños que mi mascota pueda causar.
                </li>
                Al aceptar los Términos y Condiciones confirmo además que los
                datos que he entregado en esta página son verídicos.
              </div>
              <div className="modal-footer bg-dark">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button type="button" className="btn btn-primary">
                  Entendido
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
