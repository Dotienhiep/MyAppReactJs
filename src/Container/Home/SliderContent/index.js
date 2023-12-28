import React from "react";
import Slider from "./Slider";
import { v4 as uuidv4 } from "uuid";
import { SliderContentWrapper } from "./style";
import { Link } from "react-router-dom";

const SliderContent = () => {
  const listData = [
    {
      id: uuidv4(),
      image: "/assets/images/slider-banner-1.png",
      content: "Galaxy A15|A25 5G mới từ 4.99 triệu",
    },
    {
      id: uuidv4(),
      image: "/assets/images/slider-banner-2.png",
      content: "Lên đời Smartphone xịn - đổi mới",
    },
    {
      id: uuidv4(),
      image: "/assets/images/slider-banner-3.png",
      content: "Iphone 15 promax giảm giá 2 triệu",
    },
    {
      id: uuidv4(),
      image: "/assets/images/slider-banner-4.png",
      content: "Deal giảm giá phụ kiện máy",
    },
    {
      id: uuidv4(),
      image: "/assets/images/slider-banner-5.png",
      content: "Realmi note 12 5G mới từ 3.99 triệu",
    },
    {
      id: uuidv4(),
      image: "/assets/images/slider-banner-6.png",
      content: "Tivi Samsung giảm từ 3.99 triệu",
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
                <div key={item.id} className="item-image">
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
                <Link to="/dien-thoai">Xem tất cả</Link>
              </span>
            </div>
            {listBot.map((item) => {
              return (
                <div key={item.id} className="content-image">
                  <img src={item.image} class="single-image" alt="" />
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
