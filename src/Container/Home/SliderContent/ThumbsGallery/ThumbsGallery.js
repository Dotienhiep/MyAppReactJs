import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./style.js";
import { ThumbsGalleryWrapper } from "./style.js";

const ThumbsGallery = ({ listData }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null); // Ref cho Swiper chính
  const [activeIndex, setActiveIndex] = useState(0); // Trạng thái để lưu index active

  useEffect(() => {
    const interval = setInterval(() => {
      if (mainSwiperRef.current) {
        const nextIndex = (activeIndex + 1) % listData.length; // Tính toán index tiếp theo
        mainSwiperRef.current.slideTo(nextIndex); // Chuyển đến slide tiếp theo
      }
    }, 3000); // Chuyển sau mỗi 3 giây

    return () => clearInterval(interval); // Dọn dẹp khi component unmount
  }, [activeIndex, listData.length]); // Bổ sung activeIndex và length vào dependency array

  const handleSlideChange = () => {
    if (thumbsSwiper && mainSwiperRef.current) {
      const newIndex = mainSwiperRef.current.realIndex;
      setActiveIndex(newIndex); // Cập nhật index active
      if (newIndex >= 5) {
        thumbsSwiper.slideTo(newIndex - 4);
      } else {
        thumbsSwiper.slideTo(0);
      }
    }
  };

  const handleThumbnailClick = (index) => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideToLoop(index); // Sử dụng slideToLoop để hoạt động chính xác với loop
      setActiveIndex(index); // Cập nhật index khi thumbnail được click
    }
  };

  return (
    <ThumbsGalleryWrapper>
      {/* Swiper chính */}
      <Swiper
        className="list-image-thumbs"
        loop={true}
        navigation
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        modules={[Navigation, Thumbs]}
        thumbs={thumbsSwiper && { swiper: thumbsSwiper }}
      >
        {listData.map((item, index) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper thumbnail */}
      <Swiper
        className="list-content-thumbs"
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        centeredSlides={false}
        freeMode={true}
        watchSlidesProgress={true}
        slideToClickedSlide={false} // Không tự động slide khi nhấn vào thumbnail
        modules={[Thumbs]}
        style={{ marginTop: "10px" }}
      >
        {listData.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="content-thumbs-item"
            onClick={() => handleThumbnailClick(index)} // Thay đổi index chính xác
            style={{
              borderBottom: activeIndex === index ? "2px solid #000" : "none", // Thêm border khi active
              fontWeight: activeIndex === index ? "bolder" : "none",
            }}
          >
            <div
              style={{
                padding: "10px",
                backgroundColor: "#f0f0f0",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              {item.content}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ThumbsGalleryWrapper>
  );
};

export default ThumbsGallery;
