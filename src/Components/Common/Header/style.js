import styled from "styled-components";
import { device } from "./../../../contants";
// cd1817

export const HeaderWrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff3233;
  padding: 8px 100px;
  /* responsive */
  @media ${device.laptop} {
    padding: 0 50px;
  }
  @media ${device.tablet} {
    padding: 0 50px;
  }
  @media ${device.mobile} {
    padding: 0 50px;
  }
  @media ${device.mobileL} {
    padding: 0 40px;
  }
  @media ${device.mobileM} {
    padding: 0 40px;
  }
  @media ${device.mobileS} {
    padding: 0 40px;
  }
  /* Header Left */
  .header-left {
    display: flex;
    color: #fff;
    justify-content: flex-start;
    align-items: center;
  }
  .header-left a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    text-decoration: none;
    color: #fff;
  }
  .header-left img {
    width: 80px;
  }
  .header-left .logoo {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
  }
  .header-left .shop {
    font-size: 15px;
    font-weight: bold;
  }
  .header-left .com {
    font-size: 10px;
    font-weight: bold;
  }
  .header-left label input {
    min-width: 450px;
    height: 36px;
    border-radius: 5px 0 0 5px;
    padding-left: 10px;
    outline: none;
    border: none;
  }
  /* Input Search */
  .input-header {
    @media ${device.laptop} {
      display: none;
    }
    @media ${device.tablet} {
      display: none;
    }
    @media ${device.mobile} {
      display: none;
    }
    @media ${device.mobileL} {
      display: none;
    }
    @media ${device.mobileM} {
      display: none;
    }
    @media ${device.mobileS} {
      display: none;
    }
  }
  /* Header Right */
  .header-right ul {
    display: flex;
    padding: 0;
    margin: 0;
  }
  .header-right ul li {
    list-style-type: none;
    padding: 0px 7px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .header-right ul li:first-child,
  .header-right ul li:nth-child(2) {
    @media ${device.laptopS} {
    }
    @media ${device.laptopL} {
    }
    @media ${device.laptopM} {
      display: none;
    }
    @media ${device.laptopX} {
      display: none;
    }
    @media ${device.laptop} {
      display: none;
    }
    @media ${device.tablet} {
      display: none;
    }
    @media ${device.mobile} {
      display: none;
    }
    @media ${device.mobileL} {
      display: none;
    }
    @media ${device.mobileM} {
      display: none;
    }
    @media ${device.mobileS} {
      display: none;
    }
  }
  .header-right ul li:nth-child(3),
  .header-right ul li:last-child {
    @media ${device.laptopX} {
      .title-icon-header {
        font-size: 0.7rem;
      }
    }
  }
  .header-right ul li a {
    list-style-type: none;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .header-right ul li a .title-icon-header {
    font-size: 0.9rem;
  }
  .cart-icon {
    text-decoration: none;
  }
  .btn-search {
    font-size: 20px;
    padding: 6px 20px;
    border: none;
    outline: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    @media ${device.laptop} {
      display: none;
    }
    @media ${device.tablet} {
      display: none;
    }
    @media ${device.mobile} {
      display: none;
    }
    @media ${device.mobileL} {
      display: none;
    }
    @media ${device.mobileM} {
      display: none;
    }
    @media ${device.mobileS} {
      display: none;
    }
  }
`;
