import styled from "styled-components";
import { device } from "../../contants";

export const CartWrapper = styled.div`
  width: 100%;
  .header {
    padding-top: 0;
  }
  .product-cart {
    margin: 100px;
    @media ${device.laptop} {
      margin: 100px 50px;
    }
    @media ${device.tablet} {
      margin: 100px 50px;
    }
    @media ${device.mobile} {
      margin: 100px 30px;
    }
    @media ${device.mobileL} {
      margin: 100px 15px;
    }
    @media ${device.mobileM} {
      margin: 100px 15px;
    }
    @media ${device.mobileS} {
      margin: 100px 15px;
    }
  }
  .no-product {
    margin: 70px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .no-product p {
    margin: 30px 0;
    font-size: 30px;
    overflow: hidden;
    font-family: "time new roman", "Times New Roman";
  }
  .no-product button {
    padding: 8px 12px;
    font-size: 14px;
    border: none;
    background-color: #1e90ff;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
  .list-cart {
    width: 65%;
  }
  .hidden {
    display: none;
  }
  .list-product-cart {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .content-product-cart {
    display: flex;
    width: 100%;
  }
  .money {
    display: flex;
    flex-direction: column;
  }
  .content-cart {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    @media ${device.tablet} {
      display: flex;
      flex-direction: column;
      .list-cart {
        width: 100%;
      }
    }
    @media ${device.mobile} {
      display: flex;
      flex-direction: column;
      .list-cart {
        width: 100%;
      }
    }
    @media ${device.mobileL} {
      display: flex;
      flex-direction: column;
      .list-cart {
        width: 100%;
      }
    }
    @media ${device.mobileM} {
      display: flex;
      flex-direction: column;
      .list-cart {
        width: 100%;
      }
    }
    @media ${device.mobileS} {
      display: flex;
      flex-direction: column;
      .list-cart {
        width: 100%;
      }
    }
  }
  .content-product-cart .image-product-cart {
    width: 130px;
    height: 130px;
    display: block;
    margin-right: 20px;
  }
  .content-product-cart .image-product-cart img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content-text {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .content-text .title-product-cart {
    font-size: 18px;
    font-weight: 400;
    width: 100%;
    margin-top: 20px;
  }
  .content-de-in {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .de-in {
    padding: 15px 0 0 10px;
    display: flex;
  }
  .de-in .btn-decrement {
    padding: 6px 8px;
    background-color: #cd1916;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .de-in .btn-increment {
    padding: 6px 8px;
    background-color: #0099e5;
    border: none;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
  }
  .number {
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cost-cart {
    padding-top: 60px;
  }
  .icon-exist {
    font-size: 20px;
    cursor: pointer;
    z-index: 10000;
  }
  .form {
    border: 1px solid red;
    flex-grow: 1;
    height: auto;
  }
  .form .form-title {
    background-color: #cd1916;
    color: #fff;
  }
  .form .form-title span {
    padding: 10px;
    font-size: 20px;
    font-weight: 500;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  .input-form {
    display: flex;
    flex-direction: column;
  }
  .content-form {
    border: 1px solid red;
  }
  .text-form {
    margin-bottom: 20px;
    padding: 20px;
  }
  input[type="text"] {
    width: 100%;
    height: 30px;
    margin: 10px 0;
    font-size: 0.7rem;
    border: 1px solid #cacaca;
    padding-left: 10px;
    border-radius: 5px;
  }
  form input[type="text"]:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  form input[type="tel"] {
    width: 100%;
    height: 30px;
    margin: 10px 0;
    font-size: 1rem;
    border: 1px solid #cacaca;
    padding-left: 10px;
    border-radius: 5px;
  }
  form input[type="tel"]:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  textarea {
    padding-left: 10px;
    font-size: 1rem;
    margin: 10px 0;
  }
  select {
    width: 40%;
    margin: 10px 0;
  }
  .text-submit {
    padding-left: 3px;
    font-size: 1rem;
  }
  .btn-submit {
    width: 100%;
    border-radius: none;
    background-color: #cd1916;
    border: none;
    padding: 20px 0;
    color: #fff;
  }
  .btn-submit span {
    font-size: 40px;
    margin-bottom: 10px;
  }
  .btn-submit p {
    font-size: 16px;
  }
  .list-price {
    display: flex;
    flex-direction: column;
    padding-right: 40px;
  }
  .box {
    display: flex;
    margin: 10px 0;
    justify-content: space-between;
  }
  .form-control {
    width: 100%;
  }
  .text-danger {
    color: #cd1916;
  }
  .form-group {
    display: flex;
    flex-direction: column;
  }
  .form-padding {
    padding: 20px;
  }
  form input[type="submit"] {
    font-size: 40px;
    cursor: pointer;
  }
  .btn-submit {
    cursor: pointer;
  }
`;
