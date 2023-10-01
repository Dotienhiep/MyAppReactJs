import styled from "styled-components";
import { device } from "./../../../contants";

export const SliderContentWrapper = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: -150px 100px 100px 100px;
  padding: 5px;
  border-radius: 5px;
  position: relative;
  background-color: #fff;
  z-index: 10000;
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
    padding-left: 38px;
    padding-right: 0px;
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
  }
  .content-bottom .content-title {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
    margin-right: 25px;
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
  }
  .content-image .title-img {
    padding-left: 5px;
    font-size: 15px;
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
