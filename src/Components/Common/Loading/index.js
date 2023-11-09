import React from "react";
import "./style.css";

const Loading = () => {
  return (
    <div>
      <div id="app">
        <div className="circle">
          <div className="square"></div>
        </div>
        <div className="loading">
          <h2>Loading...</h2>
          <div className="bar-wrapper">
            <div className="bar-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
