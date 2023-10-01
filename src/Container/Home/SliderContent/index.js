import React from "react";
import Slider from "./Slider";
import { v4 as uuidv4 } from "uuid";
import { SliderContentWrapper } from "./style";
import { Link } from "react-router-dom";

const SliderContent = () => {
  const listData = [
    {
      id: uuidv4(),
      image: "/assets/images/slider-image1.png",
    },
    {
      id: uuidv4(),
      image: "assets/images/slider-image2.png",
    },
    {
      id: uuidv4(),
      image: "assets/images/slider-image3.png",
    },
    {
      id: uuidv4(),
      image: "assets/images/slider-image4.png",
    },
    {
      id: uuidv4(),
      image: "assets/images/slider-image5.png",
    },
    {
      id: uuidv4(),
      image: "assets/images/slider-image6.png",
    },
    {
      id: uuidv4(),
      image: "assets/images/slider-image7.png",
    },
    {
      id: uuidv4(),
      image: "assets/images/slider-image8.png",
    },
  ];
  const listTop = [
    {
      id: uuidv4(),
      image: "assets/images/botbot1.png",
    },
    {
      id: uuidv4(),
      image: "assets/images/top2.png",
    },
  ];
  const listBot = [
    {
      id: uuidv4(),
      image: "assets/images/bot1.png",
      title: "Nhận ngay vourcher 50.000 VND",
    },
    {
      id: uuidv4(),
      image: "assets/images/bot2.png",
      title: "Xiaomi 11T Pro  ưu đãi ngay 3.000.000 VND",
    },
  ];
  return (
    <SliderContentWrapper>
      <div className="content-slider-res">
        <div className="content-left">
          <Slider listData={listData} isInfinity={true} />
        </div>
        <div className="content-right">
          <div className="content-top">
            {listTop.map((item) => {
              return (
                <div key={item.id} className="">
                  <img src={item.image} alt="" />
                </div>
              );
            })}
          </div>
          <div className="content-bottom">
            <div className="content-title">
              <span className="hehe">
                <a href="#sale">Thông tin nổi bật</a>
              </span>
              <span className="hove">
                <Link to="/product">Xem tất cả</Link>
              </span>
            </div>
            {listBot.map((item) => {
              return (
                <div key={item.id} className="content-image">
                  <img src={item.image} alt="" />
                  <span className="title-img">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SliderContentWrapper>
  );
};

export default SliderContent;
