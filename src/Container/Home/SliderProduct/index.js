import React from "react";
import { SliderProductWrapper } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const SliderProduct = () => {
  const listData = [
    {
      id: uuidv4(),
      image: "/assets/images/H2_614x212_02db70568f.png",
    },
    {
      id: uuidv4(),
      image: "/assets/images/H2_614x212_4892e14949.png",
    },
    {
      id: uuidv4(),
      image: "/assets/images/H2_614x212_6eb78b65f1.png",
    },
    {
      id: uuidv4(),
      image: "/assets/images/H2_614x212_e97abfb675.png",
    },
    {
      id: uuidv4(),
      image: "/assets/images/H2_614x212_dea948acee.png",
    },
    {
      id: uuidv4(),
      image: "/assets/images/H2_614x212_0d1822e46c.png",
    },
    {
      id: uuidv4(),
      image: "/assets/images/H2_614x212_4672088382.png",
    },
  ];

  return (
    <SliderProductWrapper>
      <Swiper
        modules={[Navigation, Autoplay]} // Thêm Autoplay vào modules
        navigation
        spaceBetween={20}
        slidesPerView={2} // Hiển thị 2 sản phẩm trên màn hình lớn
        autoplay={{
          delay: 1000, // Thay đổi hình ảnh mỗi 3 giây
          disableOnInteraction: false, // Cho phép autoplay tiếp tục ngay cả khi người dùng tương tác
         }} >
        {listData.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to="/">
              <img src={item.image} alt={item.content} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderProductWrapper>
  );
};

export default SliderProduct;
