import React,{useState,useEffect} from "react";
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
import ScrollToTop from "react-scroll-to-top";
import SwingingCouplets from "../../Container/Home/SwingingCouplets"

const Home = ({ onAdd }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSliderContent, setShowSliderContent] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showTabsSale, setShowTabsSale] = useState(false);
  const [showLaptopGaming, setShowLaptopGaming] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showFilterAccessory, setShowFilterAccessory] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showCopyright, setShowCopyright] = useState(false);
  useEffect(() => {
    const bannerTimeout = setTimeout(() => {
      setShowBanner(true);
    }, 1000); // Hiển thị Header sau 2s

    const sliderContentTimeout = setTimeout(() => {
      setShowSliderContent(true);
    }, 2000); 
    const filterTimeout = setTimeout(() => {
      setShowFilter(true);
    }, 3000); 
    const tabsSaleTimeout = setTimeout(() => {
      setShowTabsSale(true);
    }, 4000); 
    const laptopGamingTimeout = setTimeout(() => {
      setShowLaptopGaming(true);
    }, 5000); 
    const productsTimeout = setTimeout(() => {
      setShowProducts(true);
    }, 6000);
    const filterAccessoryTimeout = setTimeout(() => {
      setShowFilterAccessory(true);
    }, 7000); 
    const footerTimeout = setTimeout(() => {
      setShowFooter(true);
    }, 8000); 
    const copyrightTimeout = setTimeout(() => {
      setShowCopyright(true);
    }, 9000); 
    // Xóa các timeouts khi unmount component để tránh memory leak
    return () => {
      clearTimeout(bannerTimeout);
      clearTimeout(sliderContentTimeout);
      clearTimeout(filterTimeout);
      clearTimeout(tabsSaleTimeout);
      clearTimeout(laptopGamingTimeout);
      clearTimeout(productsTimeout);
      clearTimeout(filterAccessoryTimeout);
      clearTimeout(footerTimeout);
      clearTimeout(copyrightTimeout);
      // Xóa timeouts của các component khác nếu có
    };
  }, []); // Chạy 1 lần

  return (
    
    <HomeWrapper>
      <ScrollToTop smooth color="#6f00ff" />
      <Header />
      <Navigation />
      {showBanner && <Banner />}
      {showSliderContent && <SliderContent />}
      <SwingingCouplets/>
      {showFilter && <Filter />}
      {showTabsSale && <TabsSale />}
      {showLaptopGaming && <LaptopGaming />}
      {showProducts && <Products onAdd={onAdd} />}
      {showFilterAccessory && <FilterAccessory />}
      {showFooter && <Footer />}
      {showCopyright && <Copyright />}
    </HomeWrapper>
  );
};

export default Home;
