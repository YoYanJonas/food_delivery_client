import React from 'react';
import { Spacing } from '@dsy/foundation';

const Margin = ({ size = Spacing.none, children, left, top, right, bottom, }) => {
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
    return React.createElement("div", { className: marginClass }, children);
};

export { Margin };
//# sourceMappingURL=Margin.js.map
