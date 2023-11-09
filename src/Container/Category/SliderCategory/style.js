import styled from "styled-components";
import { device } from "../../../contants";

export const SliderContentWrapper = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 30px 100px 0 100px;
  border-radius: 5px;
  position: relative;
  background-color: #fff;
  z-index: 10000;
  @media ${device.laptop} {
      margin: 30px 50px 0 50px;
    }
    @media ${device.tablet} {
      margin: 30px 50px 0 50px;
    }
    @media ${device.mobile} {
      margin:  margin: 30px 30px 0 30px;
    }
    @media ${device.mobileL} {
      margin: 20px 15px 0 15px;
    }
    @media ${device.mobileM} {
      margin: 20px 15px 0 15px;
    }
    @media ${device.mobileS} {
      margin: 20px 15px 0 15px;
    }
  .wrapper {
    display: flex;
    width: 100%;
  }
  .content-left {
    width: 100%;
  }
`;
