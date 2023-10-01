import styled from "styled-components";

export const PayWrapper = styled.div`
  width: 100%;
  height: auto;
  .banner-pay {
    background-image: url(/assets/images/banner-pay.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 300px;
  }
  .banner-pay img {
    width: 400px;
    height: auto;
    object-fit: cover;
    margin-top: 80px;
    margin-left: 100px;
  }
  .list-pay {
    margin: 50px 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .pay-item {
    width: calc((100% - 64px) / 3);
    border: 1px solid #cacaca;
    border-radius: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    margin-bottom: 32px;
  }
  .pay-item:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
  .icon-pay {
    border: 1px solid #ccc;
    font-size: 35px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    color: #cd1916;
  }
  .icon-pay:hover {
    border: 1px solid red;
    color: #cd1916;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;
