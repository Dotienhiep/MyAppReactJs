import styled from "styled-components";
import { device } from "./../../../contants";

export const FooterWrapper = styled.div`
  .footer {
    display: flex;
    flex-wrap: wrap;
    margin: 0 100px;
    @media ${device.laptop} {
      margin: 0 50px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
    @media ${device.tablet} {
      margin: 0 50px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
    @media ${device.mobile} {
      margin: 0 30px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
    @media ${device.mobileL} {
      margin: 0 15px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
    @media ${device.mobileM} {
      margin: 0 15px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
    @media ${device.mobileS} {
      margin: 0 15px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
  }
  .left {
    display: flex;
    justify-content: space-between;
    width: 50%;
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
  ul {
    list-style-type: none;
  }
  li {
    padding-top: 10px;
  }
  li a {
    text-decoration: none;
    color: #3399d2;
    font-size: 14px;
    @media ${device.laptop} {
      font-size: 14px;
    }
    @media ${device.tablet} {
      font-size: 14px;
    }
    @media ${device.mobile} {
      font-size: 14px;
    }
    @media ${device.mobileL} {
      font-size: 10px;
    }
    @media ${device.mobileM} {
      font-size: 10px;
    }
    @media ${device.mobileS} {
      font-size: 10px;
    }
  }
  li a:hover {
    text-decoration: underline;
    color: red;
  }
  .right {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    margin-left: 50px;
    @media ${device.laptop} {
      width: 100%;
      margin-left: 0px;
    }
    @media ${device.tablet} {
      width: 100%;
      margin-left: 0px;
    }
    @media ${device.mobile} {
      width: 100%;
      margin-left: 0px;
    }
    @media ${device.mobileL} {
      width: 100%;
      margin-left: 0px;
    }
    @media ${device.mobileM} {
      width: 100%;
      margin-left: 0px;
    }
    @media ${device.mobileS} {
      width: 100%;
      margin-left: 0px;
    }
  }
  .right .top {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    @media ${device.laptop} {
      font-size: 14px;
    }
    @media ${device.tablet} {
      font-size: 14px;
    }
    @media ${device.mobile} {
      font-size: 14px;
    }
    @media ${device.mobileL} {
      font-size: 10px;
    }
    @media ${device.mobileM} {
      font-size: 10px;
    }
    @media ${device.mobileS} {
      font-size: 10px;
    }
    line-height: 30px;
  }
  .title-f {
    font-size: 17px;
    font-weight: 700;
    @media ${device.laptop} {
      font-size: 14px;
    }
    @media ${device.tablet} {
      font-size: 14px;
    }
    @media ${device.mobile} {
      font-size: 14px;
    }
    @media ${device.mobileL} {
      font-size: 10px;
    }
    @media ${device.mobileM} {
      font-size: 10px;
    }
    @media ${device.mobileS} {
      font-size: 10px;
    }
  }
  .title-c {
    font-size: 20px;
    font-weight: 700;
    color: red;
    @media ${device.laptop} {
      font-size: 16px;
    }
    @media ${device.tablet} {
      font-size: 16px;
    }
    @media ${device.mobile} {
      font-size: 16px;
    }
    @media ${device.mobileL} {
      font-size: 14px;
    }
    @media ${device.mobileM} {
      font-size: 14px;
    }
    @media ${device.mobileS} {
      font-size: 14px;
    }
  }
  .bottom {
    font-size: 16px;
    line-height: 30px;
    @media ${device.laptop} {
      font-size: 14px;
    }
    @media ${device.tablet} {
      font-size: 14px;
    }
    @media ${device.mobile} {
      font-size: 14px;
    }
    @media ${device.mobileL} {
      font-size: 10px;
    }
    @media ${device.mobileM} {
      font-size: 10px;
    }
    @media ${device.mobileS} {
      font-size: 10px;
    }
  }
`;
