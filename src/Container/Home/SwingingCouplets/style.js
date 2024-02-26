import styled from "styled-components";
import { device } from "../../../contants";

export const SwingingCoupletsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 340px;
  width: 100%; /* Điều1 chỉnh kích thước của wrapper theo ý của bạn */
  height: auto; /* Điều chỉnh kích thước của wrapper theo ý của bạn */
  margin-bottom: 50px;
  background-color: transparent;
  z-index: 10000;
  pointer-events: none;
  cursor: pointer;
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
  }
  @media ${device.tablet} {
  }
  @media ${device.mobile} {
  }
  @media ${device.mobileL} {
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileS} {
  }
  .couplet {
    width: 100px; /* Điều chỉnh kích thước của câu đối theo ý của bạn */
    height: auto; /* Điều chỉnh kích thước của câu đối theo ý của bạn */
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    transform-origin: top;
    transition: top 0.3s ease;
    animation: ring 0.6s infinite ease-in-out alternate;
  }

  @keyframes ring {
    0% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(-5deg);
    }
  }

  .bordered-image {
    display: block;
    max-width: 100%; /* Điều chỉnh kích thước tối đa của hình ảnh */
    height: auto;
    /* border: 5px solid #000; Đặt độ dày và màu sắc cho viền */
  }
  .wrapper {
    position: relative;
  }
  .fixed {
    position: fixed;
    top: 100px;
  }
  .fixedd {
    position: fixed;
    top: 100px;
    right: 10px;
  }
`;
