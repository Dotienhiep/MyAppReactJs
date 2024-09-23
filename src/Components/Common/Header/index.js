import React, { useState } from "react";
import { HeaderWrapper } from "./style";
import Input from "./../Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReceipt,
  faFileInvoice,
  faCartShopping,
  faMagnifyingGlass,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ cartItemsCount }) => {
  const [formData, setFormData] = useState({
    nameproduct: "",
  });
  const [key, setKey] = useState("");
  const [inputError, setInputError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setKey(value);
    setFormData({
      ...formData,
      [name]: value,
    });
    setInputError(false); // Reset error khi người dùng nhập
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (key.trim() === "") {
      setInputError(true); // Hiển thị error nếu input rỗng
      return;
    }

    navigate(`/search/${key}`);
  };

  return (
    <HeaderWrapper className="header">
      <div className="header-left">
        <Link to="/">
          <span className="logo">
            <img src="/assets/images/logoshoplaptop.png" alt="logo" />
          </span>
          <div className="logoo">
            <span className="shop">Shop</span>
            <span className="com">.Com.vn</span>
          </div>
        </Link>
        <div className="input-header">
          <Input
            className="input-search"
            label=""
            placeholder="Nhập tên laptop, điện thoại,... cần tìm"
            autoFocus={true}
            type="text"
            name="nameproduct"
            value={key}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          {inputError && (
            <span className="error-message">
              Vui lòng nhập từ khóa tìm kiếm.
            </span>
          )}
        </div>
        <Link to={`/search/${key}`}>
          <button
            className="btn-search"
            onClick={handleSearch}
            disabled={!key.trim()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </Link>
      </div>
      <div className="header-right">
        <ul className="">
          <li>
            <Link to="/infor">
              <span className="icon-right-header">
                <FontAwesomeIcon icon={faReceipt} />
              </span>
              <span className="title-icon-header">Thông tin hay</span>
            </Link>
          </li>
          <li>
            <Link to="/pay">
              <span className="icon-right-header">
                <FontAwesomeIcon icon={faFileInvoice} />
              </span>
              <span className="title-icon-header">Thanh toán & tiện ích</span>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <span className="icon-right-header">
                <FontAwesomeIcon icon={faCircleUser} />
              </span>
              <span className="title-icon-header">Tài khoản của tôi</span>
              {/* login */}
            </Link>
          </li>
          <li>
            <Link className="cart-icon" to="/cart">
              <span className="icon-right-header">
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              <span className="title-icon-header">Giỏ hàng</span>
              <span
                class={
                  "number-total-product " + (cartItemsCount > 0 ? "" : "hide")
                }
              >
                {cartItemsCount > 0 ? cartItemsCount : ""}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
