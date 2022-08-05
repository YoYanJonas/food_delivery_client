import React from "react";
export declare enum Buttontype {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary",
    stacked = "stacked"
}
interface ButtonProps {
    label: string;
    model: Buttontype;
}
export declare const Button: React.FunctionComponent<ButtonProps>;
export {};
