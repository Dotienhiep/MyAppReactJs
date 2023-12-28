import React from 'react';
import {SwingingCoupletsWrapper} from "../SwingingCouplets/style"


const SwingingCouplets = () => {
  return (
    <SwingingCoupletsWrapper className="wrapper">
      <div className="couplet">
        <img src="/assets/images/tet-banner-sale.png" className="bordered-image" alt=""/>
      </div>
      <div className="couplet">
      <img src="/assets/images/tet-banner-sale.png" className="bordered-image" alt=""/>
      </div>
    </SwingingCoupletsWrapper>
  );
};

export default SwingingCouplets;
