import React from "react";
import Selected from "react-select";

const options = [
  { value: "high", label: "High" },
  { value: "normal", label: "Normal" },
  { value: "low", label: "Low" }
];

const Select = ({ onChooseSelect }) => (
  <div style={{ width: "200px" }}>
    <Selected options={options} onChange={e => onChooseSelect(e)} />
  </div>
);

export default Select;
