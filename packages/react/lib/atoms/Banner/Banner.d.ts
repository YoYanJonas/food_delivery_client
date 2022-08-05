import React from "react";
export declare enum BannerTypes {
    default = "default",
    error = "error",
    withLinkB = "withLinkB",
    withLinkR = "withLinkR"
}
interface BannerProps {
    model?: BannerTypes;
    children?: React.ReactNode;
}
export declare const Banner: React.FunctionComponent<BannerProps>;
export {};
