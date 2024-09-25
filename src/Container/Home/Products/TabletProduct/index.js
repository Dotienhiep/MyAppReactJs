import React from "react";
import { TabletProductWrapper } from "../style";
import Product from "./../Product";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TabletProduct = ({ onAdd, listProduct }) => {
  return (
    <TabletProductWrapper>
      <div className="title">
        <h3 className="">Tablet thông minh</h3>
        <span className="">
          <Link to="/may-tinh-bang">Xem tất cả</Link>
        </span>
      </div>
      <div className="list-product">
        {listProduct?.ipad?.length > 1 ? (
          <Swiper
            className="haha"
            modules={[Navigation]} // Khai báo module Navigation
            spaceBetween={10}
            slidesPerGroup={1}
            navigation // Kích hoạt Navigation
            loop={false} // Tắt loop khi có ít sản phẩm
            autoplay={{ delay: 1000 }}
            speed={800} // Tốc độ chuyển slide
            breakpoints={{
              2560: {
                slidesPerView: 6,
              },
              1800: {
                slidesPerView: 5,
              },
              1440: {
                slidesPerView: 5,
              },
              1366: {
                slidesPerView: 5,
              },
              1280: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 2,
              },
              425: {
                slidesPerView: 1.5,
              },
              375: {
                slidesPerView: 1.5,
              },
              320: {
                slidesPerView: 1.5,
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
            {listProduct?.ipad?.map((item) => (
              <SwiperSlide key={item._id}>
                <Product product={item} onAdd={onAdd} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Nếu chỉ có 1 sản phẩm thì hiển thị trực tiếp không dùng Swiper
          <div className="single-product">
            {listProduct?.ipad?.map((item) => (
              <Product key={item._id} product={item} onAdd={onAdd} />
            ))}
          </div>
        )}
      </div>
    </TabletProductWrapper>
  );
};

export default TabletProduct;
