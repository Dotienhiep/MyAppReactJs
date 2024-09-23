import styled from "styled-components";
import { device } from "./../../../contants";

export const FilterWrapper = styled.div`
  width: 100%;
  margin: 50px 0;
`;
export const ListFilterWrapper = styled.div`
  width: 100%;
  .list-filter {
    display: flex;
    margin: 0 100px;
    flex-wrap: wrap;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    @media ${device.laptop} {
      margin: 0 50px;
    }
    @media ${device.tablet} {
      margin: 0 50px;
    }
    @media ${device.mobile} {
      margin: 0 30px;
    }
    @media ${device.mobileL} {
      margin: 0 15px;
    }
    @media ${device.mobileM} {
      margin: 0 15px;
    }
    @media ${device.mobileS} {
      margin: 0 15px;
    }
  }
`;
export const FilterItemWrapper = styled.div`
  width: calc((100% / 6));
  display: flex;
  background-color: #fff;
  flex-direction: column;
  border: 0.5px solid #e6e6fa;
  @media ${device.laptop} {
    width: calc((100% / 4));
  }
  @media ${device.tablet} {
    width: calc((100% / 4));
  }
  @media ${device.mobile} {
    width: calc((100% / 2));
  }
  @media ${device.mobileL} {
    width: calc((100% / 2));
  }
  @media ${device.mobileM} {
    width: calc((100% / 2));
  }
  @media ${device.mobileS} {
    width: calc((100% / 2));
  }
  .category-filter {
    text-decoration: none;
  }
  .content-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    transition: box-shadow 0.3s ease; /* Thêm transition để hiệu ứng mượt mà */
  }
  .content-filter:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    position: relative; /* Thêm position relative để box-shadow không bị cắt */
    z-index: 1; /* Đảm bảo phần tử hover ở trên các phần tử khác */
  }
  .content-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #e6e6fa;
    margin-bottom: 10px;
  }
`;
