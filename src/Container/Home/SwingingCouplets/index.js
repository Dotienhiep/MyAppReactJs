import React, { useState, useEffect } from "react";
import { SwingingCoupletsWrapper } from "../SwingingCouplets/style";

const SwingingCouplets = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 260) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <SwingingCoupletsWrapper className="wrapper">
      <div className={`couplet${isFixed ? " fixed" : ""}`}>
        <img
          src="/assets/images/tet-banner-sale.png"
          className="bordered-image"
          alt=""
        />
      </div>
      <div className={`couplet${isFixed ? " fixedd" : ""}`}>
        <img
          src="/assets/images/tet-banner-salee.png"
          className="bordered-image"
          alt=""
        />
      </div>
    </SwingingCoupletsWrapper>
  );
};

export default SwingingCouplets;
