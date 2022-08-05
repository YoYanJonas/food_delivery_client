import React from "react";
import { Spacing } from "@dsy/foundation";
interface marginProps {
    size?: keyof typeof Spacing;
    left?: boolean;
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    children: React.ReactNode;
}
export declare const Margin: React.FC<marginProps>;
export {};
