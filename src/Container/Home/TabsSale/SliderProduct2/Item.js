import styled from "styled-components";
import { device } from "../../../../contants";

export default styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  padding: 15px 0;
  width: 94%;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-image: url("/assets/images/boder-product.png");
  background-repeat: no-repeat;
  background-position: center top 15px;
  transition: transform 0.3s ease, filter 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    filter: brightness(100%);
  }
  &:hover img {
    transform: scale(1.2);
  }
  &:hover .list-btn {
    display: block;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
  }
  img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
  .content {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }
  .content a {
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
    padding: 0 20px;
    white-space: nowrap; /* Ngăn text quá dài xuống dòng */
    overflow: hidden; /* Ẩn phần dư thừa của văn bản */
    text-overflow: ellipsis; /* Hiển thị dấu chấm ellipsis (...) */
    width: 350px; /* Độ rộng của phần tử chứa văn bản */
    font-family: "Helvetica Neue", Helvetica;
    @media ${device.laptopL} {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 300px;
    }
    @media ${device.tablet} {
    }
  }
  .content .title:hover {
    color: #cb1a21;
  }
  .content .title:active {
    color: #8a2be2;
  }
  a {
    text-decoration: none;
  }
`;
