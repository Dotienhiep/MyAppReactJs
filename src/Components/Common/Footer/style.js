import styled from "styled-components";
import { device } from "./../../../contants";

export const FooterWrapper = styled.div`
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 100px;
    background-color: #000;
    color: white;
    border-bottom: 1px solid white;

    @media ${device.laptop} {
      padding: 20px 50px;
    }
    @media ${device.tablet} {
      padding: 20px 50px;
    }
    @media ${device.mobile} {
      padding: 20px 30px;
    }
    @media ${device.mobileL} {
      padding: 20px 15px;
    }
    @media ${device.mobileM} {
      padding: 20px 15px;
    }
    @media ${device.mobileS} {
      padding: 20px 15px;
    }
  }

  .footer-store-chain {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    padding-bottom: 30px;
    margin-bottom: 20px;

    @media ${device.laptop} {
      flex-direction: column;
      margin-bottom: 0;
    }
  }

  .footer-store-chain-content {
    @media ${device.laptop} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 20px;
    }
  }

  .footer-store-chain-content h3 {
    padding-bottom: 10px;
  }
  .footer-store-chain-content span {
    text-align: center;
  }
  .footer-store-chain-button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .footer-store-chain-button button {
    padding: 10px 14px;
    font-size: 17px;
    font-weight: 700;
    color: #fff;
    background-color: red;
    border: none;
    border-radius: 20px;
  }

  .footer-content {
    width: 100%;
    border-bottom: 1px solid gray;
    margin-bottom: 30px;
  }
  /* tablet */
  .footer-connect {
    width: 100%;
    color: white;
  }

  .footer-section {
    width: 25%;
  }

  .ant-collapse-item {
    color: white;
    width: 100%;
    border-bottom: 1px solid gray;
  }
  .ant-collapse {
    border: none !important;
  }
  .ant-collapse-header {
    padding: 12px 0 !important;
    border: none !important;
  }
  .ant-collapse-header-text {
    color: white;
    padding-inline-end: 0px !important;
  }

  .ant-collapse-expand-icon {
    color: white;
  }

  .ant-collapse-header .ant-collapse-header-text {
    order: 1;
    font-weight: 700;
    font-size: 18px;
  }

  .ant-collapse-header .ant-collapse-expand-icon {
    order: 2;
  }

  .ant-collapse-content {
    background-color: black;
    color: #fff;
    border: none !important;
  }

  @media ${device.laptop} {
    .footer-desktop {
      display: none;
    }
  }

  @media (min-width: 992px) {
    .ant-collapse {
      display: none;
    }
  }
  /* desktop */
  .footer-desktop {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
  }
  .footer-list-contact {
    display: flex;
    justify-content: flex-start;
    padding: 20px 0;
    @media ${device.laptop} {
      padding: 0;
    }
  }
  .footer-list-contact li {
    position: relative;
    display: inline-block;
    cursor: pointer;
    padding-right: 10px;
  }

  .footer-list-contact li::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transition: background-color 0.4s ease-out;
    z-index: -1; /* Nền phía sau icon */
  }

  .footer-list-contact li::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease-out;
    z-index: 2; /* Tooltip phía trên icon */
  }

  .footer-list-contact li .fa-icon {
    position: relative;
    z-index: 1; /* Icon nằm trên nền */
    transition: color 0.4s ease-out;
  }

  /* Áp dụng màu trực tiếp thay vì dùng biến */
  .footer-list-contact li.facebook:hover {
    color: #1877f2;
  }

  .footer-list-contact li.youtube:hover {
    color: #ff0000;
  }

  .footer-list-contact li.discord:hover {
    color: #5865f2;
  }

  .footer-list-contact li:hover::before {
    opacity: 1; /* Hiển thị nền khi hover */
  }

  .footer-list-contact li:hover::after {
    opacity: 1; /* Hiển thị tooltip khi hover */
  }

  .footer-list-con li {
    padding-bottom: 10px;
    list-style-type: none;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-list-we {
    padding: 20px 0;
    @media ${device.laptop} {
      padding: 0;
    }
  }

  .footer-list-we li {
    padding-bottom: 10px;
    list-style-type: none;
    font-weight: bold;
    font-size: 15px;
    text-decoration: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
    display: block; /* Đặt kiểu hiển thị là block để nằm theo cột */
    width: fit-content; /* Đặt chiều rộng theo nội dung */
  }

  .footer-list-we li::before {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 4px;
    width: 100%; /* Đặt width là 100% để kéo dài dưới nội dung */
    height: 2px;
    background-color: #fff;
    transform: scale(0);
    transition: transform 0.5s ease;
  }

  .footer-list-we li:hover {
    text-decoration: none;
    outline: none;
  }

  .footer-list-we li:hover::before {
    transform: scale(1);
  }
`;
