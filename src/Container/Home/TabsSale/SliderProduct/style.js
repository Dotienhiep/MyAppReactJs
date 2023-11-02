import styled from "styled-components";
import { device } from "../../../../contants";

export const SliderProductWrapper = styled.div`
  width: 100%;
  .rec-pagination {
    display: none;
  }
  .slick-list {
    margin: 0 75px;
    display: flex;
    justify-content: flex-start;//111111111
    @media ${device.mobile} {
      margin: 0 35px;
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
  .slick-track {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rec-carousel-item {
    /* border: 1px solid red; */
  }
  .slick-slide {
    margin: 0 3px;
  }
  .slick-slide > div {
    /* border: 1px solid red; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100% important!;
  }
`;
