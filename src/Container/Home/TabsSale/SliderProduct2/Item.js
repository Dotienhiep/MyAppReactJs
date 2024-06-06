import styled from "styled-components";
import { device } from "../../../../contants";

export default styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  padding: 15px 0 3px 0;
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
    margin: 40px auto; //responsive
    width: fit-content;
    @media ${device.desktopS} {
      & {
        margin: 38px auto;
      }
      img {
        width: 170px;
        height: 170px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.desktopA} {
      & {
        margin: 50px auto;
      }
      img {
        width: 170px;
        height: 170px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.desktopXS} {
      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.desktopXM} {
      .image {
        margin: 40px auto;
      }
      img {
        width: 155px;
        height: 155px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.desktopM} {
      .image {
        margin: 30px auto;
      }
      img {
        width: 160px;
        height: 160px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.laptopL} {
      & {
        margin: 35px auto;
      }
      img {
        width: 140px;
        height: 140px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.laptopS} {
      img {
        width: 190px;
        height: 190px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.laptopM} {
      & {
        margin: 50px auto;
      }
      img {
        width: 160px;
        height: 160px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.laptopX} {
      img {
        width: 210px;
        height: 210px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.laptop} {
      & {
        margin: 40px auto;
      }
      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.tablet} {
      & {
        margin: 40px auto;
      }
      img {
        width: 245px;
        height: 245px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.mobile} {
      img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.mobileL} {
      img {
        width: 140px;
        height: 140px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.mobileM} {
      img {
        width: 130px;
        height: 130px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.mobileS} {
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
  }
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
  .content {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    justify-content: flex-start;
  }
  .content a {
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
    padding: 0;
    width: 280px;
    white-space: nowrap; /* Ngăn text quá dài xuống dòng */
    overflow: hidden; /* Ẩn phần dư thừa của văn bản */
    text-overflow: ellipsis; /* Hiển thị dấu chấm ellipsis (...) */ /* Độ rộng của phần tử chứa văn bản */
    font-family: "Helvetica Neue", Helvetica;
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
