import styled from "styled-components";
import { device } from "./../../../contants";

export const CopyrightWrapper = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  padding: 20px 100px;
  display: flex;
  flex-direction: column;
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
  & span {
    text-align: center;
    @media ${device.laptop} {
      text-align: start;
    }
  }
  & ul {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    @media ${device.laptop} {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  & ul li {
    margin: 0 15px;
    white-space: nowrap;
  }

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
`;
