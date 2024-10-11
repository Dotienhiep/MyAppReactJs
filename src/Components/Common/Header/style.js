import styled from "styled-components";
import { device } from "./../../../contants";
// cd1817

export const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000000;
  background-color: #ff3233;
  padding: 4px 100px;
  /* responsive */
  @media ${device.laptop} {
    padding: 0 30px 0 50px;
  }
  @media ${device.tablet} {
    padding: 0 25px 0 50px;
  }
  @media ${device.mobile} {
    padding: 0 20px 0 50px;
  }
  @media ${device.mobileL} {
    padding: 0 20px 0 40px;
  }
  @media ${device.mobileM} {
    padding: 0 20px 0 40px;
  }
  @media ${device.mobileS} {
    padding: 0 20px 0 40px;
  }
  /* Header left */
  .header-left {
    display: flex;
    color: #fff;
    flex-grow: 1;
    justify-content: flex-start;
    align-items: center;
  }
  .header-left a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    text-decoration: none;
    color: #fff;
  }
  .header-left img {
    width: 80px;
  }
  .header-left .logoo {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
  }
  .header-left .shop {
    font-size: 15px;
    font-weight: bold;
  }
  .header-left .com {
    font-size: 10px;
    font-weight: bold;
  }
  .header-left label input {
    min-width: 100%;
    height: 36px;
    border-radius: 5px 0 0 5px;
    padding-left: 10px;
    outline: none;
    border: none;
    font-size: 15px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  .input-header {
    flex-grow: 1;
    @media ${device.desktop} {
    }
    @media ${device.desktopS} {
    }
    @media ${device.desktopXM} {
    }
    @media ${device.desktopM} {
    }
    @media ${device.laptopL} {
    }
    @media ${device.laptopS} {
    }
    @media ${device.laptopM} {
    }
    @media ${device.laptopX} {
    }
    @media ${device.laptop} {
      display: none;
    }
    @media ${device.tablet} {
      display: none;
    }
    @media ${device.mobile} {
      display: none;
    }
    @media ${device.mobileL} {
      display: none;
    }
    @media ${device.mobileM} {
      display: none;
    }
    @media ${device.mobileS} {
      display: none;
    }
  }
  .btn-search {
    font-size: 20px;
    padding: 6px 20px;
    border: none;
    outline: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    @media ${device.laptop} {
      display: none;
    }
    @media ${device.tablet} {
      display: none;
    }
    @media ${device.mobile} {
      display: none;
    }
    @media ${device.mobileL} {
      display: none;
    }
    @media ${device.mobileM} {
      display: none;
    }
    @media ${device.mobileS} {
      display: none;
    }
  }
  /* Header Right */
  .header-right {
    max-width: 40%;
  }
  .header-right ul {
    display: flex;
    padding: 0;
    margin: 0;
  }
  .header-right ul li {
    position: relative;
    list-style-type: none;
    padding: 0px 7px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .header-right ul li:first-child,
  .header-right ul li:nth-child(2) {
    @media ${device.laptopM} {
      display: none;
    }
    @media ${device.laptopX} {
      display: none;
    }
    @media ${device.laptop} {
      display: none;
    }
    @media ${device.tablet} {
      display: none;
    }
    @media ${device.mobile} {
      display: none;
    }
    @media ${device.mobileL} {
      display: none;
    }
    @media ${device.mobileM} {
      display: none;
    }
    @media ${device.mobileS} {
      display: none;
    }
  }
  .header-right ul li:nth-child(3),
  .header-right ul li:last-child {
    @media ${device.laptopX} {
      .title-icon-header {
        font-size: 0.7rem;
      }
    }
  }
  .header-right ul li a {
    list-style-type: none;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .header-right ul li a .title-icon-header {
    font-size: 0.9rem;
    @media ${device.laptopS} {
      font-size: 0.8rem;
    }
    @media ${device.mobile} {
      font-size: 0.7rem;
    }
    @media ${device.mobileL} {
      font-size: 0.6rem;
    }
    @media ${device.mobileM} {
      font-size: 0.5rem;
    }
    @media ${device.mobileS} {
      font-size: 0.4rem;
    }
  }
  .cart-icon {
    text-decoration: none;
  }
  .number-total-product {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -5px;
    right: 15px;
    font-size: 7px;
    border: 1px solid #000;
    background-color: #000;
    color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  .hide {
    display: none;
  }

  .navigation-wrap .submenu-main {
    cursor: pointer;
    transition: height 0.5s ease, opacity 0.5s ease;
    height: 0; /* Ẩn submenu bằng cách đặt height về 0 */
    overflow: hidden; /* Ẩn nội dung vượt ra ngoài khi height là 0 */
    opacity: 0; /* Bắt đầu với độ mờ */
    display: block; /* Giữ submenu được render nhưng không hiện ra */
  }

  .navigation-wrap:hover .submenu-main {
    height: auto; /* Khi hover, chiều cao của submenu tự điều chỉnh */
    opacity: 1;
    display: block; /* Hiển thị submenu */
  }

  .navigation-wrap::after {
    content: "";
    position: absolute;
    top: 53px;
    left: 0;
    right: 0;
    height: 0; /* Bắt đầu với height là 0 */
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    transition: height 0.5s ease; /* Hiệu ứng chuyển đổi mượt mà cho overlay */
  }

  .navigation-wrap:hover::after {
    height: 110vh; /* Khi hover, overlay kéo dài hơn 100vh */
  }
  .navigation-icon {
    margin: 0 20px;
    cursor: pointer;
    height: auto;
    padding: 10px;
  }
  .navigation-icon svg {
    font-size: 25px;
  }
  .nav-icon_loca {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-icon_loca .icon {
    margin-right: 5px;
  }
  .nav-icon_loca .title {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }
  .submenu-main {
    display: none;
    position: absolute;
    top: 45px;
    left: 100px;
    color: black;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: calc(100% - 200px);
    z-index: 10000000; /* Đảm bảo submenu luôn hiện lên trên các thành phần khác */
  }
  .submenu_left {
    width: 100%;
    display: flex;
    border-radius: 20px;
    overflow: hidden;
  }
  .submenuList {
    border-radius: 20px;
    width: 25%;
    min-width: 25%;
    padding-top: 10px;
    background-color: #fff;
  }
  .add-submenu {
    flex-grow: 1;
    background-color: #fff;
    border-radius: 0 20px 20px 0;
    border-left: 1px solid #ccc;
    display: none;
    height: auto;
  }
  .add-submenu ul {
    list-style-type: none;
  }
  .submenu_right {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .list-type-brand {
    flex-grow: 1;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .list-type-brand-top {
    flex-grow: 0;
    height: auto;
  }
  .title-brand_list {
    font-size: 25px;
    font-weight: bold;
    margin: 20px;
  }
  .type-brand-logo {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
  }
  .type-brand-logo .list-icon-text {
    display: flex;
    padding: 6px 20px 6px 3px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  .type-brand-logo .list-icon-text .icon-image-brand {
    width: 36px;
    height: 36px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 0 5px;
  }
  .type-brand-logo .list-icon-text .icon-image-brand img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .type-brand-logo .list-icon-text .text-icon-image-brand {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
  }
  .type-brand-logo .list-icon-text .text-icon-image-brand span {
    display: block;
    font-weight: 800;
    width: 90px; /* Chiều rộng cố định là 70px */
    white-space: nowrap; /* Không xuống dòng */
    overflow: hidden; /* Ẩn phần vượt quá */
    text-overflow: ellipsis; /* Hiển thị dấu ba chấm khi văn bản vượt quá chiều rộng */
  }
  .type-brand-sub {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
  }
  .type-brand-sub .list-icon-text {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .type-brand-sub .list-icon-text .icon-image-brand {
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 0 5px;
  }
  .type-brand-sub .list-icon-text .icon-image-brand img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .type-brand-sub .list-icon-text .text-icon-image-brand {
    font-size: 13px;
    font-weight: 700;
    padding-left: 5px;
    width: 100%;
  }
  .type-brand-text {
    display: grid;
    padding: 0 20px;
    margin: 10px 0;
    grid-template-columns: repeat(
      3,
      1fr
    ); /* 3 cột, mỗi cột chiếm 1/3 chiều rộng */
    gap: 20px;
    flex-grow: 1;
    overflow-y: auto;
    max-height: 400px;
    transition: max-height 0.3s ease;
  }

  .type-brand-text .text_grid_brand {
    width: 100%;
    padding-left: 14px;
  }
  .type-brand-text .text_grid_brand .title_brand {
    font-weight: bold;
  }
  .type-brand-text .text_grid_brand ul li {
    padding: 5px 0;
  }

  .scrollable-list {
    max-height: 480px;
    overflow-y: auto;
    border-bottom: 1px solid black;
    margin: 0;
  }
  .scrollable-list {
    list-style-type: none;
  }
  .scrollable-list li {
    display: flex;
    justify-content: flex-start;
    padding: 8px 10px;
  }
  .scrollable-list li .icon-image-brand {
    width: 1.5rem;
  }
  .scrollable-list li .icon-image-brand img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .scrollable-list li .text-icon-image-brand {
    padding-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
  }
  .scrollable-list li .text-icon-image-brand a {
    color: #000;
  }
  .scrollable-list li a:hover {
    color: red;
  }
  .static-list {
    list-style-type: none;
  }
  .static-list {
    margin: 10px; /* Khoảng cách giữa 2 danh sách nếu cần */
  }
  .static-list li {
    padding: 10px 0;
  }
  .static-list li .text-icon-image-brand {
    font-weight: 500;
  }
  .static-list li .text-icon-image-brand:hover {
    font-weight: bold;
  }
  hr {
    border: none; /* Tắt đường viền mặc định */
    height: 2px; /* Chiều cao của dòng kẻ */
    background-color: #ccc; /* Màu nền cho dòng kẻ */
    margin: 10px auto; /* Khoảng cách trên và dưới dòng kẻ */
    /* Có thể thêm các thuộc tính khác nếu cần */
    width: 90%;
    pointer-events: none;
  }
  .seller {
    width: 25%;
    min-width: 25%;
    border-left: 1px solid #ccc;
    padding: 20px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .seller .title-text_seller {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .seller .product_seller {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .seller .product_seller .image_seller {
    width: 50px;
    height: 50px;
    display: block;
    margin: 10px;
  }
  .seller .product_seller .image_seller img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content_seller {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content_seller .title {
    font-weight: bold;
    padding-bottom: 20px;
    display: block;
    width: 150px; /* Chiều rộng cố định */
    white-space: nowrap; /* Không xuống dòng */
    overflow: hidden; /* Ẩn phần vượt quá */
    text-overflow: ellipsis; /* Hiển thị dấu ba chấm */
  }
  .content_seller .price {
    font-size: 16px;
    width: 100%;
    display: block;
  }

  .image_seller {
    width: 100%; /* Đảm bảo .image_seller chiếm toàn bộ chiều rộng */
    height: auto; /* Đảm bảo .image_seller chiếm toàn bộ chiều cao */
    display: flex;
    align-items: center; /* Đảm bảo hình ảnh canh giữa theo chiều dọc */
    justify-content: center; /* Đảm bảo hình ảnh canh giữa theo chiều ngang */
  }

  .image_seller img {
    border-radius: 10px;
    width: 100%; /* Chiếm hết chiều rộng của .image_seller */
    height: 100%; /* Chiếm hết chiều cao của .image_seller */
    object-fit: cover; /* Đảm bảo ảnh được cắt để lấp đầy mà không bị biến dạng */
  }
`;
