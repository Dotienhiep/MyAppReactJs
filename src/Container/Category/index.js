import React from "react";
import { CategoryWrapper } from "./style";
import Header from "./../../Components/Common/Header";
import Footer from "./../../Components/Common/Footer";
import Copyright from "./../../Components/Common/Copyright";
import SliderCategory from "./SliderCategory";
import FilterProduct from "./FilterProduct";
import DealNav from "../../Components/Common/DealNav";

const Category = ({ onAdd, cartItems }) => {
  // console.log("cartCatee",cartItems);
  return (
    <CategoryWrapper>
      <Header cartItems={cartItems} />
      <DealNav />
      <SliderCategory />
      <FilterProduct cartItems={cartItems} onAdd={onAdd} />
      <Footer />
      <Copyright />
    </CategoryWrapper>
  );
};

export default Category;
