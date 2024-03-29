import styled from "styled-components";
import { device } from "./../../../contants";
export const NavWrapper = styled.div`
  width: 100%;
  height: 35px;
  background-color: #000;
  color: #fff;
  position: fixed;
  z-index: 100000;
  top: 53px;
  left: 0;
  @media ${device.laptop} {
    top: 0px;
    background-color: transparent;
  }
  @media ${device.tablet} {
    top: 0px;
    background-color: transparent;
  }
  @media ${device.mobile} {
    top: 0px;
    background-color: transparent;
  }
  @media ${device.mobileL} {
    top: 0px;
    background-color: transparent;
  }
  @media ${device.mobileM} {
    top: 0px;
    background-color: transparent;
  }
  @media ${device.mobileS} {
    top: 0px;
    background-color: transparent;
  }

  .list-nav {
    width: 100%;
    height: 100%;
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
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
  .menu-icon {
    display: none;
    cursor: pointer;
    @media ${device.laptop} {
      display: block;
    }
    @media ${device.tablet} {
      display: block;
    }
    @media ${device.mobile} {
      display: block;
    }
    @media ${device.mobileL} {
      display: block;
    }
    @media ${device.mobileM} {
      display: block;
    }
    @media ${device.mobileS} {
      display: block;
    }
  }
  .menu-icon button {
    margin-top: 5px;
  }
  /* logo */
  & a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 10px;
    text-decoration: none;
    color: #fff;
  }
  & img {
    width: 80px;
  }
  & .logoo {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
  }
  & .shop {
    font-size: 15px;
    font-weight: bold;
  }
  & .com {
    font-size: 10px;
    font-weight: bold;
  }
  /*  */
  .menu-content-mobile {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    background-color: #ff3233;
    color: black;
  }

  .menu-content-mobile.open {
    transform: translateX(0%);
    width: 80%;
    padding: 0px 0px 0px 50px;
  }

  /* menu-nav-mobile */
  .menu-mobile-nav .list-nav-mobile {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .menu-mobile-nav .list-nav-mobile li .submenu {
    display: none;
  }
  .nav-wrapper:nth-child(2) .submenu .product {
    display: none;
  }
  .nav-wrapper:nth-child(4) .submenu .cost {
    display: none;
  }
  /* .nav-wrapper:nth-child(5) .submenu {
    width: 200px;
    position: absolute;
    top: 35px;
    left: 415px;
  } */
  /*
  .nav-wrapper:nth-child(5) .submenu .submenu-content .left {
    width: 100%;
    padding: 0 10px 10px 10px;
  } */
  /* .nav-wrapper:nth-child(5) .submenu .submenu-content .left .top {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: start;
    align-items: start;
  } */
  /* .nav-wrapper:nth-child(5) .submenu .submenu-content .left .list-top {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 100%;
  } */
  .nav-wrapper:nth-child(5) .submenu .submenu-content {
    width: 15%;
    position: absolute;
    left: 35%;
  }
  .nav-wrapper:nth-child(5) .submenu .submenu-content .left .bottom {
    display: none;
  }
  .nav-wrapper:nth-child(5) .submenu .submenu-content .left .center {
    display: none;
  }
  .nav-wrapper:nth-child(5) .submenu .cost {
    display: none;
  }
  .nav-wrapper:nth-child(5) .submenu .product {
    display: none;
  }
  .nav-wrapper:nth-child(5) .submenu .image {
    display: none;
  }
  .nav-wrapper:nth-child(6) .submenu .cost {
    display: none;
  }
  .nav-wrapper:nth-child(7) .submenu .submenu-content {
    display: none;
  }
  .nav-wrapper:nth-child(8) .submenu .submenu-content {
    display: none;
  }
  .nav-wrapper:nth-child(9) .submenu .submenu-content {
    display: none;
  }
  .nav-wrapper:last-child .submenu .cost {
    display: none;
  }
  .nav-wrapper:last-child .submenu .product {
    display: none;
  }
  .nav-wrapper:last-child .submenu .image {
    display: none;
  }
  .nav-wrapper:last-child .submenu .submenu-content {
    position: absolute;
    left: 80%;
    width: 15%;
  }
  .nav-wrapper:last-child .submenu .submenu-content .left {
    width: 100%;
    padding: 8px 15px 15px 15px;
  }
  .nav-wrapper:last-child .submenu .submenu-content .left .top {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: start;
    align-items: start;
  }
  .nav-wrapper:last-child .submenu .submenu-content .left .list-top {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 100%;
  }
  .nav-wrapper:last-child .submenu .submenu-content .left .bottom {
    display: none;
  }
  .nav-wrapper:last-child .submenu .submenu-content .left .center {
    display: none;
  }
  .nav-wrapper:last-child .submenu .submenu-content .left .list-top {
    display: flex;
    flex-direction: column;
  }
`;
export const NavItemWrapper = styled.div`
  color: #000;
  padding: 0.5rem;
  list-style-type: none;
  white-space: nowrap;
  overflow: hidden;
  li a {
    text-decoration: none;
    color: #fff;
    padding-bottom: 10px;
    font-size: 0.85rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .svg-inline--fa {
    margin-right: 6px;
  }
  li a:hover {
    color: red;
  }
  .submenu {
    position: absolute;
    top: 35px;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    width: 100%;
    padding: 0 100px;
    height: auto;
    z-index: 10000000;
  }
  .submenu-content {
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px solid gray;
  }
  li:hover .submenu {
    display: block;
  }
  .left {
    padding: 10px;
  }
  .top {
    /* margin-bottom: 20px; */
  }
  .list-top {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    list-style-type: none;
  }
  .list-top li {
    padding: 10px 20px 0 5px;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .list-bottom {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    list-style-type: none;
  }
  .list-bottom li {
    padding: 10px 20px 0 5px;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .top .title {
    font-size: 0.8rem;
  }
  .bottom:first-child {
    display: none;
  }
  .bottom .title {
    font-size: 0.8rem;
  }
  .bottom {
    margin-top: 20px;
  }
  .list-center {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    list-style-type: none;
  }
  .center .title {
    font-size: 0.8rem;
    padding-top: 5px;
  }
  .list-center li {
    padding: 10px 20px 0 5px;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .cost {
    border-left: 1px solid #ccc;
    padding: 10px 90px 0px 5px;
  }
  .list-cost {
    list-style-type: none;
    padding-left: 10px;
    margin: 0;
  }
  .cost .title {
    font-size: 0.8rem;
    font-weight: 800;
  }
  .list-cost li {
    padding-top: 10px;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .product {
    display: flex;
    border-left: 1px solid #ccc;
    flex-direction: column;
    padding: 10px 0px 0px 20px;
  }
  .product-item {
    display: flex;
  }
  .product .title-product:nth-child(2) {
    display: none;
  }
  .product-item .product-image {
    width: 80px;
    height: 80px;
    display: block;
  }
  .product-item .product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .product .content {
    display: flex;
    padding: 0 10px;
    flex-direction: column;
  }
  .product .content .name-product {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 230px;
    display: block;
    font-weight: bold;
  }
  .product .content .cost-product {
    color: #cd1817;
  }
  .image {
    display: block;
    width: 300px;
    height: auto;
    margin: 10px;
  }
  .image img {
    width: 100%;
    object-fit: cover;
  }
`;
