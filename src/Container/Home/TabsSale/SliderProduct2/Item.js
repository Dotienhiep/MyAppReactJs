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
  background-image: url("/assets/images/boder-product1.png");
  background-size: 95% auto;
  background-repeat: no-repeat;
  background-position: center top 5px;
  transition: transform 0.3s ease, filter 0.3s ease;
  &:hover {
    transform: translateY(-1px);
    filter: brightness(80%);
  }
  &:hover {
    transform: scale(1.02);
  }
  &:hover .list-btn {
    display: block;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto; //responsive
    width: fit-content;
    @media ${device.desktop} {
      img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.desktopA} {
      img {
        width: 160px;
        height: 160px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.desktopXS} {
      img {
        width: 170px;
        height: 170px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.laptopL} {
      img {
        width: 140px;
        height: 140px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.laptopS} {
      img {
        width: 170px;
        height: 170px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.laptopX} {
      img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.tablet} {
      img {
        width: 290px;
        height: 290px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
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
