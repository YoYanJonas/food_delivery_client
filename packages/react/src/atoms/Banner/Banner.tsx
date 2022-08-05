import React from "react";

export enum BannerTypes {
  default = "default",
  error = "error",
  withLinkB = "withLinkB",
  withLinkR = "withLinkR",
}
interface BannerProps {
  model?: BannerTypes;
  children?: React.ReactNode;
}
export const Banner: React.FunctionComponent<BannerProps> = ({
  model = BannerTypes.default,
  children,
}) => {
  const bannerClass = `dsy-${model}-banner-container`;
  return <div className={bannerClass}>{children}</div>;
};
