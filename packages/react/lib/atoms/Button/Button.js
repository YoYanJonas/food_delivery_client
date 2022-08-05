import React from 'react';

var Buttontype;
(function (Buttontype) {
    Buttontype["primary"] = "primary";
    Buttontype["secondary"] = "secondary";
    Buttontype["tertiary"] = "tertiary";
    Buttontype["stacked"] = "stacked";
})(Buttontype || (Buttontype = {}));
const Button = ({ label, model }) => {
    const btnClass = `dsy-${model}-btn-container`;
    return React.createElement("button", { className: btnClass }, label);
};

export { Button, Buttontype };
//# sourceMappingURL=Button.js.map
