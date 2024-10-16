import React, { useState, useEffect } from "react";
import { FooterWrapper } from "./style";
import { Collapse } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmazonPay,
  faApplePay,
  faDiscord,
  faFacebook,
  faGithub,
  faGooglePay,
  faPaypal,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const { Panel } = Collapse;

const Footer = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 992);

  // Cập nhật trạng thái dựa trên kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <FooterWrapper>
      <div className="footer">
        <div className="footer-store-chain">
          <div className="footer-store-chain-content">
            <h3>Hệ thống HM Shop trên toàn quốc</h3>
            <span>
              Bao gồm Cửa hàng HM Shop, Trung tâm Laptop, HM.Studio, Garmin
              Brand Store
            </span>
          </div>
          <div className="footer-store-chain-button">
            <button type="">Xem tất cả cửa hàng</button>
          </div>
        </div>
        {/* Footer Content */}
        <div className="footer-content">
          <div className="footer-connect">
            {isMobileView ? (
              <Collapse accordion>
                <Panel header="Kết nối với HMShop" key="1">
                  <ul className="footer-list-contact">
                    <li className="facebook" data-tooltip="Facebook">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        size="2x"
                        className="fa-icon"
                      />
                    </li>
                    <li className="youtube" data-tooltip="YouTube">
                      <FontAwesomeIcon
                        icon={faYoutube}
                        size="2x"
                        className="fa-icon"
                      />
                    </li>
                    <li className="github" data-tooltip="GitHub">
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="2x"
                        className="fa-icon"
                      />
                    </li>
                    <li className="discord" data-tooltip="Discord">
                      <FontAwesomeIcon
                        icon={faDiscord}
                        size="2x"
                        className="fa-icon"
                      />
                    </li>
                  </ul>
                  <ul className="footer-list-con">
                    <li>Tổng đài miễn phí</li>
                    <li>Tư vấn khách hàng</li>
                    <li>0964480434</li>
                    <li>Hỗ trợ kĩ thuật</li>
                    <li>0964480434</li>
                    <li>Góp ý khiếu nại</li>
                    <li>0964480434</li>
                  </ul>
                </Panel>
                <Panel header="Về chúng tôi" key="2">
                  <ul className="footer-list-we">
                    <li>Giới thiệu về công ty</li>
                    <li>Quy chế hoạt động</li>
                    <li>F.Friends - Bạn đồng hành</li>
                    <li>Tin tức khuyến mại</li>
                    <li>Giới thiệu máy đổi trả</li>
                    <li>Hướng dẫn mua hàng & thanh toán online</li>
                    <li>Đại lý uỷ quyền và TTBH uỷ quyền của Apple</li>
                    <li>Tra cứu hoá đơn điện tử</li>
                    <li>Tra cứu bảo hành</li>
                    <li>Câu hỏi thường gặp</li>
                  </ul>
                </Panel>
                <Panel header="CHÍNH SÁCH" key="3">
                  <ul className="footer-list-we">
                    <li>Chính sách bảo hành</li>
                    <li>Chính sách đổi trả</li>
                    <li>Chính sách bảo mật</li>
                    <li>Chính sách trả góp</li>
                    <li>Chính sách khui hộp sản phẩm</li>
                    <li>Chính sách giao hàng & lắp đặt</li>
                    <li>Chính sách mạng di động FPT</li>
                    <li>Chính sách thu thập & xử lý dữ liệu cá nhân</li>
                    <li>Quy định về hỗ trợ kỹ thuật & sao lưu dữ liệu</li>
                  </ul>
                </Panel>
              </Collapse>
            ) : (
              <div className="footer-desktop">
                <div className="footer-section">
                  <h3>Kết nối với HMShop</h3>
                  <ul className="footer-list-contact">
                    <li className="facebook" data-tooltip="Facebook">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        size="2x"
                        className="fa-icon"
                      />
                    </li>
                    <li className="youtube" data-tooltip="YouTube">
                      <FontAwesomeIcon
                        icon={faYoutube}
                        size="2x"
                        className="fa-icon"
                      />
                    </li>
                    <li className="github" data-tooltip="GitHub">
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="2x"
                        className="fa-icon"
                      />
                    </li>
                    <li className="discord" data-tooltip="Discord">
                      <FontAwesomeIcon
                        icon={faDiscord}
                        size="2x"
                        className="fa-icon"
                      />
                    </li>
                  </ul>
                  <ul className="footer-list-con">
                    <li>Tổng đài miễn phí</li>
                    <li>Tư vấn khách hàng</li>
                    <li>0964480434</li>
                    <li>Hỗ trợ kĩ thuật</li>
                    <li>0964480434</li>
                    <li>Góp ý khiếu nại</li>
                    <li>0964480434</li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h3>Về Chúng Tôi</h3>
                  <ul className="footer-list-we">
                    <li>Giới thiệu về công ty</li>
                    <li>Quy chế hoạt động</li>
                    <li>F.Friends - Bạn đồng hành</li>
                    <li>Tin tức khuyến mại</li>
                    <li>Giới thiệu máy đổi trả</li>
                    <li>Hướng dẫn mua hàng & thanh toán online</li>
                    <li>Đại lý uỷ quyền và TTBH uỷ quyền của Apple</li>
                    <li>Tra cứu hoá đơn điện tử</li>
                    <li>Tra cứu bảo hành</li>
                    <li>Câu hỏi thường gặp</li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h3>CHÍNH SÁCH</h3>
                  <ul className="footer-list-we">
                    <li>Chính sách bảo hành</li>
                    <li>Chính sách đổi trả</li>
                    <li>Chính sách bảo mật</li>
                    <li>Chính sách trả góp</li>
                    <li>Chính sách khui hộp sản phẩm</li>
                    <li>Chính sách giao hàng & lắp đặt</li>
                    <li>Chính sách mạng di động FPT</li>
                    <li>Chính sách thu thập & xử lý dữ liệu cá nhân</li>
                    <li>Quy định về hỗ trợ kỹ thuật & sao lưu dữ liệu</li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h3>Hỗ Trợ Thanh Toán</h3>
                  <ul className="footer-list-contact">
                    <li className="paypal" data-tooltip="Paypal">
                      <FontAwesomeIcon
                        icon={faPaypal}
                        size="2x"
                        className="fa-icon"
                      />
                    </li>
                    <li className="googlepay" data-tooltip="GooglePay">
                      <FontAwesomeIcon
                        icon={faGooglePay}
                        size="2x"
                        className="fa-icon"
                      />
                    </li>
                    <li className="applepay" data-tooltip="ApplePay">
                      <FontAwesomeIcon
                        icon={faApplePay}
                        size="2x"
                        className="fa-icon"
                      />
                    </li>
                    <li className="amazonpay" data-tooltip="AmazonPay">
                      <FontAwesomeIcon
                        icon={faAmazonPay}
                        size="2x"
                        className="fa-icon"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          {/* Thêm các phần khác trong footer */}
          <div className="footer-contact">{/* Nội dung liên hệ */}</div>
          <div className="footer-policy">{/* Nội dung chính sách */}</div>
          <div className="footer-sp-pay">{/* Nội dung thanh toán */}</div>
        </div>
        {/* Bản quyền */}
        <div className="footer-copyright">
          © 2024 HM Shop. All rights reserved.
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
