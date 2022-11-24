import "./main.css";
import React from "react";

export default function PersonalInfo() {
  return (
    <div className="container px-3">
      <div className="row">
        <div className="detail-box col-md-6 col-sm-12 my-1">
          Your Name:{" "}
          <input type="text" name="name" value="Sadnan Rashid" disabled />
        </div>
        <div className="detail-box col-md-6 col-sm-12 my-1">
          Phone Number:{" "}
          <input type="number" name="phone" placeholder="0123 456 789" />
        </div>
        <div className="detail-box col-md-6 col-sm-12 my-1">
          Subscribed categories:{" "}
          <input
            type="text"
            name="categories"
            placeholder="Tshirt, Sweater, Coat"
          />
        </div>
        <div className="detail-box col-md-6 col-sm-12 my-1">
          GSTIN number:{" "}
          <input type="number" name="gstin" value="12345678" disabled />
        </div>
        <div className="detail-box col-md-6 col-sm-12 my-1">
          Shop Name:{" "}
          <input type="text" name="shopName" value="Fly Shirt Store" disabled />
        </div>
      </div>
    </div>
  );
}
