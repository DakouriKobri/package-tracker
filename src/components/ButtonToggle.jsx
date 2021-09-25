import React from "react";

export default function ButtonToggle({ status, onClick }) {
  return (
    <div className="button-toggle-container">
      <button className="button-toggle" onClick={onClick}>
        <span>{status ? "Hide" : "View"} Your Order List</span>
      </button>
    </div>
  );
}
