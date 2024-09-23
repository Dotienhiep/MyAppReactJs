import styled from "styled-components";
import { device } from "../../../contants";

export const TabsSaleWrapper = styled.div`
  margin: 100px 0;
  .container-content-banner {
    position: relative;
    z-index: 2 !important;
    width: calc(100% - 200px) !important;
    border: 1px solid #fff;
    /* max-width: 1236px; */
    margin: 0 auto;
    display: flex;
    padding-top: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: gray;
    border-radius: 6px 6px 0 0;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px 0px #00000040;
    overflow: unset;
    @media ${device.laptop} {
      width: calc(100% - 100px) !important;
    }
    @media ${device.tablet} {
      width: calc(100% - 100px) !important;
    }
    @media ${device.mobile} {
      width: calc(100% - 60px) !important;
    }
    @media ${device.mobileL} {
      width: calc(100% - 30px) !important;
    }
    @media ${device.mobileM} {
      width: calc(100% - 30px) !important;
    }
    @media ${device.mobileS} {
      width: calc(100% - 30px) !important;
    }
  }
  .container-content-banner::before {
    position: absolute;
    content: "";
    border-bottom: 17px solid #610003;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    height: 0;
    width: 49.5%;
    top: -18px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    display: table;
  }
  .container-content-banner::after {
    content: "";
    display: table;

    clear: both;
  }
  .flashsale-title {
    text-align: center;
    position: absolute;
    content: "";
    top: -18px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .flashsale-title img {
    width: 100%;
  }
  .flashsale-banner {
    background-color: #cb1c22;
    border: 1px solid #fff;
    width: 100%;
  }
  .flashsale-banner img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
