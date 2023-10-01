import React from "react";
import { SliderProductWrapper } from "./style";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SliderProduct3 = ({ listData }) => {
  // console.log("listSubMenu",listData);
  const image = "https://api-nodejs-backend.onrender.com/";
  //orr
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <SliderProductWrapper>
      <Carousel className="haha" breakPoints={breakPoints}>
        {listData?.phone?.map((item) => {
          return (
            <Item key={item._id}>
              <Link to={`/product/${item._id}`}>
                <div className="image">
                  <img src={image.concat(item.urlPicture)} alt="" />
                </div>
              </Link>
              <Link to={`/product/${item._id}`}>
                <div className="content">
                  <span className="title">{item.nameExt}</span>
                </div>
              </Link>
            </Item>
          );
        })}
      </Carousel>
    </SliderProductWrapper>
  );
};
export default SliderProduct3;
