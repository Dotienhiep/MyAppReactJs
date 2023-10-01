import styled from "styled-components";
import { device } from "./../../../contants";

export const FilterAccessoryWrapper = styled.div`
  width: 100%;
  margin: 50px 0;
`;
export const ListFilterWrapper = styled.div`
  width: 100%;
  .list-filter {
    display: flex;
    margin: 0 100px;
    flex-wrap: wrap;
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
`;
export const FilterItemWrapper = styled.div`
  width: calc((100% / 8));
  display: flex;
  flex-direction: column;
  border: 0.5px solid #e6e6fa;
  background-color: #fff;
  @media ${device.laptop} {
    width: calc((100% / 4));
  }
  @media ${device.tablet} {
    width: calc((100% / 4));
  }
  @media ${device.mobile} {
    width: calc((100% / 2));
  }
  @media ${device.mobileL} {
    width: calc((100% / 2));
  }
  @media ${device.mobileM} {
    width: calc((100% / 2));
  }
  @media ${device.mobileS} {
    width: calc((100% / 2));
  }
  .content-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    height: 100%;
    padding: 20px;
  }
  .content-filter:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .content-image {
    display: flex;
    font-size: 40px;
    margin-bottom: 10px;
  }
  .content-filter p {
    text-align: center;
    font-size: 15px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
`;
