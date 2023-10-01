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
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
  }
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
  }
  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
  }
  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
  }
  .list-filter {
    min-width: 25%;
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
    background-color: #fff;
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
    margin-bottom: 20px;
  }
  .list-product {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 6px;
    border-radius: 3px;
    margin: 0 10px;
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
  width: calc((100% - 30px) / 3);
  margin-top: 20px;
  flex-direction: column;
  padding: 15px;
  border-radius: 6px;
  background-image: url("/assets/images/boder-product.png");
  background-repeat: no-repeat;
  background-position: center top 15px;
  background-color: #fff;
  object-fit: cover;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  &:hover .list-btn {
    display: block;
  }
  .image {
    display: flex;
    justify-content: center;
    margin: 50px auto;
  }
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out; 
  }
  img:hover {
    transform: scale(1.2);
  }
  .content {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }
  .link {
    text-decoration: none;
    padding: 10px 0;
  }
  .content .title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
    font-family: "Helvetica Neue", Helvetica;
  }
  .content .cost {
    margin: 10px 0;
    color: red;
  }
  .icon-product {
    margin-right: 5px;
  }
  .memory {
    font-size: 1.1rem;
    margin: 15px 0;
  }
  .list-btn {
    display: none;
    margin: 20px 0 0 0;
  }
  .list-btn button {
    padding: 5px 8px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
  }
  .buy-now {
    margin-right: 30px;
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
`;
