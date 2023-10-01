import React from "react";
import { LaptopProductWrapper } from "../style";
import Product from "./../Product";
import { Link } from "react-router-dom";

const LaptopProduct = ({onAdd, listProduct }) => {
  return (
    <LaptopProductWrapper>
      <div className="title">
        <h3 className="">Laptop bán chạy</h3>
        <span className="">
          <Link to="/product">Xem tất cả</Link>
        </span>
      </div>
      <div className="list-product">
        {listProduct?.laptop?.map((item) => {
          return <Product key={item._id} product={item} onAdd={onAdd} />;
        })}
      </div>
    </LaptopProductWrapper>
  );
};

export default LaptopProduct;
