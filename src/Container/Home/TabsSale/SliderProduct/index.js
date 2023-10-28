import React from "react";
import { SliderProductWrapper } from "./style";
import Item from "./Item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Carousel from "react-elastic-carousel";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SliderProduct = ({ listData }) => {
  // console.log("listSubMenu",listData);
  const image = "https://api-nodejs-backend.onrender.com/";
  //orr
  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 2 },
  //   { width: 768, itemsToShow: 3 },
  //   { width: 1200, itemsToShow: 4 },
  // ];
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 2132,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 2105,
        settings: {
          slidesToShow: 5, //2095
        },
      },
      {
        breakpoint: 1756,
        settings: {
          slidesToShow: 4, //dupwso 1756 show 4
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1086,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <SliderProductWrapper>
      <Slider className="haha" {...settings}>
        {listData?.laptop?.map((item) => {
          return (
            <Item key={item._id}>
              <Link to={`/product/${item._id}`}>
                <div className="image">
                  <img src={image.concat(item.urlPicture)} alt="" />
                </div>
              </Link>
              <div className="content">
                <Link to={`/product/${item._id}`}>
                  <span className="title">{item.nameExt}</span>
                </Link>
              </div>
            </Item>
          );
        })}
      </Slider>
    </SliderProductWrapper>
  );
};
export default SliderProduct;
