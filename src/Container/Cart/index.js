import React, { useState, useEffect } from "react";
import { CartWrapper } from "./style";
import Header from "../../Components/Common/Header";
import Navigation from "./../Home/Navigation";
import Footer from "../../Components/Common/Footer";
import Copyright from "../../Components/Common/Copyright";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Input from "../../Components/Common/Input";
import Form from "./Form";

const Cart = ({ cartItems, onAdd, onRemove, onRemoveAll }) => {
  // console.log("cartItemCart", cartItems);
  //format
  function format(n, currency) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") + currency;
  }
  useEffect(() => {
    const form = document.querySelector(".form");
    if (cartItems.length === 0) {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  }, [cartItems.length]);
  //form input
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    textNote: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //logic
  const itemsPrice = cartItems.reduce((a, c) => a + c.amount * c.price, 0);
  const priceCart = format(itemsPrice, " VND");
  const taxPrice = Math.round(itemsPrice * 0.14);
  const thuePrice = format(taxPrice, " VND");
  const shippingPrice = priceCart > 10000000 ? 50000 : 20000;
  const ship = format(shippingPrice, " VND");
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const total = format(totalPrice, " VND");
  const orderItems = cartItems.reduce((arr, item) => {
    const product = {
      product: item._id,
      amount: item.amount,
    };
    arr.push(product);
    return arr;
  }, []);
  const order = {
    orderItems: orderItems,
    subTotal: itemsPrice,
    tax: taxPrice,
    shippingFee: shippingPrice,
    total: totalPrice,
  };
  const image = "https://api-nodejs-backend.onrender.com/";
  return (
    <CartWrapper>
      <Header />
      <Navigation />
      <div className="product-cart">
        {cartItems.length === 0 && (
          <div className="no-product">
            <img src="/assets/images/cart-no.png" alt="" />
            <p className="">Không có sản phẩm nào</p>
            <Link to="/">
              <button className="">Quay lại trang chủ</button>
            </Link>
          </div>
        )}
        <div className="content-cart">
          <div className="list-cart">
            {cartItems.map((item) => (
              <div key={item._id} className="list-product-cart">
                <div className="content-product-cart">
                  <div className="image-product-cart">
                    <img src={image.concat(item.urlPicture)} alt="" />
                  </div>
                  <div className="content-text">
                    <div className="title-product-cart">{item.nameExt}</div>
                    <div className="content-de-in">
                      <div className="de-in">
                        <button
                          onClick={() => onRemove(item)}
                          className="btn-decrement remove"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>{" "}
                        <span className="number">{item.amount}</span>
                        <button
                          onClick={() => onAdd(item)}
                          className="btn-increment add"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                      <div className="cost-cart text-right">
                        {item.amount} x {format(item.price, " VND")}
                      </div>
                    </div>
                  </div>
                  <div onClick={() => onRemoveAll(item)} className="icon-exist">
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                </div>
              </div>
            ))}
            {cartItems.length !== 0 && (
              <div className="list-price">
                <div className="box">
                  <div className="title-price">Tổng giá các sản phẩm :</div>
                  <div className="price-product">{priceCart}</div>
                </div>
                <div className="box">
                  <div className="title-price">Thuế sản phẩm :</div>
                  <div className="price-product">{thuePrice}</div>
                </div>
                <div className="box">
                  <div className="title-price">Tiền phí giao hàng :</div>
                  <div className="price-product">{ship}</div>
                </div>
                <div className="box">
                  <div className="title-price">
                    <strong>Tổng tiền tất cả sản phẩm :</strong>
                  </div>
                  <div className="price-product">
                    <strong>{total}</strong>
                  </div>
                </div>
                <hr />
              </div>
            )}
          </div>
          <div className="form">
            <div className="form-title">
              <span className="">Thông tin thanh toán</span>
            </div>
            <div className="content-form">
              <div className="text-form">
                <p>
                  Để tiếp tục đặt hàng, quý khách xin vui lòng nhập thông tin
                  bên dưới.
                </p>
                <p>
                  Bằng cách đặt hàng, bạn đồng ý với{" "}
                  <strong>Điều khoản giao dịch</strong> của Shop
                </p>
              </div>
              <div className="input-form">
                <Form order={order} />
                {/* <label htmlFor="">Ghi chú :</label>
                <textarea
                  className="textarea"
                  label=""
                  autoFocus={true}
                  name="textNote"
                  value={formData.textNote}
                  onChange={handleChange}
                  rows="7"
                  placeholder="Yêu cầu lắp đặt hoặc ghi chú thêm.."
                ></textarea>
                <div className="">
                  Bạn đã nhập <strong>{formData.textNote.length}</strong> kí tự
                  .Bạn còn <strong>{500 - formData.textNote.length}</strong> kí
                  tự nữa.
                </div> */}
              </div>
            </div>
            {/* <button className="btn-submit">
              <span onClick={handlePay}>Đặt hàng ngay</span>
              <p>Tư vấn viên sẽ gọi điện thoại xác nhận</p>
            </button> */}
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </CartWrapper>
  );
};
export default Cart;
