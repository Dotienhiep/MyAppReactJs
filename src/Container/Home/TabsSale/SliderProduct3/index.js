import React from "react";
import { SliderProductWrapper } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Đường dẫn chính xác cho Navigation
import "swiper/css";
import "swiper/css/navigation";

const SliderProduct = ({ listData }) => {
  const image = "https://api-nodejs-backend.onrender.com/";

  return (
    <SliderProductWrapper>
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
        {listData?.laptop?.map((item) => (
          <SwiperSlide key={item._id} className="slider-item">
            <div className="border-sale">
              <Link to={`/${item.productType.nameAscii}/${item._id}`}>
                <div className="image">
                  <img src={image.concat(item.urlPicture)} alt="" />
                </div>
              </Link>
              <div className="content">
                <Link to={`/${item.productType.nameAscii}/${item._id}`}>
                  <span className="title">{item.nameExt}</span>
                </Link>
              </div>
            </div>
            <div className="sale-fire">
              <div className="svg-icon">
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6934 22.9993C1.22731 22.9109 -0.806229 14.7728 5.03195 6.27996C5.03195 6.27996 5.8232 7.16486 6.18191 7.96139C6.18191 7.96139 7.95038 1.85682 10.7818 0C10.7818 0 13.2584 5.13 13.7886 7.60664C14.0789 6.87007 14.4319 6.15974 14.8436 5.48343C14.8436 5.48343 24.7673 23.1298 10.6934 22.9993Z"
                    fill="#EF4F34"
                  />
                  <path
                    d="M10.1657 21.4065C2.29267 21.4065 2.38498 14.33 5.0357 9.73012C5.49181 10.033 5.88278 10.424 6.18567 10.8801C6.18567 10.8801 8.39724 4.51176 10.0773 3.27344C10.0773 3.27344 12.554 8.05001 13.2622 10.1732C13.2622 10.1732 14.1457 8.84523 14.6772 8.40344C14.6759 8.40212 22.1058 21.4065 10.1657 21.4065Z"
                    fill="#F68C22"
                  />
                  <path
                    d="M10.1421 20.0797C4.06255 20.0797 5.27845 14.5672 5.92201 13.0269C5.92201 13.0269 6.73173 13.4331 7.05615 14.0819C7.05615 14.0819 7.94895 9.38053 9.97458 7.75977C9.97458 7.75977 12.4064 11.6501 12.893 13.1904C12.893 13.1904 13.7845 12.3794 14.2711 12.1354C14.2764 12.1354 17.7619 20.0797 10.1421 20.0797Z"
                    fill="#FFD935"
                  />
                  <path
                    d="M10.1718 19.1066C6.4793 19.1066 7.22176 15.7622 7.61475 14.8285C7.61475 14.8285 8.10665 15.0738 8.30315 15.4668C8.30315 15.4668 8.84384 12.6156 10.0743 11.6318C10.0743 11.6318 11.5486 13.9924 11.844 14.9288C11.844 14.9288 12.3847 14.4369 12.6801 14.2892C12.6801 14.2865 14.7941 19.1066 10.1718 19.1066Z"
                    fill="#FFF697"
                  />
                </svg>
              </div>
              <div className="title-sale-fire">
                <p>Đã bán 0/7 suất</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderProductWrapper>
  );
};

export default SliderProduct;
