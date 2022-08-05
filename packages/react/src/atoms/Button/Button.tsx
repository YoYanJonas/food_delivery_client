import React from "react";

export enum Buttontype {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  stacked = "stacked",
}
interface ButtonProps {
  label: string;
  model: Buttontype;
}
export const Button: React.FunctionComponent<ButtonProps> = ({ label, model }) => {
  const btnClass = `dsy-${model}-btn-container`;

  return <button className={btnClass}>{label}</button>;
};
