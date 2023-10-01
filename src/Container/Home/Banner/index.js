import React from "react";
import { BannerWrapper } from "./style";

const Banner = () => {
  return (
    <BannerWrapper>
      <div className="container">
        <img
          className="banner"
          src="/assets/images/center-image-banner.png"
          alt="banner website"
        />
        <div className="wave"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
