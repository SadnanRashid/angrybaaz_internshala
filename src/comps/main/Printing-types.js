import "./main.css";
import React, { useRef, useState } from "react";

export default function PrintingTypes() {
  let key = 0;
  const [data, setData] = useState([]);
  const [test, setTest] = useState("");
  const [image, setImage] = useState(null);
  function handleSelectChange(event) {
    setTest(event.target.value);
    console.log(test);
  }
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const handleDone = () => {
    const length = data.length;
    let flag = false;
    for (let i = 0; i < length; i++) {
      if (data[i].test === test) {
        flag = true;
      }
    }
    // input data if it is not already existing
    if (flag === false) {
      setData((current) => [
        ...current,
        {
          test,
          image,
        },
      ]);
    } else {
      // console.log("already ini");
      window.alert(
        "Printing type already added, select some other printing type"
      );
    }
  };
  return (
    <div>
      <div className="d-flex flex-row justify-content-between mt-5">
        <h3 className="fw-bold">Printing Types: </h3>
        <p
          className="text-danger me-4 pointer-cursor"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add printing type
        </p>
      </div>
      {/* Show all the printing types */}
      <div className="d-flex flex-row flex-wrap mt-1">
        {data.map((e) => {
          key += 1;
          return (
            <div className="image-div mx-2 mb-3 mt-4" key={key}>
              <img src={e.image} alt="preview image" />
              <p className="fw-bold">{e.test}</p>
            </div>
          );
        })}
      </div>
      {/* End of printing types */}
      {/* modal */}
      <div>
        <>
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
                    Add a printing type
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="d-flex flex-column">
                    <select
                      className="form-select"
                      value={test}
                      onChange={handleSelectChange}
                    >
                      <option defaultValue>Select a printing type</option>
                      <option value={"Engraved Roller printing"}>
                        Engraved Roller printing
                      </option>
                      <option value={"Screen printing"}>Screen printing</option>
                      <option value={"Stencil printing"}>
                        Stencil printing
                      </option>
                      <option value={"Block printing"}>Block printing</option>
                      <option value={"Spray printing"}>Spray printing</option>
                    </select>
                    {/* <button className="btn btn-outline-dark ms-2">
                      Add Image
                    </button> */}
                    <input
                      type="file"
                      id="myfile"
                      name="myfile"
                      className="btn btn-outline-dark mt-3"
                      onChange={onImageChange}
                    ></input>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleDone}
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
