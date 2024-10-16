import styled from "styled-components";
import { device } from "../../../contants";

export const FeaturePolicyWrapper = styled.div`
  max-width: 100%; /* Đặt chiều rộng tối đa cho container */
  padding: 0 100px; /* Khoảng cách 100px ở 2 bên */
  margin: 30px auto; /* Căn giữa phần tử */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media ${device.laptop} {
    padding: 0 50px;
  }
  @media ${device.tablet} {
    padding: 0 50px;
  }
  @media ${device.mobile} {
    padding: 0 30px;
  }
  @media ${device.mobileL} {
    padding: 0 15px;
  }
  @media ${device.mobileM} {
    padding: 0 15px;
  }
  @media ${device.mobileS} {
    padding: 0 15px;
  }
  .feature-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;

    @media ${device.laptopM} {
      width: 50%; /* Hiển thị 2 item trên một hàng ở kích thước tablet */
    }

    @media ${device.tablet} {
      width: 100%;
      flex-direction: row;
      justify-content: flex-start;
    }
  }
  .title-feature {
    padding: 15px 0;
    font-size: 17px;
    font-weight: bold;
    @media ${device.tablet} {
      padding: 0;
    }
  }
  .content-feature {
    font-size: 16px;
  }
  .feature-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.tablet} {
      justify-content: center;
      align-items: flex-start;
      margin-left: 10px;
    }
  }
`;
