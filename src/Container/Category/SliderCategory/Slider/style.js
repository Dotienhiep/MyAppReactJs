import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;

  .wrapper-item {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .slider-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
  }
  .slider-content img {
    width: 100%;
    object-fit: cover;
  }
  .list-dot {
    display: flex;
    justify-content: center;
    z-index: 200;
    margin-top: 5px;
  }
  .btn-prev {
    margin-right: -50px;
    z-index: 100;
    font-size: 2rem;
    padding: 5px 15px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
  .btn-next {
    margin-left: -50px;
    z-index: 100;
    font-size: 2rem;
    padding: 5px 15px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
  .dot {
    border-radius: 40px;
    width: 50px;
    height: 3px;
    background-color: #000;
    margin-bottom: 10px;
    cursor: pointer;
    margin-right: 6px;
  }
  .active {
    background-color: red;
  }
`;
