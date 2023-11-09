import React from "react";
import { NavItemWrapper } from "./../style";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  const { NavItem } = props;
  const { title, icon, listSubMenu, listProduct, nameAscii } = NavItem;
  const {
    titleTop,
    titleBottom,
    titleCenter,
    listCenter,
    listTop,
    listBottom,
    titleCost,
    listCost,
    titleProduct,
    imageRight,
  } = listSubMenu;
  return (
    <NavItemWrapper className="nav-wrapper">
      <li className="nav-item">
        {nameAscii ? (
          <Link to={`/${nameAscii}`}>
            {icon}
            {title}
          </Link>
        ) : (
          <Link to={`/`}>
            {icon}
            {title}
          </Link>
        )}
        <div className="submenu">
          <div className="submenu-content">
            <div className="left">
              <div className="top">
                <h3 className="title">{titleTop}</h3>
                <ul className="list-top">
                  {listTop.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="center">
                <h3 className="title">{titleCenter}</h3>
                <ul className="list-center">
                  {listCenter.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bottom">
                <h3 className="title">{titleBottom}</h3>
                <ul className="list-bottom">
                  {listBottom.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cost">
              <h3 className="title">{titleCost}</h3>
              <ul className="list-cost">
                {listCost.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="product">
              <h3 className="title-product">{titleProduct}</h3>
              {listProduct.map((item) => {
                return (
                  <div key={item.id} className="product-item">
                    <div className="product-image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="content">
                      <span className="name-product">{item.title}</span>
                      <span className="cost-product">{item.cost}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="image">
              <img src={imageRight} alt="" />
            </div>
          </div>
        </div>
      </li>
    </NavItemWrapper>
  );
};
export default NavItem;
