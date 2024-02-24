import styled from "styled-components";
import { device } from "./../../../contants";

export const CopyrightWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 12px;
  background-color: #f2f2f2;
  padding: 10px 0;
  text-align: center;
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
