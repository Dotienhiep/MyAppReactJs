import styled from "styled-components";
import { device } from "../../../contants";

export const EmptyWrapper = styled.div`
  width: 100%;
  height: auto;
  .empty-container {
    margin: 100px;
    @media ${device.laptop} {
      margin: 100px 50px;
    }
    @media ${device.tablet} {
      margin: 100px 50px;
    }
    @media ${device.mobile} {
      margin: 100px 30px;
    }
    @media ${device.mobileL} {
      margin: 100px 15px;
    }
    @media ${device.mobileM} {
      margin: 100px 15px;
    }
    @media ${device.mobileS} {
      margin: 100px 15px;
    }
  }
  .no-product {
    margin: 70px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .no-product p {
    margin: 30px 0;
    font-size: 30px;
    overflow: hidden;
    font-family: "time new roman", "Times New Roman";
  }
  .no-product button {
    padding: 8px 12px;
    font-size: 14px;
    border: none;
    background-color: #1e90ff;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
`;
