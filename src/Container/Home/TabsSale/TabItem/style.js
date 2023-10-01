import styled from "styled-components";
import { device } from "./../../../../contants";

export const TabItemWrapper = styled.div`
  width: 100%;

  .list-tab {
    list-style-type: none;
    margin: 0 100px;
    display: flex;
    align-items: center;
    border: 1px solid #cacaca;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
    padding: 20px 10px;
    color: #000;
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
  .tab-item:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 2);
  }
  .active {
    color: #fff;
    background-color: #ff0000;
  }
  .title {
    margin-bottom: 10px;
  }
  .list-content {
    list-style-type: none;
    padding: 1.5rem;
  }
  .content-item {
    font-size: 15px;
  }
  .button {
    background-color: #ff0000;

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
`;
