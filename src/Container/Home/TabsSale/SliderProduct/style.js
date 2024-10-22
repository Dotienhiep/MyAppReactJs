import styled from "styled-components";
// import { device } from "../../../../contants";

export const SliderProductWrapper = styled.div`
  width: 100%;

  /* Hiện nút khi hover */
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
    top: 200px; /* Vị trí nút Prev cách mép trái 20px */
  }

  /* Tùy chỉnh nút next */
  .swiper-button-next {
    right: 10px;
    top: 200px; /* Vị trí nút Next cách mép phải 20px */
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    margin-top: 20px;
    width: 100%;
    border-radius: 20px;
    background-color: #fff;
    transition: transform 0.3s ease, filter 0.3s ease;
  }
  .border-sale {
    border: 3px solid #b81d1b;
    width: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  }
  /* .swiper-slide:hover {
    transform: translateY(-5px);
    filter: brightness(90%);
  }

  .swiper-slide:hover img {
    transform: scale(1.12);
  } */

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 20px auto;
    max-width: 200px; /* Điều chỉnh kích thước tối đa của hình ảnh */
    height: 200px;
    overflow: hidden; /* Ẩn phần hình ảnh bị vượt ra khỏi khung */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease-in-out;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 60px; /* Điều chỉnh khoảng cách giữa hình ảnh và nội dung */
  }

  .content a {
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
    padding: 0;
    width: 200px;
    white-space: nowrap; /* Ngăn text quá dài xuống dòng */
    overflow: hidden; /* Ẩn phần dư thừa của văn bản */
    text-overflow: ellipsis; /* Hiển thị dấu chấm ellipsis (...) */
    font-family: "Helvetica Neue", Helvetica;
  }

  .content .title:hover {
    color: #cb1a21;
  }

  .content .title:active {
    color: #8a2be2;
  }

  a {
    text-decoration: none;
  }

  .swiper {
    margin: 0px;
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

  .sale-fire {
    background-color: #cb1a21;
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    border-radius: 15px;
    padding: 3px;
    color: white;
  }
  .sale-fire .svg-icon {
    position: absolute;
    left: 0;
    top: 0;
  }
  .sale-fire .title-sale-fire {
    font-weight: bold;
    font-size: 14px;
  }
`;
