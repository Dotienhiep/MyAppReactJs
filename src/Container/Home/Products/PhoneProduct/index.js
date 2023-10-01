import React from "react";
import { PhoneProductWrapper } from "../style";
import Product from "./../Product";
import { Link } from "react-router-dom";

const PhoneProduct = ({onAdd, listProduct }) => {
  return (
    <PhoneProductWrapper>
      <div className="title">
        <h3 className="">Điện thoại nổi bật</h3>
        <span className="">
          <Link to="/product">Xem tất cả</Link>
        </span>
      </div>
      <div className="list-product">
        {listProduct?.phone?.map((item) => {
          return <Product key={item._id} product={item} onAdd={onAdd}/>;
        })}
      </div>
    </PhoneProductWrapper>
  );
};

export default PhoneProduct;
