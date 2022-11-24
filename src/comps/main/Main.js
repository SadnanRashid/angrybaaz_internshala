import "./main.css";
import React from "react";
import PersonalInfo from "./Personal-info";
import AddressInfo from "./Address-details";
import ShopInfo from "./Shop-details";
import PrintingTypes from "./Printing-types";
import MainFooter from "./MainFooter";

export default function Main() {
  return (
    <div className="details-container font-light">
      <div className="details-sub">
        <h3 className="fw-bold">Personal information: </h3>
        <PersonalInfo />
        <h3 className="fw-bold mt-5">Pickup Address Details: </h3>
        <AddressInfo />
        <h3 className="fw-bold mt-5">Shop Address Details: </h3>
        <ShopInfo />
        {/* Printing type */}
        <PrintingTypes />
        <MainFooter />
      </div>
    </div>
  );
}
