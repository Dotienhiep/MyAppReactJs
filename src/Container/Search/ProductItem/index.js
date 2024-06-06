import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faInbox,
  // faMedal,
  faMemory,
  faMicrochip,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { ProductItemWrapper } from "../style";
import { Link } from "react-router-dom";
// import Memory from "./Memory";
// import Price from "./Price";

const ProductItem = ({ onAdd, listData }) => {
  // const [currentIndexActive, setCurrentIndexActive] = useState(0);
  const image = "https://api-nodejs-backend.onrender.com/";

  // const handleChangeTab = (index) => {
  //   setCurrentIndexActive(index);
  // };
  // const renderTabContent = () => {
  //   switch (currentIndexActive) {
  //     case 0:
  //       return (
  //         // <SliderProduct
  //         //   listData={listData}
  //         //   isInfinity={true}
  //         // />
  //         <div>
  //           <Price data={listData.listProductGroupDetail[0]} />
  //         </div>
  //       );
  //     case 1:
  //       return (
  //         <div>
  //           <Price data={listData.listProductGroupDetail[1]} />
  //         </div>
  //       );
  //     case 2:
  //       return (
  //         <div>
  //           <Price data={listData.listProductGroupDetail[2]} />
  //         </div>
  //       );
  //     case 3:
  //       return (
  //         <div>
  //           <Price data={listData.listProductGroupDetail[3]} />
  //         </div>
  //       );
  //     default:
  //       return "";
  //   }
  // };
  // console.log("listData",listData);
  /* <Memory
  listData={listData}
  currentIndexActive={currentIndexActive}
  onChangeTab={handleChangeTab}>
  {renderTabContent()}
  </Memory> */
  function formatCurrency(price) {
    // Sử dụng hàm toLocaleString() để định dạng số tiền và thêm dấu chấm phân cách
    const formattedPrice = price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formattedPrice;
  }
  return (
    listData.quantity > 0 && (
      <ProductItemWrapper>
        <div className="product-wrapper">
          <Link className="link" to={`/product/${listData._id}`}>
            <div className="image">
              <img src={image.concat(listData.urlPicture)} alt="" />
            </div>
          </Link>
          <div className="content-pro">
            <Link className="link" to={`/product/${listData._id}`}>
              <span className="title">{listData.name}</span>
            </Link>
          </div>
          <div className="cost">
            <span>{formatCurrency(listData.price)}</span>
          </div>
          <div className="content">
            <div className="info">
              <div className="list-info">
                <div className="item-info cpu">
                  {listData.listAttrDetailShort
                    .slice(5, 6)
                    .map((item, index) => {
                      return (
                        <div className="" key={index}>
                          <FontAwesomeIcon
                            className="icon"
                            icon={faMicrochip}
                          />{" "}
                          {item.value}
                        </div>
                      );
                    })}
                </div>
                <div className="item-info screen">
                  {listData.listAttrDetailShort
                    .slice(0, 1)
                    .map((item, index) => {
                      const screen = item.value.split(", ");
                      return (
                        <div className="" key={index}>
                          <FontAwesomeIcon className="icon" icon={faMobile} />{" "}
                          {screen[0]}
                        </div>
                      );
                    })}
                </div>
                <div className="item-info ram">
                  {listData.listAttrDetailShort
                    .slice(3, 4)
                    .map((item, index) => {
                      const screen = item.value.split(", ");
                      return (
                        <div className="" key={index}>
                          <FontAwesomeIcon className="icon" icon={faMemory} />{" "}
                          {screen[0]}
                        </div>
                      );
                    })}
                </div>
                <div className="item-info memmory">
                  {listData.listAttrDetailShort
                    .slice(4, 5)
                    .map((item, index) => {
                      const screen = item.value.split(", ");
                      return (
                        <div className="" key={index}>
                          <FontAwesomeIcon className="icon" icon={faInbox} />{" "}
                          {screen[0]}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            {/* <div>{product.listAttrDetailShort.value}</div> */}
          </div>
          <div className="list-btn">
            <div className="list-btn-responsive">
              <Link to="/cart">
                <button onClick={() => onAdd(listData)} className="buy-now">
                  Mua ngay
                </button>
              </Link>
              <button className="cart" onClick={() => onAdd(listData)}>
                <FontAwesomeIcon className="icon" icon={faCartPlus} />
                Giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </ProductItemWrapper>
    )
  );
};

export default ProductItem;
