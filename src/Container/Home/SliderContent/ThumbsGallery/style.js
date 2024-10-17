import styled from "styled-components";
// import { device } from "../../../../contants";

export const ThumbsGalleryWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto; /* Đặt hai hàng cho hai phần */
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .swiper-slide {
    cursor: pointer;
  }

  .swiper-slide img {
    border-radius: 10px; /* Tùy chỉnh viền cho hình ảnh */
    object-fit: cover;
    width: 100%;
    height: 330px;
  }

  .swiper {
    margin: 0px auto; /* Căn giữa */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
  .list-image-thumbs {
    grid-row: 1; /* Phần Swiper chính chiếm hàng đầu */
    width: 100%;
    height: auto;
  }

  .list-content-thumbs {
    grid-row: 2; /* Phần Swiper thumbnails chiếm hàng dưới */
    width: 100%;
    height: auto;
    overflow-x: auto; /* Đảm bảo phần thumbnails không bị tràn khi thu nhỏ */
  }
  .content-thumbs-item {
    transition: all 0.3s ease-in-out;
    height: auto;
    display: flex;
    align-items: center; /* Căn giữa theo chiều dọc */
    justify-content: center; /* Căn giữa theo chiều ngang */
  }

  .content-thumbs-item > div {
    background-color: transparent !important;
    width: 100%;
    white-space: nowrap; /* Không cho phép ngắt dòng */
    overflow: hidden; /* Ẩn phần nội dung thừa */
    text-overflow: ellipsis; /* Thêm dấu "..." khi quá 1 dòng */
    line-height: 1.2em; /* Điều chỉnh chiều cao của mỗi dòng */
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #000; /* Màu sắc của nút */
    z-index: 10; /* Đảm bảo nút nằm trên các phần tử khác */
  }

  .swiper-button-prev {
    left: 10px; /* Điều chỉnh vị trí bên trái */
  }

  .swiper-button-next {
    right: 10px; /* Điều chỉnh vị trí bên phải */
  }
`;
