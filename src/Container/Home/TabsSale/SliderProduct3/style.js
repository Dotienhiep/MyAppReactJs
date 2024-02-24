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
    justify-content: flex-start;
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
    padding: 5px;
    border-radius: 5px;
    background-color: #cd1917;
    transition: transform 0.3s ease, filter 0.3s ease;
    &:hover {
      transform: translateY(-5px);
      filter: brightness(100%);
    }
  }
  .slick-slide > div {
    /* border: 1px solid red; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100% important!;
  }
  .slick-prev {
    display: none;
  }
  .slick-next {
    display: none;
  }
`;
