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
  .banner-product img {
    border-radius: 10px;
    min-width: 100%;
    height: 100%;
  }
`;

export const PhoneProductWrapper = styled.div`
  margin: 0 100px;
  border-radius: 5px;
  margin-bottom: 40px;
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
    justify-content: space-between;
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
    justify-content: space-between;
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
    justify-content: space-between;
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
  height: 100%;
  width: calc((100% - 45px) / 6);
  margin-top: 20px;
  justify-content: center;
  flex-direction: column;
  padding: 0 15px;
  border-radius: 6px;
  background-image: url("/assets/images/boder-product1.png");
  background-size: 95% auto;
  background-repeat: no-repeat;
  background-position: center top 5px;
  transition: transform 0.3s ease, filter 0.3s ease;
  @media ${device.desktopS} {
    width: calc((100% - 45px) / 5);
  }
  @media ${device.desktopM} {
    width: calc((100% - 45px) / 4);
  }
  @media ${device.laptopL} {
    width: calc((100% - 45px) / 4);
  }
  @media ${device.laptopS} {
    width: calc((100% - 45px) / 3);
  }
  @media ${device.laptopM} {
    width: calc((100% - 45px) / 3);
  }
  @media ${device.laptopX} {
    width: calc((100% - 45px) / 2);
  }
  @media ${device.laptop} {
    width: calc((100% - 45px) / 2);
  }
  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.mobile} {
    width: 100%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
  @media ${device.mobileM} {
    width: 100%;
  }
  @media ${device.mobileS} {
    width: 100%;
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
    filter: brightness(100%);
    transform: scale(1.02);
  }
  &:hover .list-btn {
    display: block;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px auto;
    @media ${device.desktopS} {
      img {
        width: 190px;
        height: 190px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.desktopA} {
      img {
        width: 160px;
        height: 160px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.desktopXS} {
      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.desktopXM} {
      .image {
        margin: 30px auto;
      }
      img {
        width: 140px;
        height: 140px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.desktopM} {
      .image {
        margin: 30px auto;
      }
      img {
        width: 160px;
        height: 160px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.laptopL} {
      img {
        width: 140px;
        height: 140px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.laptopS} {
      img {
        width: 190px;
        height: 190px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.laptopM} {
      img {
        width: 140px;
        height: 140px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.laptopX} {
      img {
        width: 210px;
        height: 210px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.laptop} {
      & {
        margin: 70px auto;
      }
      img {
        width: 175px;
        height: 175px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.tablet} {
      & {
        margin: 95px auto;
      }
      img {
        width: 265px;
        height: 265px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.mobile} {
      img {
        width: 180px;
        height: 180px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.mobileL} {
      img {
        width: 140px;
        height: 140px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.mobileM} {
      img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.mobileS} {
      & {
        margin: 45px auto;
      }
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
  }
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
  .content {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #f8f9fa;
  }
  .title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
    padding: 0;
    width: 100%;
    white-space: nowrap; /* Ngăn text quá dài xuống dòng */
    overflow: hidden; /* Ẩn phần dư thừa của văn bản */
    text-overflow: ellipsis; /* Hiển thị dấu chấm ellipsis (...) */ /* Độ rộng của phần tử chứa văn bản */
    font-family: "Helvetica Neue", Helvetica;
  }
  .title:hover {
    color: #cb1a21;
  }
  .title:active {
    color: #8a2be2;
  }
  .cost {
    margin: 20px 0;
    border-radius: 30px;
    font-weight: bold;
  }
  .cost span {
    background-color: #cb1a21;
    color: #fff;
    padding: 6px 10px;
    border-radius: 30px;
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
    margin: 20px 0;
  }
  .list-btn-responsive {
    display: flex;
    justify-content: space-between;
  }
  .list-btn button {
    padding: 5px 8px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-weight: bold;
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
