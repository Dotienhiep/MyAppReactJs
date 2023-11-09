import styled from "styled-components";
import { device } from "./../../../contants";

export const LaptopGamingWrapper = styled.div`
  margin: 0 100px;
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
  .bg-title {
    margin-bottom: 25px;
  }
  .bg-title img {
    width: 100%;
  }
`;
export const ContentLapTopWrapper = styled.div`
  background-image: url("/assets/images/bg-all.png");
  width: 100%;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  align-items: center;
  .image {
    width: 700px;
    height: 150px;
    margin-top: 15px;
    margin: 0 auto;
  }
  .image img {
    width: 100%;
    object-fit: cover;
  }
  .list-product {
    margin: 10px 70px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
    justify-content: space-between;
  }
  .product-item {
    width: calc((100% - 50px) / 4);
    height: auto;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    @media ${device.laptop} {
      width: calc((100% - 50px) / 4);
    }
    @media ${device.tablet} {
      width: calc((100% - 10px) / 2);
    }
    @media ${device.mobile} {
      width: calc((100% - 10px) / 2);
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
  .product-item:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }
  .image {
    width: 70%;
    height: auto;
    object-fit: cover;
    margin-top: 30px;
  }
  .title {
    font-size: 1.3rem;
    display: flex;
    margin-top: 20px;
    justify-content: center;
    font-weight: bold;
    font-family: "Times New Roman", Times, serif;
  }
  .content {
    margin-top: 15px;
    margin-bottom: 20px;
    font-size: 1.6rem;
    display: flex;
    color: #cd1916;
    justify-content: center;
    @media ${device.laptop} {
      font-size: 1.4rem;
    }
    @media ${device.tablet} {
      font-size: 1.3rem;
    }
    @media ${device.mobile} {
      font-size: 1.1rem;
    }
    @media ${device.mobileL} {
      font-size: 1rem;
    }
    @media ${device.mobileM} {
      font-size: 1rem;
    }
    @media ${device.mobileS} {
      font-size: 1rem;
    }
  }
  .sale-laptop {
    width: 55%;
    margin-bottom: 70px;
  }
  .sale-laptop img {
    width: 100%;
    object-fit: cover;
  }
`;
