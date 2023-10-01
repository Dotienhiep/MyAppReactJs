import React from "react";
import { LaptopGamingWrapper } from "./style";
import { v4 as uuidv4 } from "uuid";
import ContentLaptop from "./ContentLaptop";

const LaptopGaming = () => {
  const listProduct = [
    {
      id: uuidv4(),
      image: "/assets/images/product1.png",
      title: "Xiaomi Series",
      content: "Ưu đãi đến 6,59 triệu",
    },
    {
      id: uuidv4(),
      image: "/assets/images/product2.png",
      title: "Readme Xiaomi Series",
      content: "Ưu đãi đến 700k",
    },
    {
      id: uuidv4(),
      image: "/assets/images/product3.png",
      title: "Redmi Series",
      content: "Ưu đãi đến 700k",
    },
    {
      id: uuidv4(),
      image: "/assets/images/product4.png",
      title: "Thiết bị thông minh",
      content: "Ưu đãi đến 2 triệu",
    },
  ];
  return (
    <LaptopGamingWrapper>
      <div className="bg-title">
        <img src="/assets/images/laptopgaming.png" alt="" />
      </div>
      <ContentLaptop listProduct={listProduct}></ContentLaptop>
    </LaptopGamingWrapper>
  );
};

export default LaptopGaming;
