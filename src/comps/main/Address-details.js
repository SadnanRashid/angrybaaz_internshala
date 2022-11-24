import "./main.css";
import React from "react";

export default function AddressInfo() {
  return (
    <div className="container px-3">
      <div className="row">
        <div className="detail-box col-md-6 col-sm-12 my-1">
          Full Name: <input type="text" name="name" placeholder="John Doe" />
        </div>
        <div className="detail-box col-md-6 col-sm-12 my-1">
          Display Name:{" "}
          <input type="text" name="displayName" placeholder="John Doe" />
        </div>
        <div className="detail-box col-md-6 col-sm-12 my-1">
          Store Description:{" "}
          <input type="text" name="storeDesc" placeholder="Store description" />
        </div>
        <div className="detail-box col-md-6 col-sm-12 my-1">
          Pincode: <input type="number" name="pinCode" value="2988" disabled />
        </div>
        <div className="detail-box col-md-6 col-sm-12 my-1">
          Pickup address:{" "}
          <input
            type="text"
            name="pickupAddress"
            placeholder="Your Pickup Address"
          />
        </div>
      </div>
    </div>
  );
}
