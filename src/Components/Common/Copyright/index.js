import React from "react";
import { CopyrightWrapper } from "./style";

const Copyright = () => {
  return (
    <CopyrightWrapper>
      <span>
        © 2001 - 2023 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số HM • GPĐKKD số
        0311609355 do Sở KHĐT TP.HN cấp ngày 08/03/2012. GP số 47/GP-TTĐT do sở
        TTTT TP HN cấp ngày 02/07/2018.
      </span>
      <ul>
        <li>Địa chỉ: Hà Nội</li>
        <li>Điện thoại: (028)73023456</li>
        <li>Email: hmshop@hm.com.vn</li>
        <li>Chịu trách nhiệm nội dung: Đỗ Tiến Hiệp.</li>
      </ul>
    </CopyrightWrapper>
  );
};

export default Copyright;
