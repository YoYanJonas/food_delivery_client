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

export const Margin: React.FC<marginProps> = ({
  size = Spacing.none,
  children,
  left,
  top,
  right,
  bottom,
}) => {
  let marginClass = ``;

  if (left) {
    marginClass = `${marginClass} dsy-margin-left-${size}`;
  }
  if (top) {
    marginClass = `${marginClass} dsy-margin-top-${size}`;
  }
  if (right) {
    marginClass = `${marginClass} dsy-margin-right-${size}`;
  }
  if (bottom) {
    marginClass = `${marginClass} dsy-margin-bottom-${size}`;
  }

  if (!left && !top && !right && !right) {
    marginClass = `dsy-margin-${size}`;
  }

  return <div className={marginClass}>{children}</div>;
};
