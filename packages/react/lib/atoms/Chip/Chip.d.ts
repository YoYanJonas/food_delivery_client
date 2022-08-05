import React from "react";
export declare enum ChipTypes {
    large = "large",
    deletableLarge = "deletableLarge",
    small = "small",
    deletableSmall = "deletableSmall"
}
interface chipProps {
    model: ChipTypes;
    children: React.ReactNode;
}
export declare const Chip: React.FC<chipProps>;
export {};
