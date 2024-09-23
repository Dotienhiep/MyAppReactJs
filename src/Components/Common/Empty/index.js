import React from "react";
import Navigation from "../../../Container/Home/Navigation";
import Copyright from "../Copyright";
import Footer from "../Footer";
import Header from "../Header";
import { EmptyWrapper } from "./style";
import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <EmptyWrapper>
      <Header />
      <Navigation />
      <div className="empty-container">
        <div className="no-product">
          <img src="/assets/images/empty.png" alt="" />
          <p className="">Sản phẩm chưa được mở bán !!!</p>
          <Link to="/">
            <button className="">Quay lại trang chủ</button>
          </Link>
        </div>
      </div>
      <Footer />
      <Copyright />
    </EmptyWrapper>
  );
};

export default Empty;
