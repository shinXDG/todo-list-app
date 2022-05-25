import React from "react";
import "./style.css";

type Props = {
  children: React.ReactNode;
};
export const Container: React.FC<Props> = ({ children }) => {
  return <div className="container-app">{children}</div>;
};
