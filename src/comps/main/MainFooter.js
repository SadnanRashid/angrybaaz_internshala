import "./main.css";
import React from "react";

export default function MainFooter() {
  return (
    <div>
      <div className="d-flex flex-row justify-content-between mt-5">
        <p
          className="text-primary fw-bold me-4 pointer-cursor"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        >
          Request change details
        </p>
        <p className="text-primary fw-bold me-4 pointer-cursor">
          Setup your store
        </p>
      </div>
      {/* modal */}
      <div>
        <>
          <div
            className="modal"
            id="exampleModal1"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel1"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel1">
                    Request Change Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="d-flex flex-column  font-light">
                    <p className="fw-bold font-light">
                      Select categories that you would want to change and our
                      customer rep will reach you soon.
                    </p>
                    <div className="font-monospace">
                      <div className="form-check mt-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Change shop name/address
                        </label>
                      </div>
                      {/*  */}
                      <div className="form-check mt-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Change vendor name
                        </label>
                      </div>
                      {/*  */}
                      <div className="form-check mt-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Add shop photos
                        </label>
                      </div>
                      {/*  */}
                      <div className="form-check mt-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Add new bank details
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Done
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
