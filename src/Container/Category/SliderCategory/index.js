import React from "react";
import Slider from "./Slider";
import { v4 as uuidv4 } from "uuid";
import { SliderContentWrapper } from "./style";
import { Link } from "react-router-dom";

const SliderCategory = () => {
  const listData = [
    {
      id: uuidv4(),
      image: "assets/images/slider1.png",
    },
    {
      id: uuidv4(),
      image: "assets/images/slider2.png",
    },
    {
      id: uuidv4(),
      image: "assets/images/slider3.png",
    },
    {
      id: uuidv4(),
      image: "assets/images/slider4.png",
    },
    {
      id: uuidv4(),
      image: "assets/images/slider5.png",
    },
    {
      id: uuidv4(),
      image: "assets/images/slider6.png",
    },
    {
      id: uuidv4(),
      image: "assets/images/slider7.png",
    },
    {
      id: uuidv4(),
      image: "assets/images/slider8.png",
    },
    {
      id: uuidv4(),
      image: "assets/images/slider9.png",
    },
  ];
  return (
    <SliderContentWrapper>
      <div className="wrapper">
        <div className="content-left">
          <Slider listData={listData} isInfinity={true} />
        </div>
      </div>
    </SliderContentWrapper>
  );
};

export default SliderCategory;
