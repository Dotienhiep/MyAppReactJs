import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { v4 as uuidv4 } from "uuid";
import "./thumbs.css";

const ThumbsGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null); // Ref cho Swiper chính

  const images = [
    {
      id: uuidv4(),
      image: "/assets/images/H2_614x212_02db70568f.png",
      title: "Title 1",
    },
    {
      id: uuidv4(),
      image: "/assets/images/H2_614x212_4892e14949.png",
      title: "Title 2",
    },
    {
      id: uuidv4(),
      image: "/assets/images/H2_614x212_6eb78b65f1.png",
      title: "Title 3",
    },
    {
      id: uuidv4(),
      image: "/assets/images/H2_614x212_e97abfb675.png",
      title: "Title 4",
    },
    {
      id: uuidv4(),
      image: "/assets/images/H2_614x212_dea948acee.png",
      title: "Title 5",
    },
    {
      id: uuidv4(),
      image: "/assets/images/H2_614x212_0d1822e46c.png",
      title: "Title 6",
    },
    {
      id: uuidv4(),
      image: "/assets/images/H2_614x212_4672088382.png",
      title: "Title 7",
    },
  ];

  const handleSlideChange = () => {
    if (thumbsSwiper && mainSwiperRef.current) {
      const activeIndex = mainSwiperRef.current.realIndex;
      // Điều chỉnh vị trí thumbnail hiển thị theo nhóm 4
      if (activeIndex >= 4) {
        thumbsSwiper.slideTo(activeIndex - 3); // Chuyển thumbnail để hiển thị các nhóm khác
      } else {
        thumbsSwiper.slideTo(0); // Hiển thị nhóm đầu tiên 1-2-3-4
      }
    }
  };

  return (
    <div>
      {/* Swiper chính */}
      <Swiper
        style={{ height: "400px" }} // Chiều cao cho gallery chính
        loop={true}
        navigation
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)} // Lưu ref cho Swiper chính
        onSlideChange={handleSlideChange} // Cập nhật thumbnail khi slide chính thay đổi
        modules={[Navigation, Thumbs]} // Bao gồm các module cần thiết
        thumbs={thumbsSwiper && { swiper: thumbsSwiper }} // Kết nối với Swiper thumbnail
      >
        {images.map((item, index) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper} // Thiết lập Swiper cho thumbnail
        loop={true}
        spaceBetween={10}
        slidesPerView={4} // Hiển thị 4 thumbnail mỗi lần
        centeredSlides={false} // Không căn giữa thumbnail active
        freeMode={true} // Cho phép di chuyển tự do
        watchSlidesProgress={true} // Theo dõi tiến trình của slide
        slideToClickedSlide={true} // Cho phép nhấp vào thumbnail và thay đổi slide chính
        modules={[Thumbs]} // Thêm module Thumbs
        style={{ marginTop: "10px" }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              style={{
                padding: "10px",
                backgroundColor: "#f0f0f0",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              {item.title} {/* Hiển thị title thay cho ảnh */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbsGallery;
