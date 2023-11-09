import React from "react";
import { FooterWrapper } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer">
        <div className="left">
          <ul className="">
            <li>
              <a href="#">Giới thiệu về công ty</a>
            </li>
            <li>
              <a href="#">Câu hổi thường gặp khi mua hàng</a>
            </li>
            <li>
              <a href="#">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="#">Quy chế hoạt động</a>
            </li>
            <li>
              <a href="#">Kiểm tra hoá đơn điện tử</a>
            </li>
            <li>
              <a href="#">Tra cứu thông tin bảo hành</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Tin tuyển dụng</a>
            </li>
            <li>
              <a href="#">Tin khuyến mại</a>
            </li>
            <li>
              <a href="#">Hướng dẫn mua online</a>
            </li>
            <li>
              <a href="#">Hướng dẫn mua trả góp</a>
            </li>
            <li>
              <a href="#">Chính sách trả góp</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Hệ thống của hàng</a>
            </li>
            <li>
              <a href="#">Hệ thống bảo hành</a>
            </li>
            <li>
              <a href="#">Bảo hành doanh nghiệp</a>
            </li>
            <li>
              <a href="#">Gới thiệu máy đổi trả</a>
            </li>
            <li>
              <a href="#">Chính sách đổi trả</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="top">
            <div className="">
              <span className="title-f">Tư vấn mua hàng</span>(Miễn phí)
            </div>
            <div className="">
              <span className="title-c">0964480434</span>(Nhánh 1)
            </div>
            <div className="">
              <span className="title-f">Hỗ trợ kĩ thuật</span>
            </div>
            <span className="">
              <span className="title-c">0865848241</span>(Nhánh 2)
            </span>
          </div>
          <div className="bottom">
            <div className="">
              <span className="title-f">Góp ý khiếu nại</span>( 8h00 - 22h00)
            </div>
            <div className="">
              <span className="title-c">0964480434</span>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
