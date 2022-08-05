import React from 'react';

var BannerTypes;
(function (BannerTypes) {
    BannerTypes["default"] = "default";
    BannerTypes["error"] = "error";
    BannerTypes["withLinkB"] = "withLinkB";
    BannerTypes["withLinkR"] = "withLinkR";
})(BannerTypes || (BannerTypes = {}));
const Banner = ({ model = BannerTypes.default, children, }) => {
    const bannerClass = `dsy-${model}-banner-container`;
    return React.createElement("div", { className: bannerClass }, children);
};

export { Banner, BannerTypes };
//# sourceMappingURL=Banner.js.map
