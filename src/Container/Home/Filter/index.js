import React from "react";
import ListFilter from "./ListFilter";
import { FilterWrapper } from "./style";
import { v4 as uuidv4 } from "uuid";

const Filter = () => {
  const listFilter = [
    {
      id: uuidv4(),
      image: "assets/images/icon-mobile.png",
      title: "Điện thoại",
      nameAscii: "dien-thoai",
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-laptop.png",
      title: "Laptop",
      nameAscii: "may-tinh-xach-tay",
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-pc.png",
      title: "PC - Lắp ráp",
      nameAscii: "may-tinh-de-ban",
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-tablet.png",
      title: "Máy tính bảng",
      nameAscii: "may-tinh-bang",
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-smart.png",
      title: "Thiết bị thông minh",
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-houseware.png",
      title: "Gia dụng",
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-apple.png",
      title: "Apple",
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-samsung.png",
      title: "Samsung",
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-smartwatch.png",
      title: "Đồng hồ thông minh",
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-accessories.png",
      title: "Phụ kiện",
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-screen.png",
      title: "Màn hình",
      nameAscii: "man-hinh",
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-tcdm.png",
      title: "Máy cũ",
    },
  ];
  return (
    <FilterWrapper>
      <ListFilter listFilter={listFilter} />
    </FilterWrapper>
  );
};

export default Filter;
