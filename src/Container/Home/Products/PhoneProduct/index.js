import React from "react";
import { PhoneProductWrapper } from "../style";
import Product from "./../Product";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const PhoneProduct = ({ onAdd, listProduct }) => {
  console.log("hahhaaa", listProduct);
  const image = "https://api-nodejs-backend.onrender.com/";
  return (
    <PhoneProductWrapper>
      <div className="title">
        <h3 className="">Điện thoại nổi bật</h3>
        <span className="">
          <Link to="/dien-thoai">Xem tất cả</Link>
        </span>
      </div>
      <div className="list-product">
        {/* {listProduct?.phone?.map((item) => {
          return <Product key={item._id} product={item} onAdd={onAdd} />;
        })} */}
        <Swiper
          className="haha"
          modules={[Navigation]} // Khai báo module Navigation
          spaceBetween={10}
          slidesPerGroup={1} // Hiển thị 6 sản phẩm và nửa sản phẩm cuối
          navigation // Kích hoạt Navigation
          loop={false} // Bật tính năng chạy vô hạn
          autoplay={{ delay: 1000 }}
          speed={800} // Tốc độ chuyển slide
          breakpoints={{
            2560: {
              slidesPerView: 6,
            },
            1800: {
              slidesPerView: 5, // Hiển thị 6.5 sản phẩm
            },
            1440: {
              slidesPerView: 5, // Hiển thị 6.5 sản phẩm
            },
            1366: {
              slidesPerView: 5, // Hiển thị 6.5 sản phẩm
            },
            1280: {
              slidesPerView: 4, // Hiển thị 6.5 sản phẩm
            },
            1024: {
              slidesPerView: 4, // Hiển thị 6.5 sản phẩm
            },
            992: {
              slidesPerView: 3, // Hiển thị 6.5 sản phẩm
            },
            768: {
              slidesPerView: 2, // Hiển thị 6.5 sản phẩm
            },
            576: {
              slidesPerView: 2, // Hiển thị 6.5 sản phẩm
            },
            425: {
              slidesPerView: 1.5, // Hiển thị 6.5 sản phẩm
            },
            375: {
              slidesPerView: 1.5, // Hiển thị 6.5 sản phẩm
            },
            320: {
              slidesPerView: 1.5, // Hiển thị 6.5 sản phẩm
            },
          }}
          onSlideChange={() => {
            document.querySelectorAll(".slider-item").forEach((item) => {
              const rect = item.getBoundingClientRect();
              const windowWidth = window.innerWidth;

              // Kiểm tra nếu sản phẩm nằm ngoài 50% view thì làm mờ
              if (
                rect.right < windowWidth * 0.75 &&
                rect.right > windowWidth * 0.25
              ) {
                item.classList.add("slider-item-half-visible");
              } else {
                item.classList.remove("slider-item-half-visible");
              }
            });
          }}
        >
          {listProduct?.phone?.map((item) => (
            <SwiperSlide key={item._id}>
              <Product product={item} onAdd={onAdd} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </PhoneProductWrapper>
  );
};

export default PhoneProduct;
