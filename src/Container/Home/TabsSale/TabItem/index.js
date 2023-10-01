import React from "react";
import { TabItemWrapper } from "./style";

const TabItem = ({ listTab, children, currentIndexActive, onChangeTab }) => {
  return (
    <TabItemWrapper>
      <ul id="sale" className="list-tab">
        {listTab.map((item, index) => {
          return (
            <li
              key={index}
              className={`tab-item ${
                currentIndexActive === index ? "active" : ""
              }`}
              onClick={() => onChangeTab(index)}
            >
              <p className="title">{item.title}</p>
              <p className="content">{item.content}</p>
              <div className="">
                <p className="button"></p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="list-content">{children}</div>
    </TabItemWrapper>
  );
};

export default TabItem;
