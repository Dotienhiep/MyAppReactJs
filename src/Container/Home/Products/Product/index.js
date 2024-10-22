import React from "react";
import { ProductWrapper } from "./../style";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faInbox,
  // faMedal,
  faMemory,
  faMicrochip,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

const Product = ({ onAdd, product }) => {
  console.log("product======", product);

  function formatCurrency(price) {
    // Sử dụng hàm toLocaleString() để định dạng số tiền và thêm dấu chấm phân cách
    const formattedPrice = price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formattedPrice;
  }
  // console.log("listDeetail====", product.listAttrDetailShort.slice(0, 8));
  const image = "https://api-nodejs-backend.onrender.com/";
  // const productType = localStorage.getItem("productType");
  return (
    <ProductWrapper>
      <Link
        className="link"
        to={`/${product.productType.nameAscii}/${product._id}`}
      >
        <div className="image">
          <img src={image.concat(product.urlPicture)} alt="" />
        </div>
      </Link>
      <div className="sale-percent">
        <span>Trả góp 0%</span>
      </div>
      <div className="cost">
        <span>{formatCurrency(product.price)}</span>
      </div>
      <Link
        className="link"
        to={`/${product.productType.nameAscii}/${product._id}`}
      >
        <span className="title">{product.name}</span>
      </Link>
      <div className="content">
        <div className="info">
          <div className="list-info">
            <div className="item-info cpu">
              {product.listAttrDetailShort.slice(5, 6).map((item, index) => {
                return (
                  <div className="" key={index}>
                    <FontAwesomeIcon className="icon" icon={faMicrochip} />{" "}
                    {item.value}
                  </div>
                );
              })}
            </div>
            <div className="item-info screen">
              {product.listAttrDetailShort.slice(0, 1).map((item, index) => {
                const screen = item.value.split(", ");
                return (
                  <div className="" key={index}>
                    <FontAwesomeIcon className="icon" icon={faMobile} />{" "}
                    {screen[0]}
                  </div>
                );
              })}
            </div>
            <div className="item-info ram">
              {product.listAttrDetailShort.slice(3, 4).map((item, index) => {
                const screen = item.value.split(", ");
                return (
                  <div className="" key={index}>
                    <FontAwesomeIcon className="icon" icon={faMemory} />{" "}
                    {screen[0]}
                  </div>
                );
              })}
            </div>
            <div className="item-info memmory">
              {product.listAttrDetailShort.slice(4, 5).map((item, index) => {
                const screen = item.value.split(", ");
                return (
                  <div className="" key={index}>
                    <FontAwesomeIcon className="icon" icon={faInbox} />{" "}
                    {screen[0]}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div>{product.listAttrDetailShort.value}</div> */}
      </div>
      <div className="">
        {/* <Memory
        product={product}
        currentIndexActive={currentIndexActive}
        onChangeTab={handleChangeTab}
      >
        {renderTabContent()}
      </Memory> */}
      </div>
      <div className="list-btn">
        <div className="list-btn-responsive">
          <Link to="/cart">
            <button onClick={() => onAdd(product)} className="buy-now">
              Mua ngay
            </button>
          </Link>
          <button className="cart" onClick={() => onAdd(product)}>
            <FontAwesomeIcon className="icon" icon={faCartPlus} />
            Giỏ hàng
          </button>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default Product;
