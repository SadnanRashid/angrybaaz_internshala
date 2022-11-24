import "./main.css";
import React, { useState } from "react";

export default function PrintingTypes() {
  const [data, setData] = useState({});
  return (
    <div>
      <div className="d-flex flex-row justify-content-between mt-5">
        <h3 className="fw-bold">Printing Types: </h3>
        {/* <p className="text-danger me-4"></p> */}
        <button
          type="submit"
          className="btn btn-dark font-weight-bold mt-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Submit
        </button>
      </div>
      {/* modal */}
      <div>
        <>
          {/* Modal */}
          <div
            className="modal"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Service Confermation
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">Modal Body</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
      {/* end of modal */}
    </div>
  );
}
