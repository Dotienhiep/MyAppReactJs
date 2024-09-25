import styled from "styled-components";
import { device } from "./../../../../contants";

export const TabItemWrapper = styled.div`
  padding: 0 10px 10px; /* Thêm khoảng cách 100px mỗi bên */
  width: calc(100% - 200px); /* Điều chỉnh width để trừ padding hai bên */
  background-color: #0a2137;
  margin: 0 auto;
  border-radius: 0 0 20px 20px;
  .bg-tabsale {
    padding: 0;
  }
  .list-tab {
    list-style-type: none;
    margin: 0;
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    @media ${device.laptop} {
      margin: 0 50px;
    }
    @media ${device.tablet} {
      margin: 0 50px;
    }
    @media ${device.mobile} {
      margin: 0 15px;
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
  }
  .tab-item {
    width: calc(100% / 4);
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    font-weight: 500;
    cursor: pointer;
    padding: 10px 5px;
    color: #000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    @media ${device.laptop} {
      font-size: 1em;
    }
    @media ${device.tablet} {
      font-size: 0.8em;
    }
    @media ${device.mobile} {
      font-size: 0.6em;
    }
    @media ${device.mobileL} {
      font-size: 0.5em;
    }
    @media ${device.mobileM} {
      font-size: 0.5em;
    }
    @media ${device.mobileS} {
      font-size: 0.5em;
    }
  }
  //
  .tab-item-ended {
    background-color: #6a7379;
  }
  .tab-item-upcoming {
    background-color: #ff0000;
  }
  .tab-item:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  }
  /* .active {
    color: #fff;
    background-color: #cb1c22;
  } */
  .content-tab {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-tab .title {
    font-size: 1.3rem;
    color: #fff;
    font-weight: 700;
  }
  .content {
    margin: 0 10px;
    display: flex;
    padding: 2px 4px;
    font-weight: 700;
    border-radius: 4px;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
  }
  .bg-color-ended {
    background-color: #5a6267;
  }
  .enabled-ended {
    pointer-events: none;
  }
  .bg-color-upcoming {
    background-color: #eba93a;
    color: #cb1c22;
  }
  .list-content {
    width: 100%;
    list-style-type: none;
    background-color: white;
    padding: 0 15px 15px;
    border-radius: 0 0 20px 20px;
  }
  .content-item {
    font-size: 15px;
  }
  .list-content button {
    display: none;
  }
  .button {
    background-color: #cb1c22;

    -webkit-border-radius: 10px;

    border-radius: 10px;

    border: none;

    color: #ffffff;

    display: inline-block;

    font-family: Arial;

    font-size: 20px;

    padding: 5px;

    text-align: center;

    text-decoration: none;
  }
  @-webkit-keyframes glowing {
    0% {
      background-color: #ff0000;
      -webkit-box-shadow: 0 0 3px #ff0000;
    }
    50% {
      background-color: #ff0000;
      -webkit-box-shadow: 0 0 10px #ff0000;
    }
    100% {
      background-color: #ff0000;
      -webkit-box-shadow: 0 0 3px #ff0000;
    }
  }

  @-moz-keyframes glowing {
    0% {
      background-color: #ff0000;
      -moz-box-shadow: 0 0 3px #ff0000;
    }
    50% {
      background-color: #ff0000;
      -moz-box-shadow: 0 0 10px #ff0000;
    }
    100% {
      background-color: #ff0000;
      -moz-box-shadow: 0 0 3px #ff0000;
    }
  }

  @-o-keyframes glowing {
    0% {
      background-color: #ff0000;
      box-shadow: 0 0 3px #ff0000;
    }
    50% {
      background-color: #ff0000;
      box-shadow: 0 0 10px #ff0000;
    }
    100% {
      background-color: #ff0000;
      box-shadow: 0 0 3px #ff0000;
    }
  }

  @keyframes glowing {
    0% {
      background-color: #ff0000;
      box-shadow: 0 0 3px #ff0000;
    }
    50% {
      background-color: #ff0000;
      box-shadow: 0 0 10px #ff0000;
    }
    100% {
      background-color: #ff0000;
      box-shadow: 0 0 3px #ff0000;
    }
  }

  .button {
    -webkit-animation: glowing 1500ms infinite;
    -moz-animation: glowing 1500ms infinite;
    -o-animation: glowing 1500ms infinite;
    animation: glowing 1500ms infinite;
  }
  .list-content .slick-slider .slick-arrow {
    display: none;
  }
`;
