import React, { useEffect } from "react";
import LaptopProduct from "./LaptopProduct";
import PhoneProduct from "./PhoneProduct";
import { ProductsWrapper } from "./style";
import TabletProduct from "./TabletProduct";
// import { getListProduct } from "./../../../services";
// import Loading from './../../../Components/Common/Loading';
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading, selectListProduct } from "./../selectors";
import { getListProductHome } from "./../actions";
import Loading from "../../../Components/Common/Loading";

const Products = ({ onAdd }) => {
  useEffect(() => {
    dispatch(getListProductHome(listProduct));
  }, []);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const listProduct = useSelector(selectListProduct);
  // console.log("ListProductHome", listProduct);
  if (isLoading) return <Loading />;
  if (listProduct.length) return <h1>empty....</h1>;
  return (
    <ProductsWrapper>
      <div className="banner-product">
        <img src="/assets/images/Banner-dienthoai.png" alt="" />
      </div>
      <PhoneProduct listProduct={listProduct} onAdd={onAdd}></PhoneProduct>
      <div className="banner-product">
        <img src="/assets/images/Banner-laptop.png" alt="" />
      </div>
      <LaptopProduct listProduct={listProduct} onAdd={onAdd}></LaptopProduct>
      <div className="banner-product">
        <img src="/assets/images/Banner-tablet.png" alt="" />
      </div>
      <TabletProduct listProduct={listProduct} onAdd={onAdd}></TabletProduct>
    </ProductsWrapper>
  );
};

export default Products;
