import React from "react";
import { CategoryWrapper } from "./style";
import Header from "./../../Components/Common/Header";
import Navigation from "./../Home/Navigation";
import Footer from "./../../Components/Common/Footer";
import Copyright from "./../../Components/Common/Copyright";
import SliderCategory from "./SliderCategory";
import FilterProduct from "./FilterProduct";

const Category = ({ onAdd, cartItems }) => {
  // console.log("cartCatee",cartItems);
  return (
    <CategoryWrapper>
      <Header cartItems={cartItems} />
      <Navigation />
      <SliderCategory />
      <FilterProduct cartItems={cartItems} onAdd={onAdd} />
      <Footer />
      <Copyright />
    </CategoryWrapper>
  );
};

export default Category;
