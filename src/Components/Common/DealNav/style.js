import styled from "styled-components";
import { device } from "./../../../contants";

export const DealNavWrapper = styled.div`
  width: 100%; /* Trừ đi 100px mỗi bên */
  height: 35px;
  color: #000;
  background-color: #f2f4f6;
  position: fixed;
  z-index: 10000000;
  top: 53px;
  padding-left: 100px;
  display: flex;
  overflow: hidden; /* Loại bỏ thanh cuộn ngang */

  @media ${device.laptopM} {
    display: none;
  }

  .list-deal {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Đảm bảo các phần tử cách đều nhau */
    /* Chiếm hết chiều rộng container */
    padding-right: 20px; /* Thêm padding cho khoảng cách giữa các phần tử */
    box-sizing: border-box; /* Đảm bảo padding không làm tăng chiều rộng thực tế */
  }

  .list-deal .image-deal {
    width: 32px;
    height: 32px;
    display: block;
    margin-right: 15px;
  }

  .list-deal .image-deal img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .list-deal .title-deal {
    display: flex;
    font-weight: bolder;
    justify-content: center;
    align-items: center;
  }
`;
