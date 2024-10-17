import styled from "styled-components";
import { device } from "../../contants";

export const SearchWrapper = styled.div`
  .list-search {
    display: flex;
    flex-wrap: wrap;
    margin: 100px 100px 50px 100px;
    justify-content: flex-start; /* Đảm bảo các phần tử bắt đầu từ bên trái */
    align-items: flex-start;
    gap: 15px;
    @media ${device.laptop} {
      margin: 50px 50px 30px 50px;
    }
    @media ${device.tablet} {
      margin: 50px 50px 30px 50px;
    }
    @media ${device.mobile} {
      margin: 50px 30px 20px 30px;
    }
    @media ${device.mobileL} {
      margin: 50px 15px 20px 15px;
    }
    @media ${device.mobileM} {
      margin: 50px 15px 20px 15px;
    }
    @media ${device.mobileS} {
      margin: 50px 15px 20px 15px;
    }
  }
  .list-btn {
    margin: 10px 0px;
    width: 100%;
  }
  .list-btn .list-bth-responsive {
    display: flex;
    justify-content: space-between;
  }
  .search-no-product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
  }
  .search-no-product img {
    display: block;
    width: 300px;
  }
  .title-search {
    margin: 20px auto;
    font-size: 20px;
    color: #cd1916;
    font-weight: bold;
  }
`;
export const ProductItemWrapper = styled.div`
  display: flex;
  width: calc((100% - (6 * 15px)) / 7);
  border: 10px solid red;
  margin-top: 20px;
  /* flex: 0 0 20%;  */
  flex-direction: column;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  /* background-image: url("/assets/images/boder-product1.png");
  background-size: 95% auto;
  background-repeat: no-repeat;
  background-position: center top 5px; */
  background-color: #fff;
  transition: transform 0.3s ease, filter 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    filter: brightness(90%);
  }
  &:hover img {
    transform: scale(1.12);
  }
  @media ${device.desktop} {
    width: calc((100% - (6 * 15px)) / 7);
  }
  @media ${device.desktopXS} {
    width: calc((100% - (5 * 15px)) / 6);
  }
  @media ${device.desktopA} {
    width: calc((100% - (5 * 15px)) / 6);
  }
  @media ${device.desktopS} {
    width: calc((100% - (4 * 15px)) / 5);
  }
  @media ${device.desktopXM} {
    width: calc((100% - (4 * 15px)) / 5);
  }
  @media ${device.desktopM} {
    width: calc((100% - (3 * 15px)) / 4);
  }
  @media ${device.laptopL} {
    width: calc((100% - (3 * 15px)) / 4);
  }
  @media ${device.laptopS} {
    width: calc((100% - (3 * 15px)) / 4);
  }
  @media ${device.laptopM} {
    width: calc((100% - (2 * 15px)) / 3);
  }
  @media ${device.laptopX} {
    width: calc((100% - 15px) / 2);
  }
  @media ${device.laptop} {
    width: calc((100% - 15px) / 2);
  }
  @media ${device.tablet} {
    width: calc((100% - 15px) / 2);
  }
  @media ${device.mobile} {
    width: calc((100% - 15px) / 2);
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
    margin: 50px auto;
    @media ${device.desktopS} {
      img {
        width: 190px;
        height: 190px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.desktopA} {
      img {
        width: 150px;
        height: 150px;
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
        margin: 10px auto;
      }
      img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.desktopM} {
      .image {
        margin: 20px auto;
      }
      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.laptopL} {
      .image {
        margin: 10px auto;
      }
      img {
        width: 130px;
        height: 130px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.laptopS} {
      img {
        width: 130px;
        height: 130px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.laptopM} {
      img {
        width: 140px;
        height: 140px;
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
        margin: 50px auto;
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
        margin: 20px auto;
      }
      img {
        width: 130px;
        height: 130px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.mobile} {
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
    @media ${device.mobileL} {
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
    @media ${device.mobileM} {
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
    @media ${device.mobileS} {
      & {
        margin: 25px auto;
      }
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }
  }
  img {
    width: 120px;
    height: 120px;
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
  }
  .cost {
    margin: 20px 0;
    border-radius: 30px;
    font-weight: bold;
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
    padding: 4px 7px;
    font-size: 15px;
    border-radius: 5px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    @media ${device.mobile} {
      padding: 3px 4px;
      font-size: 10px;
      border-radius: 5px;
      border: none;
      color: #fff;
      cursor: pointer;
      font-weight: bold;
    }
    @media ${device.mobileL} {
      padding: 3px 4px;
      font-size: 10px;
      border-radius: 5px;
      border: none;
      color: #fff;
      cursor: pointer;
      font-weight: bold;
    }
    @media ${device.mobileM} {
      padding: 3px 4px;
      font-size: 10px;
      border-radius: 5px;
      border: none;
      color: #fff;
      cursor: pointer;
      font-weight: bold;
    }
    @media ${device.mobileS} {
      padding: 3px 4px;
      font-size: 10px;
      border-radius: 5px;
      border: none;
      color: #fff;
      cursor: pointer;
      font-weight: bold;
    }
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
