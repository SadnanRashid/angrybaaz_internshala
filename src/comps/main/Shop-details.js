import "./main.css";
import React from "react";

export default function ShopInfo() {
  return (
    <div className="container px-3">
      <div className="row">
        <div className="detail-box col-md-6 col-sm-12 my-1">
          Locality:{" "}
          <input
            type="text"
            name="name"
            value=": New Rana Nagar, Behind JPS public school"
            disabled
          />
        </div>
        <div className="detail-box col-md-6 col-sm-12 my-1">
          Area Street :{" "}
          <input type="text" name="categories" value="Fauzi mod" disabled />
        </div>
        <div className="detail-box col-md-6 col-sm-12 my-1">
          City: <input type="text" name="gstin" value="Raebareli" disabled />
        </div>
        <div className="detail-box col-md-6 col-sm-12 my-1">
          State:{" "}
          <input type="text" name="shopName" value="Uttar Pradesh" disabled />
        </div>
        <div className="detail-box col-md-6 col-sm-12 my-1">
          Landmark:{" "}
          <input type="text" name="shopName" value="JPS school" disabled />
        </div>
      </div>
    </div>
  );
}
