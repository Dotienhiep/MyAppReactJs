import styled from "styled-components";
import { device } from "./../../../contants";

export const FilterProductWrapper = styled.div`
  display: flex;
  margin: 0 100px;
  background-color: #f8f9fa;
  justify-content: space-between;
  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    margin: 0 50px;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    margin: 0 50px;
  }
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    margin: 0 30px;
  }
  @media ${device.mobileL} {
    display: flex;
    margin: 0 15px;
    flex-direction: column;
  }
  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
    margin: 0 15px;
  }
  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
    margin: 0 15px;
  }
  .list-filter {
    flex: 0 0 25%;
  }
  .filter {
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
    padding: 10px;
  }
  .brand {
    font-size: 18px;
    font-weight: bold;
    padding: 20px 10px 0px 10px;
  }
  .filter-item {
    width: 50%;
    margin: 10px 0;
  }
  .filter-item span {
    margin-left: 10px;
  }
  label {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  #checkbox {
    font-size: 20px;
    outline: none;
  }
  .category {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .check-category {
    font-size: 20px;
    font-family: "Helvetica Ne";
    font-weight: bold;
    margin: 20px 10px;
  }
  .list-product-page {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
  }
  .list-product {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; /* Đảm bảo các phần tử bắt đầu từ bên trái */
    align-items: flex-start;
    gap: 9px;
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
  }
  .page {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 8px;
    border-radius: 3px;
    margin: 0 7px;
  }
  .active-pagination {
    background-color: red;
  }
  .btn-prev {
    cursor: pointer;
    padding: 8px 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: none;
  }
  .btn-next {
    cursor: pointer;
    padding: 8px 7px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const ProductItemWrapper = styled.div`
  display: flex;
  width: calc((100% - (4 * 9px)) / 5);
  margin-top: 20px;
  /* flex: 0 0 20%;  */
  flex-direction: column;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  /* background-image: url("/assets/images/boder-product1.png"); */
  background-size: 95% auto;
  background-repeat: no-repeat;
  background-position: center top 5px;
  background-color: #fff;
  transition: transform 0.3s ease, filter 0.3s ease;
  gap: 9px;
  &:hover {
    transform: translateY(-5px);
    filter: brightness(90%);
  }
  &:hover img {
    transform: scale(1.12);
  }
  @media ${device.desktopS} {
    width: calc((100% - (3 * 9px)) / 4);
  }
  @media ${device.desktopXM} {
    width: calc((100% - (3 * 9px)) / 4);
  }
  @media ${device.desktopM} {
    width: calc((100% - (2 * 9px)) / 3);
  }
  @media ${device.laptopL} {
    width: calc((100% - (2 * 9px)) / 3);
  }
  @media ${device.laptopS} {
    width: calc((100% - 18px) / 3);
  }
  @media ${device.laptopM} {
    width: calc((100% - 9px) / 2);
  }
  @media ${device.laptopX} {
    width: calc((100% - 9px) / 2);
  }
  @media ${device.laptop} {
    width: calc((100% - 18px) / 3);
  }
  @media ${device.tablet} {
    width: calc((100% - 9px) / 2);
  }
  @media ${device.mobile} {
    width: calc((100% - 9px) / 2);
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
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  &:hover .list-btn {
    display: block;
  }
  .image {
    display: flex;
    justify-content: center;
    margin: 40px auto;
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
  img:hover {
    transform: scale(1.12);
  }
  .content-pro {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }
  .link {
    text-decoration: none;
    padding: 10px 0;
  }
  .content-pro .title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
    font-family: "Helvetica Neue", Helvetica;
    @media ${device.mobile} {
      font-size: 1rem;
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
  .cost {
    margin: 20px 0;
    border-radius: 30px;
    font-weight: bold;
    font-size: 17px;
    @media ${device.mobile} {
      font-size: 15px;
    }
    @media ${device.mobileL} {
      font-size: 15px;
    }
    @media ${device.mobileM} {
      font-size: 15px;
    }
    @media ${device.mobileS} {
      font-size: 15px;
    }
  }
  .cost span {
    background-color: #cb1a21;
    color: #fff;
    padding: 6px 10px;
    border-radius: 30px;
  }
  .icon-product {
    margin-right: 5px;
  }
  .memory {
    font-size: 1.1rem;
    margin: 15px 0;
  }
  .list-btn {
    width: 100%;
    display: none;
  }
  .list-btn-responsive {
    display: flex; /* Sử dụng layout flexbox */
    justify-content: space-between; /* Các phần tử con sẽ được căn chỉnh từng đầu */
    align-items: center;
  }
  .list-btn button {
    padding: 5px 8px;
    font-size: 15px;
    border-radius: 5px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    @media ${device.mobile} {
      padding: 3px;
      font-size: 12px;
    }
    @media ${device.mobileL} {
      padding: 3px;
      font-size: 10px;
    }
    @media ${device.mobileM} {
      padding: 3px;
      font-size: 10px;
    }
    @media ${device.mobileS} {
      padding: 3px;
      font-size: 10px;
    }
  }
  .buy-now {
    background-color: #cb1a21;
  }
  .buy-now:active {
    opacity: 0.8;
  }
  .cart {
    background-color: #00bfff;
  }
  .cart:active {
    opacity: 0.8;
  }
  .cart .icon {
    margin-right: 10px;
  }
  //
  .content .info {
    display: flex;
    flex-wrap: wrap;
  }
  .content .info {
    padding: 10px 0px 0px;
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: #000;
  }
  .content a {
    text-decoration: none;
  }
  .list-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .item-info {
    padding-bottom: 10px;
  }
  .list-info .cpu {
    padding-right: 15px;
  }
  .list-info .screen {
    padding-right: 15px;
  }
  .list-info .ram {
    padding-right: 15px;
  }
  .list-info .memory {
    padding-right: 15px;
  }
  .item-info svg {
    color: #a9a9a9;
  }
`;
