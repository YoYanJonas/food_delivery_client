import React, { useState } from "react";

export enum ChipTypes {
  large = "large",
  deletableLarge = "deletableLarge",
  small = "small",
  deletableSmall = "deletableSmall",
}

interface chipProps {
  model: ChipTypes;
  children: React.ReactNode;
}

export const Chip: React.FC<chipProps> = ({ model = ChipTypes.large, children }) => {
  const [close, setClose] = useState<boolean>(false);

  const chipClass = `dsy-${model}-chip-container`;
  const svgDimensions = { large: "1rem", small: "0.8125rem" };
  const svgClosev = (
    <svg
      onClick={() => setClose(true)}
      xmlns="http://www.w3.org/2000/svg"
      width={model === ChipTypes.deletableLarge ? svgDimensions.large : svgDimensions.small}
      height={model === ChipTypes.deletableLarge ? svgDimensions.large : svgDimensions.small}
      fill="#9E9E9E"
      className="bi bi-x-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
    </svg>
  );
  if (!close) {
    if (model === ChipTypes.deletableLarge || model === ChipTypes.deletableSmall) {
      return (
        <div className={chipClass}>
          {children}
          {svgClosev}
        </div>
      );
    } else {
      return <div className={chipClass}>{children}</div>;
    }
  } else {
    return null;
  }
};
