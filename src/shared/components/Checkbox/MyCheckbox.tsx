import React from "react";
import "./style.css";
type Props = {
  checked?: boolean;
  onChange?: (event: any) => void;
};

export const MyCheckbox: React.FC<Props> = ({ checked = false, onChange }) => {
  return (
    <label className="container">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark"></span>
    </label>
  );
};
