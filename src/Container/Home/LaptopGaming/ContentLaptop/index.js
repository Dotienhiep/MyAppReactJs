import React from "react";
import { ContentLapTopWrapper } from "./../style";

const ContentLaptop = ({ listProduct }) => {
  return (
    <ContentLapTopWrapper>
      <div className="image">
        <img src="/assets/images/bg-center.png" alt="" />
      </div>
      <div className="list-product">
        {listProduct.map((item) => {
          return (
            <div key={item.id} className="product-item">
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <div className="title">{item.title}</div>
              <div className="content">{item.content}</div>
            </div>
          );
        })}
      </div>
      <div className="sale-laptop">
        <img src="/assets/images/desk-sub-text.png" alt="" />
      </div>
    </ContentLapTopWrapper>
  );
};

export default ContentLaptop;
