import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ProductItemWrapper } from "./../style";
import { Link } from "react-router-dom";
import Memory from "./Memory";
import Price from "./Price";

const ProductItem = ({ onAdd, listData }) => {
  const [currentIndexActive, setCurrentIndexActive] = useState(0);
  const image = "https://api-nodejs-backend.onrender.com/";

  const handleChangeTab = (index) => {
    setCurrentIndexActive(index);
  };
  // const renderTabContent = () => {
  //   switch (currentIndexActive) {
  //     case 0:
  //       return (
  //         // <SliderProduct
  //         //   listData={listData}
  //         //   isInfinity={true}
  //         // />
  //         <div>
  //           <Price data={listData.listProductGroupDetail[0]} />
  //         </div>
  //       );
  //     case 1:
  //       return (
  //         <div>
  //           <Price data={listData.listProductGroupDetail[1]} />
  //         </div>
  //       );
  //     case 2:
  //       return (
  //         <div>
  //           <Price data={listData.listProductGroupDetail[2]} />
  //         </div>
  //       );
  //     case 3:
  //       return (
  //         <div>
  //           <Price data={listData.listProductGroupDetail[3]} />
  //         </div>
  //       );
  //     default:
  //       return "";
  //   }
  // };
  // console.log("listData",listData);
  return (
    listData.quantity > 0 && (
      <ProductItemWrapper>
        <div className="product-wrapper">
          <Link className="link" to={`/product/${listData._id}`}>
            <div className="image">
              <img src={image.concat(listData.urlPicture)} alt="" />
            </div>
          </Link>
          <div className="content">
            <Link className="link" to={`/product/${listData._id}`}>
              <span className="title">{listData.name}</span>
            </Link>
            {/* <Memory
            listData={listData}
            currentIndexActive={currentIndexActive}
            onChangeTab={handleChangeTab}
          >
            {renderTabContent()}
          </Memory> */}
          </div>
          <div className=""></div>
          <div className="list-btn">
            <Link to="/cart">
              <button onClick={() => onAdd(listData)} className="buy-now">
                Mua ngay
              </button>
            </Link>
            <button className="cart" onClick={() => onAdd(listData)}>
              <FontAwesomeIcon className="icon" icon={faCartPlus} />
              Giỏ hàng
            </button>
          </div>
        </div>
      </ProductItemWrapper>
    )
  );
};

export default ProductItem;
