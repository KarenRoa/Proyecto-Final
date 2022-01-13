import React from "react";

const Modal = () => {
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
            value=""
            aria-label="..."
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
                Yo, ………………………………. Me comprometo a través de este documento a
                prestar los servicios de paseador de perros; a cuidar y darle
                amor a las mascotas que estén a mi cargo y procurar que tengan
                un paseo agradable para luego volver con sus respectivos dueños
                en las mismas condiciones en que me fue entregado, asi mismo, me
                comprometo a:
                <li>Recoger las heces de la mascota cuidando el entorno.</li>
                <li>
                  Dar al perrito la hidratacion necesaria mientras dure el
                  paseo.
                </li>
                <li>
                  Seguir las indicaciones especiales que informe el dueño de la
                  mascota previo al paseo.
                </li>
                <li>
                  No pasear mas de 04 (cuatro) perros a la vez por motivos de
                  seguridad.
                </li>
                <li>
                  En caso de ser necesario comunicar al dueño la cancelacion del
                  paseo con un minimo de 24 horas antes de la hora acordada
                </li>
                Además de ello tomo conocimiento de que en caso de existir algún
                tipo de maltrato podrían aplicarse las sanciones que indica la{" "}
                <a href="https://www.bcn.cl/leychile/navegar?idNorma=1106037">
                  Ley de Tenencia Responsable
                </a>
                ley de tenencia responsable, las cuales corresponden a:
                <li>
                  <b>Daño a un animal:</b> pena de presidio menor en su grado
                  mínimo a medio y multa de 10 a 30 UTM, además de la
                  inhabilidad absoluta perpetua para la tenencia de cualquier
                  tipo de animal.
                </li>
                <li>
                  {" "}
                  <b>
                    Lesiones graves en la integridad física o muerte del animal:
                  </b>{" "}
                  pena de presidio menor en su grado medio y multa de 20 a 30
                  UTM, además de la inhabilidad absoluta perpetua para la
                  tenencia de cualquier tipo de animal.
                </li>
                Al aceptar los Términos y Condiciones confirmo además que los
                datos que he entregado en esta página son verídicos y cualquier
                accidente que pueda tener la mascota será de mi completa
                responsabilidad.
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

export default Modal;
