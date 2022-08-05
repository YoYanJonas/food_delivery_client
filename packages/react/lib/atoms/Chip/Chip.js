import React, { useState } from 'react';

var ChipTypes;
(function (ChipTypes) {
    ChipTypes["large"] = "large";
    ChipTypes["deletableLarge"] = "deletableLarge";
    ChipTypes["small"] = "small";
    ChipTypes["deletableSmall"] = "deletableSmall";
})(ChipTypes || (ChipTypes = {}));
const Chip = ({ model = ChipTypes.large, children }) => {
    const [close, setClose] = useState(false);
    const chipClass = `dsy-${model}-chip-container`;
    const svgDimensions = { large: "1rem", small: "0.8125rem" };
    const svgClosev = (React.createElement("svg", { onClick: () => setClose(true), xmlns: "http://www.w3.org/2000/svg", width: model === ChipTypes.deletableLarge ? svgDimensions.large : svgDimensions.small, height: model === ChipTypes.deletableLarge ? svgDimensions.large : svgDimensions.small, fill: "#9E9E9E", className: "bi bi-x-circle-fill", viewBox: "0 0 16 16" },
        React.createElement("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" })));
    if (!close) {
        if (model === ChipTypes.deletableLarge || model === ChipTypes.deletableSmall) {
            return (React.createElement("div", { className: chipClass },
                children,
                svgClosev));
        }
        else {
            return React.createElement("div", { className: chipClass }, children);
        }
    }
    else {
        return null;
    }
};

export { Chip, ChipTypes };
//# sourceMappingURL=Chip.js.map
