import React from "react";
import { TabItemWrapper } from "./style";

const TabItem = ({ listTab, children, currentIndexActive, onChangeTab }) => {
  return (
    <TabItemWrapper>
      <div id="sale" className="list-tab">
        {listTab.map((item, index) => {
          return (
            <div
              key={index}
              className={`tab-item ${
                item.content === "Đã kết thúc"
                  ? "tab-item-ended enabled-ended"
                  : "tab-item-upcoming"
              } 
              ${currentIndexActive === index ? "active" : ""}`}
              onClick={() => onChangeTab(index)}
            >
              <div className="content-tab">
                <div className="title">{item.title}</div>
                <div className={`content ${item.content === "Đã kết thúc" ? "bg-color-ended" : "bg-color-upcoming"}`}>{item.content}</div>
              </div>
              {/* <div className="">
                <p className="button"></p>
              </div> */}
            </div>
          );
        })}
      </div>
      <div className="list-content">{children}</div>
    </TabItemWrapper>
  );
};

export default TabItem;
