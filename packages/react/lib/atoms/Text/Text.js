import React from 'react';
import { fontSize } from '@dsy/foundation';

const Text = ({ size = fontSize.base, children = "Default text" }) => {
    const textClass = `dsy-fs-${size}`;
    return React.createElement("span", { className: textClass }, children);
};

export { Text };
//# sourceMappingURL=Text.js.map
