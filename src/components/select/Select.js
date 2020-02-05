import React from "react";
import Selected from "react-select";

export const options = [
  { value: "high", label: "High" },
  { value: "normal", label: "Normal" },
  { value: "low", label: "Low" }
];

const Select = ({ onChooseSelect, value }) => (
  <div style={{ width: "200px" }}>
    <Selected
      options={options}
      onChange={e => onChooseSelect(e)}
      value={value}
    />
  </div>
);

export default Select;
