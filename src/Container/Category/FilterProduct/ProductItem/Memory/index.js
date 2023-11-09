import React from "react";
import { MemoryWrapper } from "./style";

const Memory = ({ listData, children, currentIndexActive, onChangeTab }) => {
  // console.log("listTabMemoryProductItem", listData);
  return (
    <MemoryWrapper>
      <ul className="list-storage">
        {listData.listProductGroupDetail.map((item, index) => {
          return (
            <li
              key={index}
              className={`storage-item ${
                currentIndexActive === index ? "active" : ""
              }`}
              onClick={() => onChangeTab(index)}
            >
              <p className="title-storage">{item.storage}</p>
            </li>
          );
        })}
      </ul>
      <div className="list-content">{children}</div>
    </MemoryWrapper>
  );
};

export default Memory;
