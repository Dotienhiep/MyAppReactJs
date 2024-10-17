import React from "react";
import { PayWrapper } from "./style";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlenderPhone,
  faFaucetDrip,
  faGamepad,
  faGlobe,
  faIdCard,
  faLightbulb,
  faMotorcycle,
  faPiggyBank,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";
import Copyright from "../../Components/Common/Copyright";
import DealNav from "../../Components/Common/DealNav";

const Pay = () => {
  const listPay = [
    {
      id: uuidv4(),
      icon: <FontAwesomeIcon icon={faIdCard} />,
      title: "Thẻ cào điện thoại",
    },
    {
      id: uuidv4(),
      icon: <FontAwesomeIcon icon={faGamepad} />,
      title: "Thẻ game",
    },
    {
      id: uuidv4(),
      icon: <FontAwesomeIcon icon={faLightbulb} />,
      title: "Tiền điện",
    },
    {
      id: uuidv4(),
      icon: <FontAwesomeIcon icon={faFaucetDrip} />,
      title: "Tiền nước",
    },
    {
      id: uuidv4(),
      icon: <FontAwesomeIcon icon={faGlobe} />,
      title: "Internet",
    },
    {
      id: uuidv4(),
      icon: <FontAwesomeIcon icon={faTv} />,
      title: "Truyền hình cap",
    },
    {
      id: uuidv4(),
      icon: <FontAwesomeIcon icon={faBlenderPhone} />,
      title: "Điện thoại trả sau",
    },
    {
      id: uuidv4(),
      icon: <FontAwesomeIcon icon={faPiggyBank} />,
      title: "Trả góp",
    },
    {
      id: uuidv4(),
      icon: <FontAwesomeIcon icon={faMotorcycle} />,
      title: "Bảo hiểm xe máy",
    },
  ];
  return (
    <PayWrapper>
      <Header />
      <DealNav />
      <div className="pay-content">
        <div className="banner-pay">
          <img src="/assets/images/banner-object-pay.png" alt="" />
        </div>
        <div className="list-pay">
          {listPay.map((item) => {
            return (
              <div key={item.id} className="pay-item">
                <div className="icon-pay">
                  <span className="">{item.icon}</span>
                </div>
                <span className="title-pay">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
      <Copyright />
    </PayWrapper>
  );
};

export default Pay;
