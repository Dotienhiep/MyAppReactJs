import styled from "styled-components";
import { device } from "./../../../../contants";

export const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  @media ${device.laptop} {
    width: 100%;
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
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: transform 0.5s ease-in-out; /* Thêm hiệu ứng chuyển đổi mượt mà */
    will-change: transform; /* Tối ưu hóa hiệu suất cho các hoạt động chuyển đổi */
    @media ${device.laptopX} {
      width: 100%;
    }
    @media ${device.laptop} {
      width: 100%;
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
  }
  .slider-content {
    position: relative;
    overflow: hidden; /* Đảm bảo không có khoảng trắng xuất hiện */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    transition: transform 1s ease-in-out;
    will-change: transform;
    @media ${device.laptopX} {
      width: 100%;
    }
    @media ${device.laptop} {
      width: 100%;
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
  }
  .slider-content a {
    width: 100%;
    height: 300px;
  }

  @keyframes slide {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .slider-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
    position: absolute; /* Đảm bảo tất cả các hình ảnh chồng lên nhau */
    top: 0;
    left: 0;
    transition: transform 1s ease-in-out; /* Tạo hiệu ứng chuyển đổi mượt */
  }

  .slide-in {
    z-index: 1;
    animation: slide 0.1s forwards;
  }

  .slide-out {
    z-index: 0;
    animation: slide-out 0.3s forwards;
  }
  .slider-content img {
    width: 100%; /* Đảm bảo chiếm hết chiều rộng của container */
    height: 100%;
  }
  .btn-prev {
    margin-right: -50px;
    z-index: 100;
    font-size: 2rem;
    padding: 5px 15px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
  .btn-next {
    margin-left: -50px;
    z-index: 100;
    font-size: 2rem;
    padding: 5px 15px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
  button:disabled {
    opacity: 0; /* Làm mờ nút đi */
    cursor: not-allowed; /* Đổi con trỏ chuột */
  }
  .list-content-slider {
    display: flex;
    justify-content: space-between;
    z-index: 20000;
    margin-top: 10px;
  }
  .content-slider-item {
    cursor: pointer;
    font-size: 1.4rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-align: center;
    margin: 0 5px;
    padding-bottom: 2px;
    text-overflow: ellipsis;
    @media ${device.desktopS} {
      font-size: 1rem;
    }
    @media ${device.desktopXM} {
      font-size: 0.9rem;
    }
    @media ${device.desktopM} {
      font-size: 0.9rem;
    }
    @media ${device.laptopL} {
      font-size: 0.8rem;
    }
    @media ${device.laptopS} {
      font-size: 0.8rem;
    }
    @media ${device.laptopM} {
      font-size: 0.8rem;
    }
    @media ${device.laptopX} {
      font-size: 0.8rem;
    }
    @media ${device.laptop} {
      font-size: 0.6rem;
    }
    @media ${device.tablet} {
      font-size: 0.6rem;
    }
    @media ${device.mobile} {
      font-size: 0.6rem;
    }
    @media ${device.mobileL} {
      font-size: 0.5rem;
    }
    @media ${device.mobileM} {
      font-size: 0.5rem;
    }
    @media ${device.mobileS} {
      font-size: 0.5rem;
    }
  }
  .active {
    border-bottom: 2px solid #b00000;
    border-radius: 1px;
    font-weight: bold;
  }
`;
