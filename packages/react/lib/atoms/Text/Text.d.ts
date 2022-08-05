import React from "react";
import { fontSize } from "@dsy/foundation";
interface textProps {
    size?: keyof typeof fontSize;
    children: string;
}
export declare const Text: React.FC<textProps>;
export {};
