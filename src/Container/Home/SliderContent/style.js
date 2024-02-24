import styled from "styled-components";
import { device } from "./../../../contants";

export const SliderContentWrapper = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: -150px 100px 100px 100px;
  padding: 5px 5px 2px;
  border-radius: 5px;
  position: relative;
  background-color: #fff;
  z-index: 1000;
  display: flex;
  @media ${device.laptop} {
    margin: -150px 50px 100px 50px;
    justify-content: center;
    align-items: center;
  }
  @media ${device.tablet} {
    margin: -150px 50px 100px 50px;
    justify-content: center;
    align-items: center;
  }
  @media ${device.mobile} {
    margin: -150px 30px 100px 30px;
  }
  @media ${device.mobileL} {
    margin: -150px 15px 100px 15px;
  }
  @media ${device.mobileM} {
    margin: -150px 15px 100px 15px;
  }
  @media ${device.mobileS} {
    margin: -150px 15px 100px 15px;
  }
  .content-slider-res {
    display: flex;
    width: 100%;
  }
  .content-left {
    flex-grow: 1;
    display: flex;
  }
  .content-right {
    min-width: 15%;
    padding-left: 20px;
    padding-right: 0px;
    @media ${device.laptopL} {
      min-width: 25%;
      padding-left: 18px;
    }
    @media ${device.laptopS} {
      min-width: 30%;
      padding-left: 18px;
    }
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
  .content-top {
    padding-bottom: 10px;
    position: relative;
  }
  .content-top .item-image {
    width: 100%;
    max-width: 400px;
  }
  .content-top .item-image img {
    width: 100%; /* Hình ảnh sẽ chiếm toàn bộ chiều rộng của div */
    height: auto; /* Giữ tỷ lệ khung hình */
    max-width: 100%; /* Đặt giá trị tối đa cho chiều rộng của hình ảnh */
    max-height: 100%; /* Đặt giá trị tối đa cho chiều cao của hình ảnh */
  }
  .content-bottom .content-title {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
    margin-right: 8px;
  }
  .content-title .hove a {
    color: #0168fa;
    text-decoration: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
  }
  .hove a:before {
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
  .content-title .hove a:hover {
    text-decoration: none;
    outline: none;
    color: #000;
  }
  .hove:hover a:before {
    transform: scale(1);
  }
  .content-image {
    display: flex;
    margin-bottom: 8px;
    overflow: hidden;
  }
  .content-image .title-img {
    padding-left: 5px;
    font-size: 15px;
    font-weight: bold;
  }
  .content-image img {
    border-radius: 5px;
    padding: 3px;
    border: 1px solid #cd1917;
    transition: transform 0.3s ease-in-out;
  }
  //content
  .hehe {
    position: relative;
    font-size: 16px;
    color: #666;
    transition: 0.5s;
  }
  .hehe a {
    text-decoration: none;
  }
  .hehe::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    transition: 0.5s;
    transform: scale(0.9);
    z-index: -1;
  }

  .hehe:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px #fff;
  }

  .hehe:hover {
    color: red;
    text-shadow: 0 0 5px red;
  }
`;
