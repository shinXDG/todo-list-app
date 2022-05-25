import React from "react";

type Props = {
  value?: string | Date | number;
  onChange?: any;
  min?: string | Date | number;
};

export const DatePickerComponent: React.FC<Props> = ({
  value,
  onChange,
  min,
}) => {
  return (
    <input
      style={{ padding: "5px", border: "1px #d9d9d9 solid" }}
      type="date"
      value={value?.toString()}
      // min={min?.toString()}
      onChange={() => onChange && onChange()}
    />
  );
};
