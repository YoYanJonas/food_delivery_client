import React, { useState } from 'react';
import '../../atoms/Button/Button.js';
import { Banner } from '../../atoms/Banner/Banner.js';
import { Text } from '../../atoms/Text/Text.js';
import { Margin } from '../../atoms/Margin/Margin.js';
import '../../atoms/Chip/Chip.js';

const DismissableBanner = ({ label }) => {
    const [closeBanner, setCloseBanner] = useState(false);
    const closeHandler = () => {
        setCloseBanner(true);
    };
    return (React.createElement(React.Fragment, null, !closeBanner ? (React.createElement(Banner, null,
        React.createElement(Margin, { left: true, size: "md" },
            React.createElement(Text, null, label)),
        React.createElement(Margin, { right: true, size: "sm" },
            React.createElement("svg", { onClick: () => closeHandler(), width: "1.5rem", height: "1.5rem", className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }))))) : null));
};

export { DismissableBanner };
//# sourceMappingURL=DismissableBanner.js.map
