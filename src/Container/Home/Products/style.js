import styled from "styled-components";
import { device } from "./../../../contants";

export const ProductsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  .banner-product {
    display: flex;
    justify-content: center;
    padding: 20px 100px;
    max-width: 100%;
    height: auto;
    @media ${device.laptop} {
      padding: 20px 50px;
    }
    @media ${device.tablet} {
      padding: 10px 50px;
    }
    @media ${device.mobile} {
      padding: 7px 30px;
    }
    @media ${device.mobileL} {
      padding: 5px 15px;
    }
    @media ${device.mobileM} {
      padding: 5px 15px;
    }
    @media ${device.mobileS} {
      padding: 5px 15px;
    }
  }
  &:hover .swiper-button-next,
  &:hover .swiper-button-prev {
    opacity: 1; /* Hiện nút */
  }
  &:hover .swiper-button-disabled {
    display: none;
  }
  .swiper-slide {
  }
  .swiper-slide img {
    width: 150px !important;
    height: 150px;
    object-fit: cover;
  }
  .swiper {
    margin: 0;
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
  .swiper-button-prev::after {
    font-size: 10px;
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
  .banner-product img {
    border-radius: 10px;
    min-width: 100%;
    height: 100%;
  }
`;

export const PhoneProductWrapper = styled.div`
  margin: 0 100px 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  @media ${device.laptop} {
    margin: 0 50px;
  }
  @media ${device.tablet} {
    margin: 0 50px;
  }
  @media ${device.mobile} {
    margin: 0 30px;
  }
  @media ${device.mobileL} {
    margin: 0 15px;
  }
  @media ${device.mobileM} {
    margin: 0 15px;
  }
  @media ${device.mobileS} {
    margin: 0 15px;
  }
  .list-product {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; /* Đảm bảo các phần tử bắt đầu từ bên trái */
    align-items: flex-start;
    gap: 9px;
    padding: 10px;
  }
  .title {
    margin: 10px 15px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title h3 {
    font-size: 26px;
    font-weight: bold;
    margin-left: 15px;
    @media ${device.laptop} {
      font-size: 20px;
    }
    @media ${device.tablet} {
      font-size: 20px;
    }
    @media ${device.mobile} {
      font-size: 16px;
    }
    @media ${device.mobileL} {
      font-size: 16px;
    }
    @media ${device.mobileM} {
      font-size: 16px;
    }
    @media ${device.mobileS} {
      font-size: 16px;
    }
  }
  .title span a {
    color: #0168fa;
    text-decoration: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
  }
  .title span a:before {
    content: " ";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: scale(0);
    transition: transform 0.5s ease;
  }
  .title span a:hover {
    text-decoration: none;
    outline: none;
    color: #000;
  }
  .title span a:hover:before {
    transform: scale(1);
  }
  a {
    text-decoration: none;
  }
`;
export const LaptopProductWrapper = styled.div`
  margin: 0 100px 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  @media ${device.laptop} {
    margin: 0 50px;
  }
  @media ${device.tablet} {
    margin: 0 50px;
  }
  @media ${device.mobile} {
    margin: 0 30px;
  }
  @media ${device.mobileL} {
    margin: 0 15px;
  }
  @media ${device.mobileM} {
    margin: 0 15px;
  }
  @media ${device.mobileS} {
    margin: 0 15px;
  }
  .list-product {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; /* Đảm bảo các phần tử bắt đầu từ bên trái */
    align-items: flex-start;
    gap: 9px;
    padding: 10px;
  }
  .title {
    margin: 10px 15px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title h3 {
    font-size: 26px;
    font-weight: bold;
    margin-left: 15px;
    @media ${device.laptop} {
      font-size: 20px;
    }
    @media ${device.tablet} {
      font-size: 20px;
    }
    @media ${device.mobile} {
      font-size: 16px;
    }
    @media ${device.mobileL} {
      font-size: 16px;
    }
    @media ${device.mobileM} {
      font-size: 16px;
    }
    @media ${device.mobileS} {
      font-size: 16px;
    }
  }
  .title span a {
    color: #0168fa;
    text-decoration: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
  }
  .title span a:before {
    content: " ";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: scale(0);
    transition: transform 0.5s ease;
  }
  .title span a:hover {
    text-decoration: none;
    outline: none;
    color: #000;
  }
  .title span a:hover:before {
    transform: scale(1);
  }
  a {
    text-decoration: none;
  }
`;
export const TabletProductWrapper = styled.div`
  margin: 0 100px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  @media ${device.laptop} {
    margin: 0 50px;
  }
  @media ${device.tablet} {
    margin: 0 50px;
  }
  @media ${device.mobile} {
    margin: 0 30px;
  }
  @media ${device.mobileL} {
    margin: 0 15px;
  }
  @media ${device.mobileM} {
    margin: 0 15px;
  }
  @media ${device.mobileS} {
    margin: 0 15px;
  }
  .list-product {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; /* Đảm bảo các phần tử bắt đầu từ bên trái */
    align-items: flex-start;
    gap: 9px;
    margin: 10px;
  }
  .title {
    margin: 10px 15px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title h3 {
    font-size: 26px;
    font-weight: bold;
    margin-left: 15px;
    @media ${device.laptop} {
      font-size: 20px;
    }
    @media ${device.tablet} {
      font-size: 20px;
    }
    @media ${device.mobile} {
      font-size: 16px;
    }
    @media ${device.mobileL} {
      font-size: 16px;
    }
    @media ${device.mobileM} {
      font-size: 16px;
    }
    @media ${device.mobileS} {
      font-size: 16px;
    }
  }
  .title span a {
    color: #0168fa;
    text-decoration: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
  }
  .title span a:before {
    content: " ";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: scale(0);
    transition: transform 0.5s ease;
  }
  .title span a:hover {
    text-decoration: none;
    outline: none;
    color: #000;
  }
  .title span a:hover:before {
    transform: scale(1);
  }
  a {
    text-decoration: none;
  }
`;
export const ProductWrapper = styled.div`
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
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    /* transform: translateY(-1px);
    filter: brightness(80%);
    transform: scale(1.01); */
  }
  &:hover .list-btn {
    display: block;
  }
  & a:first-child {
    display: flex;
    justify-content: center;
  }
  &:hover .swiper-button-next,
  &:hover .swiper-button-prev {
    opacity: 1; /* Hiện nút */
  }
  &:hover .swiper-button-disabled {
    display: none;
  }
  .swiper {
    margin: 0;
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
  .swiper-button-prev::after {
    font-size: 10px;
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
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
  }
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
  .sale-percent {
    width: 100%;
    margin-bottom: 10px;
    padding-left: 10px;
  }
  .sale-percent span {
    background-color: #d3d3d3;
    color: #303030;
    padding: 5px;
    font-size: 13px;
    border-radius: 20px;
  }
  & a:nth-child(4) {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    padding-left: 10px;
    color: #000;
    width: 100%;
    display: -webkit-box; /* Hỗ trợ cho line-clamp */
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* Giới hạn tối đa 2 dòng */
    overflow: hidden;
    white-space: normal; /* Cho phép nội dung xuống dòng */
    text-overflow: ellipsis;
  }
  .title:hover {
    color: #cb1a21;
  }
  .title:active {
    color: #8a2be2;
  }
  & .cost {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 10px;
  }
  .cost span {
    color: #000;
    padding: 6px 0px;
    font-weight: bold;
    font-size: 20px;
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    padding-left: 10px;
  }
  .content .info {
    display: flex;
    flex-wrap: wrap;
  }
  .content .info {
    padding: 10px 0px 0px;
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: #000;
  }
  .list-btn {
    display: none;
    width: 100%;
  }
  .list-btn-responsive {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 5px;
  }
  .list-btn button {
    padding: 5px 8px;
    font-size: 15px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-weight: bold;
    @media ${device.mobile} {
      padding: 3px 5px;
      font-size: 12px;
    }
    @media ${device.mobileL} {
      padding: 3px 5px;
      font-size: 12px;
    }
    @media ${device.mobileM} {
      padding: 3px 5px;
      font-size: 12px;
    }
    @media ${device.mobileS} {
      padding: 3px 5px;
      font-size: 12px;
    }
  }
  .buy-now {
    margin-right: 30px;
    background-color: #cb1a21;
    cursor: pointer;
    color: #fff;
    transition: opacity 0.25s ease-in-out;
  }
  .buy-now:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  .cart {
    background-color: #00bfff;
    cursor: pointer;
    transition: opacity 0.25s ease-in-out;
  }
  .cart:hover {
    opacity: 0.8;
  }
  .cart .icon {
    margin-right: 10px;
  }
  .content a {
    text-decoration: none;
  }
  .list-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .item-info {
    padding-bottom: 10px;
  }
  .list-info .cpu {
    padding-right: 15px;
  }
  .list-info .screen {
    padding-right: 15px;
  }
  .list-info .ram {
    padding-right: 15px;
  }
  .list-info .memory {
    padding-right: 15px;
  }
  .item-info svg {
    color: #a9a9a9;
  }
`;
