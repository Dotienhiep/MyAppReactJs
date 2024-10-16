import React from "react";
import { FeaturePolicyWrapper } from "./style";
import { v4 as uuidv4 } from "uuid";

const FeaturePolicy = () => {
  const listFeature = [
    {
      id: uuidv4(),
      image: "/assets/images/policy3.svg",
      title: "Thương hiệu đảm bảo",
      content: "Nhập khẩu, bảo hành chính hãng",
    },
    {
      id: uuidv4(),
      image: "/assets/images/policy4.svg",
      title: "Đổi trả dễ dàng",
      content: "Theo chính sách đổi trả tại HM Shop",
    },
    {
      id: uuidv4(),
      image: "/assets/images/policy2.svg",
      title: "Sản phẩm chất lượng",
      content: "Đảm bảo tương thích và độ bền cao",
    },
    {
      id: uuidv4(),
      image: "/assets/images/policy1.svg",
      title: "Giao hàng tận nơi",
      content: "Tại 63 tỉnh thành",
    },
  ];
  return (
    <FeaturePolicyWrapper>
      {listFeature.map((item) => {
        return (
          <div className="feature-item">
            <div className="image-feature">
              <img src={item.image} alt="" />
            </div>
            <div className="feature-content">
              <div className="title-feature">{item.title}</div>
              <div className="content-feature">{item.content}</div>
            </div>
          </div>
        );
      })}
    </FeaturePolicyWrapper>
  );
};

export default FeaturePolicy;
