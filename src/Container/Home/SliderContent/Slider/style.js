import styled from "styled-components";
import { device } from "./../../../../contants";

export const SliderWrapper = styled.div`
  width: 100%;
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

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media ${device.laptopX} {
      width: 100%;
    }
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
  .slider-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    cursor: pointer;
    @media ${device.laptopX} {
      width: 100%;
    }
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
  .slider-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .list-dot {
    display: flex;
    justify-content: center;
    z-index: 200;
    margin-top: 10px;
  }
  .btn-prev {
    margin-right: -50px;
    z-index: 100;
    font-size: 2rem;
    padding: 5px 15px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    /* @media ${device.laptopX} {
      width: 100%;
    }
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
    } */
  }
  .btn-next {
    margin-left: -50px;
    z-index: 100;
    font-size: 2rem;
    padding: 5px 15px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
  .dot {
    border-radius: 50%;
    cursor: pointer;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-bottom: 10px;
    border: 1px solid #000;
    margin-right: 6px;
  }
  .active {
    background-color: #000;
  }
`;
