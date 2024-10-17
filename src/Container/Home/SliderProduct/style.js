import styled from "styled-components";
import { device } from "../../../contants";

export const SliderProductWrapper = styled.div`
  max-width: 100%; /* Đặt chiều rộng tối đa cho container */
  padding: 0 100px; /* Khoảng cách 100px ở 2 bên */
  margin: 0 auto; /* Căn giữa phần tử */
  @media ${device.laptop} {
    padding: 0 50px;
  }
  @media ${device.tablet} {
    padding: 0 50px;
  }
  @media ${device.mobile} {
    padding: 0 30px;
  }
  @media ${device.mobileL} {
    padding: 0 15px;
  }
  @media ${device.mobileM} {
    padding: 0 15px;
  }
  @media ${device.mobileS} {
    padding: 0 15px;
  }
  &:hover .swiper-button-next,
  &:hover .swiper-button-prev {
    opacity: 1; /* Hiện nút */
  }
  &:hover .swiper-button-disabled {
    display: none;
  }
  /* Ẩn nút khi không hover */
  .swiper-button-next,
  .swiper-button-prev {
    position: absolute; /* Đặt các nút ở vị trí tuyệt đối */
    top: 50%; /* Đặt nút ở giữa theo chiều dọc */
    z-index: 10; /* Đảm bảo nút nổi lên trên slide */
    color: white; /* Tùy chỉnh màu icon */
    border-radius: 50%; /* Nếu bạn muốn nút tròn */
    transform: translateY(-50%); /* Đưa nút về giữa theo chiều dọc */
    opacity: 0; /* Ẩn nút ban đầu */
    transition: transform 0.3s ease, opacity 0.3s ease; /* Hiệu ứng chuyển tiếp */
  }

  /* Tùy chỉnh nút prev */
  .swiper-button-prev {
    left: 10px;
    top: 60%; /* Vị trí nút Prev cách mép trái 20px */
  }

  /* Tùy chỉnh nút next */
  .swiper-button-next {
    right: 10px;
    top: 60%; /* Vị trí nút Next cách mép phải 20px */
  }

  /* Khi hover vào phần chứa Swiper, hiển thị nút với hiệu ứng mượt mà */
  &:hover .swiper-button-next {
    transform: translateY(-50%) translateX(0); /* Đưa nút Next về vị trí ban đầu */
  }

  &:hover .swiper-button-prev {
    transform: translateY(-50%) translateX(0); /* Đưa nút Prev về vị trí ban đầu */
  }

  /* Tạo hiệu ứng trượt từ trái sang phải hoặc từ phải sang trái */
  &:hover .swiper-button-next {
    transform: translateY(-50%) translateX(-20px); /* Trượt vào từ bên trái */
  }

  &:hover .swiper-button-prev {
    transform: translateY(-50%) translateX(20px); /* Trượt vào từ bên phải */
  }

  .swiper-slide {
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: 0.5s ease-in-out;
    @media ${device.tablet} {
      width: 100% !important;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: opacity 0.5s ease-in-out;
  }

  .swiper {
    margin: 0px;
    border-radius: 20px;
  }

  .swiper-button-prev::after {
    font-size: 15px;
    font-weight: bold;
    color: #000;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    padding: 10px 13px;
    background-color: white;
    border-radius: 50%; /* Màu của biểu tượng */
  }

  .swiper-button-next::after {
    font-size: 15px;
    font-weight: bold;
    color: #000;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    padding: 10px 13px;
    background-color: white;
    border-radius: 50%; /* Màu của biểu tượng */
  }
`;
