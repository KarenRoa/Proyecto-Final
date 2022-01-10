import React from "react";
import "../../styles/modal.css";

const Modal = () => {
  return (
    <div>
      <div className="box-mayor d-flex justify-content-center">
        <div className="mx-2">
          <button
            type="button"
            className="btn btn-outline-light"
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
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-info bg-dark">
                Art. 9°. El contrato de trabajo es consensual; deberá constar
                por escrito en los plazos a que se refiere el inciso siguiente,
                y firmarse por ambas partes en dos ejemplares, quedando uno en
                poder de cada contratante. 87 88 El empleador que no haga
                constar por escrito el contrato dentro del plazo de quince días
                de incorporado el trabajador, o de cinco días si se trata de
                contratos por obra, trabajo o servicio determinado o de duración
                inferior a treinta días, será sancionado con una multa a
                beneficio fiscal de una a cinco unidades tributarias mensuales.
                89 Si el trabajador se negare a firmar, el empleador enviará el
                contrato a la respectiva Inspección del Trabajo para que ésta
                requiera la firma. Si el trabajador insistiere en su actitud
                ante dicha Inspección, podrá ser despedido, sin derecho a
                indemnización, a menos que pruebe haber sido contratado en
                condiciones distintas a las consignadas en el documento escrito.
                90 Si el empleador no hiciere uso del derecho que se le confiere
                en el inciso anterior, dentro del respectivo plazo que se indica
                en el inciso segundo, la falta de contrato escrito hará presumir
                legalmente que son estipulaciones del contrato las que declare
                el trabajador. 91 El empleador, en todo caso, estará obligado a
                mantener en el lugar de trabajo, o en un lugar fijado con
                anterioridad y que deberá haber sido autorizado previamente por
                la Inspección del Trabajo, un ejemplar del contrato, y, en su
                caso, uno del finiquito en que conste el término de la relación
                laboral, firmado por las partes. 92 Conforme a lo señalado en el
                inciso anterior, cuando exista la necesidad de centralizar la
                documentación laboral y previsional, en razón de tener
                organizado su giro económico en diversos establecimientos,
                sucursales o lugares de trabajo o por razones de administración,
                control, operatividad o seguridad o que sus trabajadores presten
                servicios en instalaciones de terceros, o lugares de difícil
                ubicación específica, o carentes de condiciones materiales en
                las cuales mantener adecuadamente la referida documentación,
                como labores agrícolas, mineras o forestales y de vigilancia
                entre otras, las empresas podrán solicitar a la Dirección del
                Trabajo autorización para centralizar los documentos antes
                señalados y ofrecer mantener copias digitalizadas de dichos
                documentos laborales y previsionales. Para estos efectos, el
                Director del Trabajo, mediante resolución fundada, fijará las
                condiciones y modalidades para dicha centralización. La
                Dirección del Trabajo deberá resolver la solicitud de que trata
                este inciso en un plazo de treinta días, no siendo exigible la
                obligación establecida en el inciso quinto, en tanto no se
                notifique dicha respuesta al peticionario.
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
                  Save changes
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
