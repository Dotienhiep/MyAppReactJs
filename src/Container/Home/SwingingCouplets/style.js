import styled from "styled-components";

export const SwingingCoupletsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 370px;
  width: 100%; /* Điều chỉnh kích thước của wrapper theo ý của bạn */
  height: auto; /* Điều chỉnh kích thước của wrapper theo ý của bạn */
  margin-bottom: 50px;
  background-color: transparent;
  z-index: 1000000;

  .couplet {
  width: 100px; /* Điều chỉnh kích thước của câu đối theo ý của bạn */
  height: auto; /* Điều chỉnh kích thước của câu đối theo ý của bạn */
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  transform-origin: top;
  animation: ring .6s infinite ease-in-out alternate;
}

@keyframes ring {
  0% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}

.bordered-image {
  display: block;
  max-width: 100%; /* Điều chỉnh kích thước tối đa của hình ảnh */
  height: auto;
  /* border: 5px solid #000; Đặt độ dày và màu sắc cho viền */
}
`;
