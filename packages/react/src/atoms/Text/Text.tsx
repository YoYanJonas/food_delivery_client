import React from "react";

import { fontSize } from "@dsy/foundation";

interface textProps {
  size?: keyof typeof fontSize;
  children: string;
}

export const Text: React.FC<textProps> = ({ size = fontSize.base, children = "Default text" }) => {
  const textClass = `dsy-fs-${size}`;
  return <span className={textClass}>{children}</span>;
};
