import React from "react";
import "./CustomToggleSwitch.css";

const CustomToggleSwitch = ({ onChange, checked }) => {
  return (
    <label className="custom-toggle-switch">
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className="slider"></span>
      <span className={`label-left ${checked ? "active" : ""}`}>Fr</span>
      <span className={`label-right ${!checked ? "active" : ""}`}>En</span>
    </label>
  );
};

export default CustomToggleSwitch;
