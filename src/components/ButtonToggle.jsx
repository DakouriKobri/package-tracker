import React from "react";

export default function ButtonToggle({ status, onClick }) {
  return (
    <div>
      <button onClick={onClick}>
        <span> {status ? "Hide" : "View"} Your Order List</span>
      </button>
    </div>
  );
}
