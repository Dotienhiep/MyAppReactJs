import React from "react";
import Header from "../../Components/Common/Header";
import Banner from "./Banner";
import Navigation from "./Navigation";
import SliderContent from "./SliderContent";
import Filter from "./Filter";
import TabsSale from "./TabsSale";
import LaptopGaming from "./LaptopGaming";
import Products from "./Products";
import FilterAccessory from "./FilterAccessory";
import Footer from "./../../Components/Common/Footer";
import Copyright from "./../../Components/Common/Copyright";
import { HomeWrapper } from "./style";

const Home = ({onAdd}) => {
  return (
    <HomeWrapper>
      <Header />
      <Navigation />
      <Banner />
      <SliderContent />
      <Filter />
      <TabsSale />
      <LaptopGaming />
      <Products onAdd={onAdd}/>
      <FilterAccessory />
      <Footer />
      <Copyright />
    </HomeWrapper>
  );
};

export default Home;
