import React from "react";
import { DealNavWrapper } from "./style";
import { v4 as uuidv4 } from "uuid";

const DealNav = () => {
  const listDeal = [
    {
      id: uuidv4(),
      image: "/assets/images/dealnav3.png",
      title: "Deal chớp nhoáng",
    },
    {
      id: uuidv4(),
      image: "/assets/images/deadnav1.png",
      title: "Đặc quyền người FPT mua iPhone 16 rẻ hơn 2 triệu",
    },
    {
      id: uuidv4(),
      image: "/assets/images/dealnav2.png",
      title: "Đổi máy 4G tặng đến 600K",
    },
  ];
  console.log("imaggeee", listDeal.image);

  return (
    <DealNavWrapper>
      {listDeal?.map((item) => {
        return (
          <div className="list-deal" key={item.id}>
            <div className="image-deal">
              <img src={item.image} alt="" />
            </div>
            <div className="title-deal">{item.title}</div>
          </div>
        );
      })}
    </DealNavWrapper>
  );
};

export default DealNav;
