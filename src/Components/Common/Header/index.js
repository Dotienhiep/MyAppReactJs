import React, { useState, useEffect, useRef } from "react";
import { HeaderWrapper } from "./style";
import Input from "./../Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReceipt,
  faFileInvoice,
  faCartShopping,
  faMagnifyingGlass,
  faCircleUser,
  faBarsStaggered,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Burger from "./Burguer";

const Header = ({ cartItemsCount }) => {
  function convertMoney(amount) {
    // Format the number with commas as thousand separators
    const formattedAmount = new Intl.NumberFormat("vi-VN").format(amount);

    // Add the currency symbol (Vietnamese dong)
    return `${formattedAmount}đ`;
  }
  const [formData, setFormData] = useState({
    nameproduct: "",
  });
  const [key, setKey] = useState("");
  const [inputError, setInputError] = useState(false);
  const [hoveredType, setHoveredType] = useState(null); // State để lưu loại thương hiệu đang hover
  const navigate = useNavigate();
  const addSubMenuRef = useRef(null);
  const submenuLeftRef = useRef(null);
  const [open, setOpen] = useState(false);
  // const [hoveredListItem, setHoveredListItem] = useState(null); // Sử dụng useRef để lấy DOM của add-submenu
  const listNavigation = [
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/phone-icon.svg",
      brandType: "Điện thoại",
      nameAscii: "dien-thoai",
      listBrandProminent: {
        brandMain: [
          {
            icon: "/assets/images/apple-icon.png",
            title: "Iphone",
          },
          {
            icon: "/assets/images/samsung-icon.png",
            title: "Samsung",
          },
          {
            icon: "/assets/images/oppo.png",
            title: "Oppo",
          },
          {
            icon: "/assets/images/xiaomi-icon.png",
            title: "Xiaomi",
          },
        ],
        brandSub: [],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "Apple (iPhone)",
            series: [
              "iPhone 16 Series",
              "iPhone 15 Series",
              "iPhone 14 Series",
              "iPhone 13 Series",
              "iPhone 12 Series",
              "iPhone 11 Series",
            ],
          },
          {
            brand: "Xiaomi",
            series: [
              "Poco Series",
              "Xiaomi Series",
              "Redmi Note Series",
              "Redmi Series",
            ],
          },
          {
            brand: "Theo phân khúc giá",
            series: [
              "Dưới 2 triệu",
              "Từ 2 - 4 triệu",
              "Từ 4 - 7 triệu",
              "Từ 7 - 13 triệu",
              "Từ 13 - 20 triệu",
              "Trên 20 triệu",
            ],
          },
          {
            brand: "Samsung",
            series: [
              "Galaxy AI",
              "Galaxy S Series",
              "Galaxy Z Series",
              "Galaxy A Series",
              "Galaxy M Series",
            ],
          },
          {
            brand: "OPPO",
            series: ["OPPO Reno Series", "OPPO A Series"],
          },
          {
            brand: "Honor",
            series: ["Honor X Series", "Honor Series"],
          },
          {
            brand: "Thương hiệu khác",
            series: ["Tecno", "Realme", "Vivo", "ZTE", "Inoi", "Benco"],
          },
          {
            brand: "Phổ thông 4G",
            series: ["Nokia", "Itel", "Masstel", "Mobell", "Viettel"],
          },
        ],
      },
      bestSeller: [
        {
          id: uuidv4(),
          image: "/assets/images/iphone_16.png",
          title: "Iphone 16 pro max 1T",
          cost: "33990000",
        },
        {
          id: uuidv4(),
          image: "/assets/images/samsung_galaxy_z_fold6.png",
          title: "Iphone 16 pro",
          cost: "29990000",
        },
      ],
      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/laptop-icon.svg",
      brandType: "Laptop",
      nameAscii: "may-tinh-xach-tay",
      listBrandProminent: {
        brandMain: [
          {
            icon: "/assets/images/apple-icon.png",
            title: "Macbook",
          },
          {
            icon: "/assets/images/asus-icon.svg",
            title: "Asus",
          },
          {
            icon: "/assets/images/acer-icon.png",
            title: "Acer",
          },
          {
            icon: "/assets/images/hp-icon.png",
            title: "HP",
          },
        ],
        brandSub: [
          {
            image: "/assets/images/laptop-nav-1.png",
            title: "Gaming đồ họa",
          },
          {
            image: "/assets/images/laptop-nav-2.png",
            title: "Laptop AI",
          },
          {
            image: "/assets/images/laptop-nav-3.png",
            title: "Sinh Viên - Văn Phòng",
          },
          {
            image: "/assets/images/laptop-nav-4.png",
            title: "Mỏng nhẹ",
          },
          {
            image: "/assets/images/laptop-nav-5.png",
            title: "Doanh Nhân",
          },
        ],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "Apple (Macbook)",
            series: [
              "MacBook Air 13 inch",
              "MacBook Air 15 inch",
              "MacBook Pro 13 inch",
              "MacBook Pro 14 inch",
              "MacBook Pro 15 inch",
              "MacBook Pro 16 inch",
            ],
          },
          {
            brand: "Asus",
            series: [
              "Asus ZenBook",
              "Asus VivoBook",
              "Asus TUF Gaming",
              "Asus ROG",
            ],
          },
          {
            brand: "HP",
            series: [
              "HP 14/15 - 14s/15s",
              "HP cơ bản",
              "HP Pavilion",
              "HP Envy",
              "HP Victus",
              "HP ProBook",
            ],
          },
          {
            brand: "Theo phân khúc giá",
            series: [
              "Dưới 10 triệu",
              "Từ 10 - 15 triệu",
              "Từ 15 - 20 triệu",
              "Từ 20 - 25 triệu",
              "Từ 25 - 30 triệu",
              "Trên 30 triệu",
            ],
          },
          {
            brand: "Lenovo",
            series: [
              "Lenovo Gaming LOQ",
              "Lenovo Yoga",
              "Lenovo Legion Gaming",
              "Lenovo ThinkBook",
              "Lenovo ThinkPad",
              "Lenovo IdeaPad",
            ],
          },
          {
            brand: "Acer",
            series: [
              "Acer Swift",
              "Acer Nitro",
              "Acer Aspire",
              "Acer Aspire Gaming",
            ],
          },
          {
            brand: "MSI",
            series: [
              "MSI Gaming Thin GF / Cyborg",
              "MSI Gaming Katana/ Sword/ Crosshair",
              "MSI Modern",
            ],
          },
          {
            brand: "Dell",
            series: ["Dell XPS", "Dell Inspiron", "Dell Vostro"],
          },
          {
            brand: "Thương hiệu khác",
            series: ["Gigabyte", "Huawei", "Masstel", "Vaio"],
          },
          {
            brand: "Theo nhu cầu",
            series: [
              "Gaming - Đồ họa",
              "Laptop AI",
              "Sinh viên - Văn phòng",
              "Mỏng nhẹ",
            ],
          },
        ],
      },

      bestSeller: [
        {
          id: uuidv4(),
          image: "/assets/images/laptop-1-seller.png",
          title:
            "Laptop MSI Gaming Thin A15 B7UCX-240VN R5-7535HS/16GB/512GB/15.6 FHD/RTX2050 4GB/Win11_Balo",
          cost: "16490000",
        },
        {
          id: uuidv4(),
          image: "/assets/images/laptop-2-seller.jpg",
          title: "Laptop HP 14s-dq5121TU i3 1215U/8GB/512GB/14'FHD/Win11",
          cost: "10490000",
        },
      ],
      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/headphone-icon.svg",
      brandType: "Phụ kiện",
      nameAscii: "may-tinh-de-ban",
      listBrandProminent: {
        brandMain: [
          {
            icon: "/assets/images/apple-icon.png",
            title: "Apple",
          },
          {
            icon: "/assets/images/samsung-icon.png",
            title: "Samsung",
          },
          {
            icon: "/assets/images/belkin-icon.png",
            title: "Belkin",
          },
          {
            icon: "/assets/images/tomtoc-icon.png",
            title: "Tomtoc",
          },
        ],
        brandSub: [
          {
            image: "/assets/images/access-nav-1.png",
            title: "Sạc, cap",
          },
          {
            image: "/assets/images/access-nav-2.png",
            title: "Bao da, ốp lưng",
          },
          {
            image: "/assets/images/access-nav-3.png",
            title: "Sạc dự phòng",
          },
          {
            image: "/assets/images/access-nav-4.png",
            title: "Tai nghe không dây",
          },
          {
            image: "/assets/images/access-nav-5.png",
            title: "Miếng dán màn hình",
          },
        ],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "Phụ kiện di động",
            series: [
              "Sạc, Cáp",
              "Sạc dự phòng",
              "Bao da, Ốp lưng",
              "Miếng dán màn hình",
              "Bút cảm ứng",
              "Thẻ nhớ",
            ],
          },
          {
            brand: "Gaming Gear",
            series: [
              "Bàn ghế gaming",
              "Tay cầm chơi game",
              "Tai nghe",
              "Loa",
              "Chuột",
              "Bàn phím",
            ],
          },
          {
            brand: "Thiết bị mạng",
            series: [
              "Router",
              "USB Wifi",
              "Bộ mở rộng sóng",
              "Bộ phát Wifi di động",
            ],
          },
          {
            brand: "Phụ kiện Laptop",
            series: [
              "Chuột",
              "Bàn phím",
              "Balo, Túi xách",
              "Bút trình chiếu",
              "Webcam",
              "Giá đỡ",
              "Miếng lót chuột",
              "USB",
              "Sạc, Cáp",
            ],
          },
          {
            brand: "Phụ kiện khác",
            series: [
              "TV BOX",
              "Máy tính cầm tay",
              "Ví Magsafe iPhone",
              "Máy bơm cầm tay",
            ],
          },
          {
            brand: "Âm thanh, hình ảnh",
            series: ["Tai nghe", "Loa", "Camera", "Gimbal"],
          },
          {
            brand: "Thiết bị lưu trữ dữ liệu",
            series: ["USB", "Thẻ nhớ", "Ổ cứng di động"],
          },
        ],
      },

      bestSeller: [
        {
          id: uuidv4(),
          image: "/assets/images/access-1-seller.jpg",
          title: "Pin sạc dự phòng UmeTravel 10000mAh TRIP10000 Quick Charge",
          cost: "459000",
        },
        {
          id: uuidv4(),
          image: "/assets/images/access-2-seller.jpg",
          title: "Chuột Gaming Có Dây iCore GM03",
          cost: "399000",
        },
      ],
      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/apple-icon.png",
      brandType: "Chuyên trang Apple",
      nameAscii: "may-tinh-bang",
      listBrandProminent: {
        brandMain: [],
        brandSub: [
          {
            image: "/assets/images/iphone-icon-sub.png",
            title: "Iphone",
          },
          {
            image: "/assets/images/ipad-icon-sub.png",
            title: "Ipad",
          },
          {
            image: "/assets/images/macbook-icon-sub.png",
            title: "Macbook",
          },
          {
            image: "/assets/images/applewatch-icon-sub.png",
            title: "Apple Watch",
          },
          {
            image: "/assets/images/airpods-icon-sub.png",
            title: "Airpod",
          },
          {
            image: "/assets/images/imac-icon-sub.png",
            title: "Imac",
          },
          {
            image: "/assets/images/airtag-icon-sub.png",
            title: "Airtag",
          },
          {
            image: "/assets/images/sanphamkhac.png",
            title: "Sản Phẩm Khác.",
          },
        ],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "Sản phẩm Apple",
            series: [
              "iPhone",
              "iPad",
              "MacBook",
              "Apple Watch",
              "iMac",
              "Màn hình",
              "Phụ kiện Apple",
            ],
          },
          {
            brand: "Phụ kiện Apple",
            series: [
              "Sạc & Cáp",
              "Ốp lưng & Bao da",
              "Chuột & Trackpad",
              "Bàn phím",
              "Apple Pencil",
              "Airtag",
              "Phụ kiện khác",
            ],
          },
        ],
      },
      bestSeller: [
        {
          id: uuidv4(),
          image: "/assets/images/ip15promax.png",
          title: "Iphone 15 pro max",
          cost: "31990000",
        },
        {
          id: uuidv4(),
          image: "/assets/images/ip13.jpg",
          title: "Iphone 13",
          cost: "29990000",
        },
      ],
      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/samsung-icon.png",
      brandType: "Chuyên trang Samsung",
      listBrandProminent: {
        brandMain: [],
        brandSub: [
          {
            image: "/assets/images/1-dienthoai-ss.png",
            title: "Điện thoại",
          },
          {
            image: "/assets/images/1-tablet-ss.png",
            title: "Máy tính bảng",
          },
          {
            image: "/assets/images/1-galaxy-watch-ss.png",
            title: "Đồng hồ thông minh",
          },
          {
            image: "/assets/images/1-manhinhcate-ss.png",
            title: "Màn hình",
          },
          {
            image: "/assets/images/1-tvcat-ss.png",
            title: "Tivi",
          },
          {
            image: "/assets/images/1-tulanh-ss.png",
            title: "Tủ lạnh",
          },
          {
            image: "/assets/images/1-phukien-ss.png",
            title: "Phụ kiện",
          },
        ],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "Sản phẩm Samsung",
            series: [
              "Điện thoại",
              "Máy tính bảng",
              "Galaxy AI",
              "Đồng hồ thông minh",
              "Màn hình",
              "Tai nghe",
              "TV & AV",
              "Tủ lạnh",
              "Máy giặt",
              "Phụ kiện Samsung",
            ],
          },
          {
            brand: "Phụ kiện Samsung",
            series: [
              "Sạc & Cáp",
              "Ốp lưng & Bao da",
              "Sạc dự phòng",
              "Thiết bị định vị",
              "Ổ cứng & Thẻ nhớ",
              "Dây đeo đồng hồ",
              "Phụ kiện khác",
            ],
          },
        ],
      },
      bestSeller: [
        {
          id: uuidv4(),
          image: "/assets/images/sss24ultra.png",
          title: "Samsung Galaxy s24 ultra 5G",
          cost: "25990000",
        },
        {
          id: uuidv4(),
          image: "/assets/images/zflip6.png",
          title: "Samsung Galaxy Z Flip 6 5G",
          cost: "26990000",
        },
      ],
      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/xiaomi-icon.png",
      brandType: "Chuyên trang Xiaomi",
      listBrandProminent: {
        brandMain: [],
        brandSub: [
          {
            image: "/assets/images/1-dienthoai-ss.png",
            title: "Điện thoại",
          },
          {
            image: "/assets/images/1-tablet-ss.png",
            title: "Máy tính bảng",
          },
          {
            image: "/assets/images/1-galaxy-watch-ss.png",
            title: "Đồng hồ thông minh",
          },
          {
            image: "/assets/images/1-manhinhcate-ss.png",
            title: "Màn hình",
          },
          {
            image: "/assets/images/1-tvcat-ss.png",
            title: "Tivi",
          },
          // {
          //   image: "", // Hình ảnh trống vì không có hình ảnh cụ thể
          //   title: "Robot & Máy hút bụi",
          // },
          // {
          //   image: "",
          //   title: "Máy lọc không khí",
          // },
          {
            image: "/assets/images/1-phukien-ss.png",
            title: "Phụ kiện",
          },
          // {
          //   image: "",
          //   title: "Tai nghe",
          // },
          // {
          //   image: "",
          //   title: "Loa",
          // },
          // {
          //   image: "",
          //   title: "Sạc & Cáp",
          // },
          // {
          //   image: "",
          //   title: "Chuột",
          // },
          // {
          //   image: "",
          //   title: "Pin dự phòng",
          // },
          // {
          //   image: "",
          //   title: "Quạt",
          // },
          // {
          //   image: "",
          //   title: "Cân điện tử",
          // },
          // {
          //   image: "",
          //   title: "Máy cạo râu",
          // },
          // {
          //   image: "",
          //   title: "Máy sấy tóc",
          // },
          // {
          //   image: "",
          //   title: "Nồi chiên không dầu",
          // },
          // {
          //   image: "",
          //   title: "Bình đun siêu tốc",
          // },
          // {
          //   image: "",
          //   title: "Bàn chải điện",
          // }
        ],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "Apple (iPhone)",
            series: [
              "iPhone 16 Series",
              "iPhone 15 Series",
              "iPhone 14 Series",
              "iPhone 13 Series",
              "iPhone 12 Series",
              "iPhone 11 Series",
            ],
          },
          {
            brand: "Xiaomi",
            series: [
              "Poco Series",
              "Xiaomi Series",
              "Redmi Note Series",
              "Redmi Series",
            ],
          },
          {
            brand: "Theo phân khúc giá",
            series: [
              "Dưới 2 triệu",
              "Từ 2 - 4 triệu",
              "Từ 4 - 7 triệu",
              "Từ 7 - 13 triệu",
              "Từ 13 - 20 triệu",
              "Trên 20 triệu",
            ],
          },
          {
            brand: "Samsung",
            series: [
              "Galaxy AI",
              "Galaxy S Series",
              "Galaxy Z Series",
              "Galaxy A Series",
              "Galaxy M Series",
            ],
          },
          {
            brand: "OPPO",
            series: ["OPPO Reno Series", "OPPO A Series"],
          },
          {
            brand: "Honor",
            series: ["Honor X Series", "Honor Series"],
          },
          {
            brand: "Thương hiệu khác",
            series: ["Tecno", "Realme", "Vivo", "ZTE", "Inoi", "Benco"],
          },
          {
            brand: "Phổ thông 4G",
            series: ["Nokia", "Itel", "Masstel", "Mobell", "Viettel"],
          },
        ],
      },
      bestSeller: [
        {
          id: uuidv4(),
          image:
            "/assets/images/2023_3_14_638144068285704327_robot-hut-bui-xiaomi-robot-vacuum-x10-dd.jpg",
          title: "Robot hút bụi Xiaomi Robot Vacuum X10",
          cost: "12990000",
        },
        {
          id: uuidv4(),
          image:
            "/assets/images/2024_4_16_638488773736135586_xiaomi-robot-vacuum-e5-dd.jpg",
          title: "Robot hút bụi lau nhà Xiaomi Vacuum E5",
          cost: "2490000",
        },
      ],

      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/tv-icon.svg",
      brandType: "Tivi, Tủ lạnh, Điều hoà",
      listBrandProminent: {
        brandMain: [
          {
            icon: "/assets/images/casper-icon-tv.png",
            title: "Máy lạnh Casper",
          },
          {
            icon: "/assets/images/samsung-icon-tv.svg",
            title: "Tivi Samsung",
          },
          {
            icon: "/assets/images/xiaomi-icon.png",
            title: "Tivi Xiaomi",
          },
          {
            icon: "/assets/images/sharp-icon-tv.png",
            title: "Tủ lạnh Sharp",
          },
        ],
        brandSub: [
          {
            image: "/assets/images/Dieu_hoa_inverter_89d8de86e9.png",
            title: "Điều hoà inverter",
          },
          {
            image: "/assets/images/Smart_tivi_44cba40c56.png",
            title: "Smart Tivi",
          },
          {
            image: "/assets/images/Tivi_4k_269920bf88.png",
            title: "Tivi 4k",
          },
          {
            image: "/assets/images/Tu_lanh_inverter_5fd1845222.png",
            title: "Tủ lạnh inverter",
          },
          {
            image: "/assets/images/Tu_lanh_side_by_silde_a53c1ac18f.png",
            title: "Tủ lạnh side-by-side",
          },
        ],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "Tivi",
            series: [
              "Samsung",
              "Xiaomi",
              "Casper",
              "Hisense",
              "LG",
              "TCL",
              "Toshiba",
              "Tivi QLED",
              "Tivi 4K",
              "Google TV",
            ],
          },
          {
            brand: "Tủ lạnh",
            series: [
              "Samsung",
              "LG",
              "Toshiba",
              "Casper",
              "Aqua",
              "Sharp",
              "Hisense",
              "Tủ lạnh side-by-side",
              "Tủ lạnh Inverter",
            ],
          },
          {
            brand: "Máy lạnh - Điều hòa",
            series: [
              "Casper",
              "Daikin",
              "Midea",
              "Samsung",
              "Sharp",
              "Điều hoà - máy lạnh 1 chiều",
              "Điều hoà - máy lạnh 2 chiều",
            ],
          },
          {
            brand: "Vật tư máy lạnh",
            series: [],
          },
        ],
      },
      bestSeller: [
        {
          id: uuidv4(),
          image: "/assets/images/2024_4_22_638493771504566128_casper-tc-dd.jpg",
          title: "Máy lạnh Casper Inverter 1 HP (9000 BTU) TC-09IS35",
          cost: "33990000",
        },
        {
          id: uuidv4(),
          image:
            "/assets/images/2023_3_1_638132669986743805_smart-tivi-samsung-uhd-4k-au7700-dd.jpg",
          title: "Smart Tivi Samsung UHD 4K 55 inch UA55AU7700",
          cost: "29990000",
        },
      ],
      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/maygiat-icon.svg",
      brandType: "Máy giặt, Máy sấy, Tủ sấy",
      listBrandProminent: {
        brandMain: [
          {
            icon: "/assets/images/106_logo_toshiba_f9d57a195e.png",
            title: "Máy giặt Toshiba",
          },
          {
            icon: "/assets/images/401_logo_casper_5ed7031b49.png",
            title: "Máy giặt Casper",
          },
          {
            icon: "/assets/images/106_logo_toshiba_f9d57a195e.png",
            title: "Máy sấy Toshiba",
          },
          {
            icon: "/assets/images/335_logo_Kangaroo_775ab741ff.png",
            title: "Tủ sấp Kangaru",
          },
        ],
        brandSub: [
          {
            image: "/assets/images/Giat_khoi_luong_cuc_lon_238e54e02f.png",
            title: "Máy giặt khối lượng cực lớn",
          },
          {
            image: "/assets/images/May_giat_co_say_b6020839d8.png",
            title: "Máy giặt có sấy",
          },
          {
            image: "/assets/images/May_giat_cua_ngang_217ff23add.png",
            title: "Máy giặt cửa ngang",
          },
          {
            image: "/assets/images/May_giat_cua_tren_dcbb9939df.png",
            title: "Máy giặt cửa trên",
          },
          {
            image: "/assets/images/Tu_say_quan_ao_88d968ccfe.png",
            title: "Tủ sấy quần áo",
          },
        ],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "Máy giặt",
            series: [
              "Samsung",
              "LG",
              "Toshiba",
              "Casper",
              "Aqua",
              "Sharp",
              "Hisense",
              "Máy giặt cửa trước",
              "Máy giặt cửa trên",
              "Phụ kiện máy giặt",
            ],
          },
          {
            brand: "Máy sấy quần áo",
            series: [],
          },
          {
            brand: "Tủ sấy",
            series: [],
          },
        ],
      },
      bestSeller: [
        {
          id: uuidv4(),
          image:
            "/assets/images/2024_6_11_638537203076906029_00907468-casper-td-72vwd-thumb.jpg",
          title: "Máy sấy thông hơi Casper 7.2 kg TD-72VWD",
          cost: "4990000",
        },
        {
          id: uuidv4(),
          image:
            "/assets/images/2024_5_10_638509283666823839_toshiba-9-5-kg-tw-bk105S3vsk-1.jpg",
          title: "Máy giặt cửa trước Toshiba Inverter 9.5 Kg TW-BK105S3V(SK)",
          cost: "7990000",
        },
      ],
      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/tablet-icon.svg",
      brandType: "Máy tính bảng, Máy in, Đồng hồ",
      listBrandProminent: {
        brandMain: [
          {
            icon: "/assets/images/apple-icon.png",
            title: "Ipad",
          },
          {
            icon: "/assets/images/124_logo_garmin_3203d6ccf0.png",
            title: "Đồng hồ Garmin",
          },
          {
            icon: "/assets/images/xiaomi-icon.png",
            title: "Tablet",
          },
          {
            icon: "/assets/images/samsung-icon.png",
            title: "Galaxy Tab",
          },
        ],
        brandSub: [
          {
            image: "/assets/images/Day_dong_ho_e0faf91376.png",
            title: "Dây đồng hồ",
          },
          {
            image: "/assets/images/Do_nhip_tim_huyen_ap_9fa17f6a2f.png",
            title: "Đo nhịp tim huyết áp",
          },
          {
            image: "/assets/images/Do_VO_2max_a28a56deab.png",
            title: "Đo v02 Max",
          },
          {
            image:
              "/assets/images/Dong_ho_the_thao_chuyen_nghiep_a801cd5f2d.png",
            title: "Đồng hồ thể thao chuyên nghiệp",
          },
          {
            image: "/assets/images/Dong_ho_tre_em_b72e281c29.png",
            title: "Đồng hồ trẻ em",
          },
        ],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "Máy tính bảng",
            series: [
              "Apple (iPad)",
              "Samsung",
              "Xiaomi",
              "Huawei",
              "Lenovo",
              "Masstel",
              "Honor",
              "Coolpad",
            ],
          },
          {
            brand: "Máy in",
            series: [
              "Máy in màu",
              "Máy in đơn năng",
              "Máy in đa năng",
              "Máy in đen trắng",
            ],
          },
          {
            brand: "Đồng hồ",
            series: [
              "Apple Watch",
              "Samsung",
              "Garmin",
              "Xiaomi",
              "Amazfit",
              "Huawei",
              "Zwatch",
              "Honor",
              "Đa tiện ích",
              "Định vị trẻ em",
              "Thể thao chuyên nghiệp",
              "Thiết bị đeo chuyên dụng",
              "Vòng đeo tay",
              "Dây Đồng Hồ",
            ],
          },
          {
            brand: "Thiết bị chơi game",
            series: [],
          },
          {
            brand: "Máy chiếu",
            series: [],
          },
        ],
      },
      bestSeller: [
        {
          id: uuidv4(),
          image:
            "/assets/images/2023_10_9_638324601040788266_apple-watch-series-9-gps-cellular-45mm-vang-dd.jpg",
          title:
            "Apple Watch Series 9 GPS + Cellular 45mm Viền nhôm Dây cao su cỡ S/M",
          cost: "13490000",
        },
        {
          id: uuidv4(),
          image:
            "/assets/images/2020_10_15_637383767241617250_may-in-brother-dd.png.jpeg",
          title: "Máy in Brother laser HL-L2321D",
          cost: "2990000",
        },
      ],
      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/cpu-icon.svg",
      brandType: "PC, Linh kiện, Màn hình, Phần mềm",
      listBrandProminent: {
        brandMain: [
          {
            icon: "/assets/images/apple-icon.png",
            title: "Imac",
          },
          {
            icon: "/assets/images/24_logo_E_power_7b69f40241.png",
            title: "PC E-Power",
          },
          {
            icon: "/assets/images/hp-icon.png",
            title: "Máy tính để bàn HP",
          },
          {
            icon: "/assets/images/asus-icon.svg",
            title: "PC Asus",
          },
        ],
        brandSub: [
          {
            image: "/assets/images/Man_hinh_do_hoa_d8edf1a637.png",
            title: "Máy tính đồ hoạ",
          },
          {
            image: "/assets/images/Man_hinh_4_K_cb642cf7b1.png",
            title: "Màn hình 4K",
          },
          {
            image: "/assets/images/Man_hinh_gaming_4a57c650aa.png",
            title: "Màn hình Gaming",
          },
          {
            image: "/assets/images/Chuot_may_tinh_add2a22735.png",
            title: "Chuột máy tính",
          },
          {
            image: "/assets/images/Ban_phim_99f5b46552.png",
            title: "Bàn phím",
          },
        ],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "PC",
            series: ["HP", "E-Power", "Lenovo", "Asus", "Apple (iMac)"],
          },
          {
            brand: "Linh kiện",
            series: [
              "VGA",
              "Vỏ Case",
              "CPU",
              "Nguồn máy tính",
              "Mainboard",
              "Tản nhiệt",
              "Ổ đĩa quang",
              "RAM",
              "Ổ cứng",
            ],
          },
          {
            brand: "Màn hình",
            series: [
              "Màn hình",
              "Màn hình đồ họa",
              "Màn hình Văn phòng",
              "Màn hình Gaming",
              "Màn hình di động",
            ],
          },
          {
            brand: "Phần mềm",
            series: [
              "Diệt Virus",
              "Microsoft Office",
              "Windows",
              "Gói cước FPT play",
              "VieOn",
            ],
          },
        ],
      },
      bestSeller: [
        {
          id: uuidv4(),
          image:
            "/assets/images/2023_9_29_638315826515111336_man-hinh-samsung-ls27c330gaexxv-27-inch-dd.jpg",
          title:
            "Màn hình Samsung LS27C330GAEXXV/27 inch/FHD(1920x1080)/IPS 100Hz",
          cost: "2890000",
        },
        {
          id: uuidv4(),
          image: "/assets/images/00910859_pc_e_power_office_30_244ec1cd1a.png",
          title:
            "PC E-Power Office 33 Intel Core i3 12100 / RAM 16GB / SSD 256GB / 450W",
          cost: "7090000",
        },
      ],
      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/fan-icon.svg",
      brandType: "Quạt, Quạt điều hoà, Thiết bị sưởi ấm",
      listBrandProminent: {
        brandMain: [
          {
            icon: "/assets/images/335_logo_Kangaroo_775ab741ff.png",
            title: "Quạt điều hoà Kangaroo",
          },
          {
            icon: "/assets/images/337_logo_Sunhouse_41c87ad994.png",
            title: "Quạt điều hoà Sunhouse",
          },
          {
            icon: "/assets/images/106_logo_toshiba_f9d57a195e.png",
            title: "Quạt điều hoà Toshiba",
          },
          {
            icon: "/assets/images/344_logo_Karofi_2e7e8c3e31.png",
            title: "Quạt điều hoà Karofi",
          },
        ],
        brandSub: [
          {
            image: "/assets/images/Quat_dung_7517d0ac6b.png",
            title: "Quạt đứng",
          },
          {
            image: "/assets/images/Quat_hop_059600af05.png",
            title: "Quạt hộp",
          },
          {
            image: "/assets/images/Quat_sac_dien_415787b646.png",
            title: "Quạt sạc điện",
          },
          {
            image: "/assets/images/Quat_thap_ee1ba1f443.png",
            title: "Quạt tháp",
          },
          {
            image: "/assets/images/Quat_treo_tuong_06a7882c31.png",
            title: "Quạt treo tường",
          },
        ],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "Quạt",
            series: ["Quạt sạc tích điện", "Quạt máy"],
          },
          {
            brand: "Quạt điều hòa",
            series: [],
          },
          {
            brand: "Thiết bị sưởi ấm",
            series: [],
          },
        ],
      },
      bestSeller: [
        {
          id: uuidv4(),
          image:
            "/assets/images/2023_10_26_638339347006703333_quat-suoi-gom-ceramic-fujie-ch-1600-2000w-dd.jpg",
          title: "Quạt sưởi gốm Ceramic FujiE CH-1600 2000W",
          cost: "1450000",
        },
        {
          id: uuidv4(),
          image:
            "/assets/images/2023_10_26_638339335298301175_quat-suoi-gom-ceramic-mini-fujie-ch-202-1000w-dd.jpg",
          title: "Quạt sưởi gốm Ceramic mini FujiE CH-202 1000W",
          cost: "540000",
        },
      ],

      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/robot-icon.svg",
      brandType: "Máy hút bụi, Máy lọc khí, Máy hút ẩm",
      listBrandProminent: {
        brandMain: [
          {
            icon: "/assets/images/341_logo_Ecovacs_aaf5399d54.png",
            title: "Robot hút bụi Ecovacs",
          },
          {
            icon: "/assets/images/xiaomi-icon.png",
            title: "Robot hút bụi Xiaomi",
          },
          {
            icon: "/assets/images/387_logo_Levoit_874dc766a6.png",
            title: "Lọc không khí Levoit",
          },
          {
            icon: "/assets/images/xiaomi-icon.png",
            title: "Lọc không khí Xiaomi",
          },
        ],
        brandSub: [],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "Robot hút bụi",
            series: [
              "Robot Hút bụi lau nhà",
              "Robot lau kính",
              "Phụ kiện Robot hút bụi",
            ],
          },
          {
            brand: "Máy hút bụi",
            series: [
              "Máy hút bụi cầm tay mini",
              "Máy hút bụi cầm tay",
              "Máy hút bụi không dây",
            ],
          },
          {
            brand: "Máy lọc không khí",
            series: [
              "Phụ kiện máy lọc không khí",
              "Camera an ninh",
              "Camera trong nhà",
              "Camera ngoài trời",
            ],
          },
          {
            brand: "Smart home",
            series: [],
          },
          {
            brand: "Máy hút ẩm",
            series: [],
          },
          {
            brand: "Máy tạo ẩm",
            series: [],
          },
        ],
      },
      bestSeller: [
        {
          id: uuidv4(),
          image:
            "/assets/images/2022_10_14_638013417135393493_may-loc-khong-khi-bat-muoi-sharp-fp-jm30v-b-dd.jpg",
          title: "Máy lọc không khí bắt muỗi Sharp FP-JM30V-B",
          cost: "4490000",
        },
        {
          id: uuidv4(),
          image:
            "/assets/images/2023_2_4_638111104195004748_may-hut-am-fujie-hm-914ec-dd.jpg",
          title: "Máy hút ẩm FujiE HM-914EC",
          cost: "5490000",
        },
      ],

      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/water-icon.svg",
      brandType: "Máy nước nóng, Máy lọc nước",
      listBrandProminent: {
        brandMain: [
          {
            icon: "/assets/images/335_logo_Kangaroo_775ab741ff.png",
            title: "Máy lọc Kangaroo",
          },
          {
            icon: "/assets/images/344_logo_Karofi_2e7e8c3e31.png",
            title: "Máy lọc Karofi",
          },
          {
            icon: "/assets/images/337_logo_Sunhouse_41c87ad994 2.png",
            title: "Máy lọc Sunhouse",
          },
          {
            icon: "/assets/images/414_logo_DAIKIOSAN_ca382910ad.png",
            title: "Máy lọc Daikiosan",
          },
        ],
        brandSub: [],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "Máy nước nóng",
            series: ["Máy nước nóng trực tiếp", "Máy nước nóng gián tiếp"],
          },
          {
            brand: "Máy lọc nước",
            series: [
              "Máy lọc nước lắp âm",
              "Máy lọc nước tủ đứng",
              "Máy lọc nước để bàn",
              "Phụ kiện máy lọc nước",
            ],
          },
          {
            brand: "Cây nước nóng lạnh",
            series: [
              "Cây nước nóng lạnh úp bình",
              "Cây nước nóng lạnh hút bình",
            ],
          },
        ],
      },
      bestSeller: [
        {
          id: uuidv4(),
          image:
            "/assets/images/2024_6_11_638537120599533319_may-nuoc-nong-gian-tiep-kangaroo-30-lit-kg79a3-2500w-dd.jpg",
          title: "Máy nước nóng gián tiếp Kangaroo 30 lit KG79A3 2500W",
          cost: "3740000",
        },
        {
          id: uuidv4(),
          image:
            "/assets/images/2023_8_16_638277737401632541_may-looc-nuoc-ro-sunhouse-8-loi-sha8879k-dd.jpg",
          title: "Máy lọc nước RO Sunhouse 8 lõi SHA8879K",
          cost: "6590000",
        },
      ],

      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/ricecooker-icon.svg",
      brandType: "Nồi cơm điện, Nồi chiên, Lẩu, Nướng",
      listBrandProminent: {
        brandMain: [
          {
            icon: "/assets/images/337_logo_Sunhouse_41c87ad994 2.png",
            title: "Nồi cơm Sunhouse",
          },
          {
            icon: "/assets/images/106_logo_toshiba_f9d57a195e.png",
            title: "Nồi cơm Toshiba",
          },
          {
            icon: "/assets/images/377_logo_Cuckoo_122e29a428.png",
            title: "Nồi cơm Cuckoo",
          },
          {
            icon: "/assets/images/106_logo_toshiba_f9d57a195e.png",
            title: "Nồi cơm Toshiba",
          },
        ],
        brandSub: [
          {
            image:
              "/assets/images/Noi_chien_khong_dau_co_the_hap_045b0c3494.png",
            title: "Nồi chiên không dầu",
          },
          {
            image: "/assets/images/Noi_com_cao_tang_0ca7193884.png",
            title: "Nồi cơm cao tần",
          },
          {
            image: "/assets/images/Noi_com_dien_aa206b1225.png",
            title: "Nồi cơm điện",
          },
          {
            image: "/assets/images/Noi_com_dien_tu_ap_suat_048e5949c9.png",
            title: "Nồi cơm điện tử áp suất",
          },
          {
            image: "/assets/images/Noi_lau_dien_bf9f2fffac.png",
            title: "Nồi lẩu điện",
          },
        ],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "Nồi cơm điện",
            series: [
              "Nồi cơm điện tử",
              "Nồi cơm cơ",
              "Nồi cơm nắp rời",
              "Nồi cơm cao tần",
            ],
          },
          {
            brand: "Nồi chiên",
            series: ["Nồi chiên không dầu hơi nước", "Nồi chiên không dầu"],
          },
          {
            brand: "Nồi áp suất điện",
            series: [], // Mảng rỗng cho nồi áp suất điện
          },
          {
            brand: "Nồi lẩu điện",
            series: [], // Mảng rỗng cho nồi lẩu điện
          },
        ],
      },
      bestSeller: [
        {
          id: uuidv4(),
          image:
            "/assets/images/2022_3_25_637838157524097785_noi-com-dien-nap-gai-kangaroo-1-2-lit-kg12rc1-trang-dd.jpg",
          title: "Nồi cơm điện nắp gài Kangaroo 1.2 lit KG12RC1",
          cost: "699000",
        },
        {
          id: uuidv4(),
          image:
            "/assets/images/2022_11_7_638034132531808110_noi-com-dien-nap-gai-kangaroo-1-8-lit-kg18rc3-2.jpg",
          title: "Nồi cơm điện nắp gài Kangaroo 1.8 lít KG18RC3",
          cost: "790000",
        },
      ],

      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/mix-icon.svg",
      brandType: "Điện gia dụng, Sinh tố - xay ép",
      listBrandProminent: {
        brandMain: [
          {
            icon: "/assets/images/338_logo_Tefal_0bf8a76583.png",
            title: "Bàn ủi Tefal",
          },
          {
            icon: "/assets/images/361_logo_Comet_4b8b8f1d32.png",
            title: "Đèn Pin Comet",
          },
          {
            icon: "/assets/images/335_logo_Kangaroo_775ab741ff.png", // Thay thế bằng đường dẫn thực tế
            title: "Bình đun siêu tốc Kangaroo",
          },
          {
            icon: "/assets/images/sharp-icon-tv.png", // Thay thế bằng đường dẫn thực tế
            title: "Lò vi sóng Sharp",
          },
        ],

        brandSub: [
          {
            image: "/assets/images/Den_suoi_f91a441680.png",
            title: "Đèn điện",
          },
          {
            image: "/assets/images/May_say_toc_e43271fe30.png",
            title: "Máy sấy tóc",
          },
          {
            image: "/assets/images/May_ep_hoa_qua_f4398da0e5.png",
            title: "Máy ép hoa quả",
          },
          {
            image: "/assets/images/May_vat_cam_8bf58723d7.png",
            title: "Máy vắt cam",
          },
          {
            image: "/assets/images/Lo_vi_song_5f24eaa8d8.png",
            title: "Lò vi sóng",
          },
        ],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "Điện gia dụng",
            series: [
              "Thiết bị sưởi ấm",
              "Đèn điện",
              "Nồi chiên",
              "Bàn ủi",
              "Nồi lẩu điện",
              "Đèn pin",
              "Hộp cơm điện",
              "Bình thủy điện",
              "Bình đun siêu tốc",
              "Ổ cắm điện",
              "Vợt bắt muỗi",
              "Máy sấy tóc",
              "Nồi áp suất điện",
            ],
          },
          {
            brand: "Sinh tố-xay ép",
            series: [
              "Máy đánh trứng",
              "Máy xay thịt",
              "Máy làm sữa hạt",
              "Máy ép hoa quả",
              "Máy vắt cam",
              "Máy xay sinh tố",
            ],
          },
          {
            brand: "Lò vi sóng",
            series: [
              "Lò vi sóng không nướng",
              "Lò vi sóng có nướng",
              "Lò nướng",
            ],
          },
        ],
      },
      bestSeller: [
        {
          id: uuidv4(),
          image:
            "/assets/images/2024_1_8_638403295776395399_lo-vi-song-sunhouse-25l-shd4823-dd.jpg",
          title: "Lò vi sóng Sunhouse 25L SHD4823",
          cost: "2990000",
        },
        {
          id: uuidv4(),
          image:
            "/assets/images/2022_3_10_637825030807879685_lo-vi-song-sharp-20-lit-r-205vn-s-bac-dd.jpg",
          title: "Lò vi sóng Sharp 20 lít R-205VN-S",
          cost: "1860000",
        },
      ],
      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/stove-icon.svg",
      brandType: "Thiết bị bếp, Nồi, Chảo, Máy rửa bát",
      listBrandProminent: {
        brandMain: [
          {
            icon: "/assets/images/350_logo_Elmich_dede63b07a.png",
            title: "Nồi Elmich",
          },
          {
            icon: "/assets/images/367_logo_Goldsun_783bc4274b.png",
            title: "Nồi Goldsun",
          },
          {
            title: "Bếp điện Sunhouse",
            icon: "/assets/images/337_logo_Sunhouse_41c87ad994 2.png",
          },
          {
            title: "Bếp điện Kangaroo",
            icon: "/assets/images/335_logo_Kangaroo_775ab741ff.png",
          },
        ],
        brandSub: [],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "Thiết bị bếp",
            series: ["Bếp ga", "Bếp nướng điện", "Bếp điện", "Máy hút mùi"],
          },
          {
            brand: "Máy rửa bát",
            series: [], // Để mảnh rỗng
          },
          {
            brand: "Nồi",
            series: ["Nồi đơn", "Bộ nồi"],
          },
          {
            brand: "Đồ dùng nhà bếp",
            series: [
              "Bình, ly đựng nước",
              "Bát, đĩa, thìa",
              "Khay, hộp",
              "Bộ vắt cam",
              "Dụng cụ cắt gọt",
              "Đồ dùng nhà bếp khác",
            ],
          },
          {
            brand: "Chảo",
            series: ["Chảo nhôm", "Chảo Inox"],
          },
        ],
      },
      bestSeller: [
        {
          id: uuidv4(),
          image:
            "/assets/images/2023_4_20_638175984710585377_bo-noi-inox-3-chiec-3-day-nap-kinh-sunhouse-shg2303msa-dd.jpg",
          title: "Bộ nồi inox 3 chiếc 3 đáy nắp kính Sunhouse SHG2303MSA",
          cost: "1190000",
        },
        {
          id: uuidv4(),
          image:
            "/assets/images/2023_10_25_638338382409363792_bo-3-noi-nhom-6-lop-chong-dinh-van-da-anh-kim-sieu-ben-elmich-el-5204be-dd.jpg",
          title:
            "Bộ 3 nồi nhôm 6 lớp chống dính vân đá ánh kim siêu bền Elmich EL -5204BE",
          cost: "1290000",
        },
      ],

      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      imageIconBrand: "/assets/images/hair-icon.svg",
      brandType: "Chăm sóc sức khoẻ , Đồ dùng gia đình",
      listBrandProminent: {
        brandMain: [
          {
            icon: "/assets/images/384_logo_Oral_B_15f6d107d2.png",
            title: "Bàn chải điện Oral-B",
          },
          {
            icon: "/assets/images/312_logo_kachi_af03507946.png",
            title: "Máy massage Kachi",
          },
          {
            icon: "/assets/images/70_logo_philips_f1ffc29667.png",
            title: "Máy cạo râu Philips",
          },
          {
            icon: "/assets/images/xiaomi-icon.png", // Không có logo cho Xiaomi, để trống
            title: "Sức khoẻ Xiaomi",
          },
        ],

        brandSub: [
          {
            image: "/assets/images/Tao_am_phun_suong_7975b4e737.png",
            title: "Tạo ẩm - phun sương",
          },
          {
            image: "/assets/images/image_6348143_f521496a41.png", // Thay đổi tên file nếu cần
            title: "Máy sấy tóc",
          },
          {
            image: "/assets/images/May_massage_667ff31466.png",
            title: "Máy massage",
          },
          {
            image: "/assets/images/May_tam_nuoc_3ac0037ea1.png",
            title: "Máy tăm nước",
          },
          {
            image: "/assets/images/Do_dung_sinh_hoat_7dd4084559.png",
            title: "Đồ dùng sinh hoạt",
          },
        ],
      },
      listTextBrand: {
        titleBrandType: [
          {
            brand: "Chăm sóc sức khỏe",
            series: [
              "Máy massage",
              "Máy sấy tóc",
              "Bàn chải điện",
              "Máy cạo râu",
              "Thiết bị Y tế",
              "Cân",
              "Tăm nước",
              "Máy tạo ẩm",
            ],
          },
          {
            brand: "Đồ dùng gia đình",
            series: [
              "Đồ dùng nhà tắm",
              "Bảo quản thực phẩm",
              "Đồ dùng vệ sinh nhà cửa",
              "Đồ dùng sinh hoạt",
            ],
          },
        ],
      },
      bestSeller: [
        {
          id: uuidv4(),
          image:
            "/assets/images/2023_3_24_638152760387694492_sung-massage-cam-tay-kachi-mk-340-dd.jpg",
          title: "Súng massage cầm tay Kachi MK-340",
          cost: "599000",
        },
        {
          id: uuidv4(),
          image:
            "/assets/images/2021_6_26_637603273860540080_may-say-toc-sunhouse-shd2305-dd.jpg",
          title: "Máy sấy tóc Sunhouse SHD2305",
          cost: "210000",
        },
      ],

      imageSeller: "/assets/images/image-seller.png",
    },
    {
      id: uuidv4(),
      brandType: "Máy cũ",
    },
    {
      id: uuidv4(),
      brandType: "Thông tin hay",
    },
    {
      id: uuidv4(),
      brandType: "Sim thẻ - Thanh toán tiện ích",
    },
  ];

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

  useEffect(() => {
    // Ẩn add-submenu ban đầu
    if (addSubMenuRef.current) {
      addSubMenuRef.current.style.display = "none";
    }
    return () => {};
  }, []); // Chỉ chạy useEffect khi component được mount

  const handleMouseEnter = (type) => {
    setHoveredType(type);

    if (addSubMenuRef.current) {
      addSubMenuRef.current.style.display = "block"; // Hiển thị add-submenu khi hover vào li
    }
  };

  const handleMouseLeave = (e) => {
    const relatedTarget = e.relatedTarget;

    // Kiểm tra nếu relatedTarget là một đối tượng DOM và có phương thức closest
    if (
      relatedTarget &&
      typeof relatedTarget.closest === "function" &&
      (relatedTarget.closest(".submenu_left") ||
        relatedTarget.closest(".add-submenu"))
    ) {
      return; // Không làm gì nếu chuột vẫn đang trong phạm vi submenu_left hoặc add-submenu
    }

    setHoveredType(null);
    if (addSubMenuRef.current) {
      addSubMenuRef.current.style.display = "none"; // Ẩn add-submenu
    }
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
        <div className="navigation-wrap">
          <div className="navigation-icon">
            <div className="nav-icon_loca">
              <div className="icon">
                <FontAwesomeIcon icon={faBarsStaggered} />
              </div>
              <div className="title">Danh Mục</div>
            </div>
          </div>
          <div className="submenu-main">
            <div
              className="submenu_wrap"
              onMouseLeave={handleMouseLeave}
              ref={submenuLeftRef}
            >
              <div className="submenu_left">
                <div
                  className="submenuList"
                  style={{
                    borderRadius: hoveredType ? "20px 0 0 20px" : "20px",
                    transition: "border-radius 0.3s", // Thêm hiệu ứng chuyển đổi
                  }}
                >
                  <ul className="scrollable-list">
                    {listNavigation.slice(0, 17).map((item, index) => (
                      <React.Fragment key={item.id}>
                        <li
                          onMouseEnter={() => handleMouseEnter(item.brandType)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="icon-image-brand">
                            <img src={item?.imageIconBrand} alt="" />
                          </div>
                          <div className="text-icon-image-brand">
                            <Link
                              to={item.nameAscii ? `/${item.nameAscii}` : "/"}
                            >
                              {item.brandType}
                            </Link>
                          </div>
                        </li>
                        {(index === 2 || index === 5) && <hr />}{" "}
                        {/* Dòng kẻ ngang sau phần tử thứ 3 và 6 */}
                      </React.Fragment>
                    ))}
                  </ul>
                  <ul className="static-list">
                    {listNavigation.slice(17).map((item) => (
                      <li
                        key={item.id}
                        // onMouseEnter={() => handleMouseEnter(item.brandType)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="text-icon-image-brand">
                          {item.brandType} {/* Chỉ hiển thị brandType */}
                        </div>
                        {/* Không cần render dữ liệu bên phải cho ba phần tử này */}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="add-submenu" ref={addSubMenuRef}>
                  <div className="submenu_right">
                    <div className="list-type-brand">
                      <div className="list-type-brand-top">
                        <div className="title-brand_list">
                          Thương hiệu nổi bật
                        </div>
                        {hoveredType &&
                          listNavigation.find(
                            (item) => item.brandType === hoveredType
                          )?.listBrandProminent.brandMain.length > 0 && (
                            <div className="type-brand-logo">
                              {listNavigation
                                .find((item) => item.brandType === hoveredType)
                                ?.listBrandProminent.brandMain.map(
                                  (item, index) => (
                                    <div className="list-icon-text" key={index}>
                                      <div className="icon-image-brand">
                                        <img src={item?.icon} alt="" />
                                      </div>
                                      <div className="text-icon-image-brand">
                                        <span>{item.title}</span>
                                      </div>
                                    </div>
                                  )
                                )}
                            </div>
                          )}
                        {hoveredType &&
                          listNavigation.find(
                            (item) => item.brandType === hoveredType
                          )?.listBrandProminent.brandSub.length > 0 && (
                            <div className="type-brand-sub">
                              {listNavigation
                                .find((item) => item.brandType === hoveredType)
                                ?.listBrandProminent.brandSub.map(
                                  (item, index) => (
                                    <div className="list-icon-text" key={index}>
                                      <div className="icon-image-brand">
                                        <img src={item?.image} alt="" />
                                      </div>
                                      <div className="text-icon-image-brand">
                                        {item.title}
                                      </div>
                                    </div>
                                  )
                                )}
                            </div>
                          )}
                      </div>
                      <div className="type-brand-text">
                        {hoveredType &&
                          listNavigation
                            .find((item) => item.brandType === hoveredType)
                            ?.listTextBrand?.titleBrandType.map(
                              (item, index) => (
                                <div className="text_grid_brand" key={index}>
                                  <div className="title_brand">
                                    {item.brand}
                                  </div>
                                  <ul>
                                    {item.series && item.series.length > 0 ? ( // Kiểm tra item.series có tồn tại và có ít nhất 1 phần tử
                                      item.series.map(
                                        (seriesItem, seriesIndex) => (
                                          <li key={seriesIndex}>
                                            {seriesItem}
                                          </li> // Thêm key cho mỗi li
                                        )
                                      )
                                    ) : (
                                      <li></li> // Hiển thị thông báo nếu không có series
                                    )}
                                  </ul>
                                </div>
                              )
                            )}
                      </div>
                    </div>
                    <div className="seller">
                      <div className="">
                        <div className="title-text_seller">Bán chạy nhất</div>
                        {hoveredType &&
                          listNavigation
                            .find((item) => item.brandType === hoveredType)
                            ?.bestSeller.map((item, index) => (
                              <div key={index} className="">
                                <div className="product_seller">
                                  <div className="image_seller">
                                    <img src={item.image} alt="" />
                                  </div>
                                  <div className="content_seller">
                                    <div className="title">{item.title}</div>
                                    <div className="price">
                                      {convertMoney(item.cost)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                      </div>
                      <div className="image_seller">
                        <img
                          src={
                            hoveredType &&
                            listNavigation.find(
                              (item) => item.brandType === hoveredType
                            )?.imageSeller
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-icon">
          <Burger open={open} setOpen={setOpen} />
        </div>
        <div className={`menu-content-mobile ${open ? "open" : ""}`}>
          <div className="logo-nav-icon-mobile">
            <Link to="/">
              <span className="logo">
                <img src="/assets/images/logoshoplaptop.png" alt="logo" />
              </span>
              <div className="logoo">
                <span className="shop">Shop</span>
                <span className="com">.Com.vn</span>
              </div>
            </Link>
          </div>
          <div className="menu-mobile-nav">
            <div className="log-nav">
              <div className="log-nav-left">
                <button className="login" type="">
                  Đăng nhập
                </button>
                <button className="logout" type="">
                  Đăng ký
                </button>
              </div>
              <div className="log-nav-right">
                <img src="/assets/images/login_mobile.png" alt="" />
              </div>
            </div>
            <ul className="list-nav-mobile">
              {listNavigation.map((item) => {
                return (
                  <div className="list-nav-mobile-item" key={item.id}>
                    {/* Kiểm tra nếu có `nameAscii`, nếu không thì link đến trang chủ */}
                    <div className="list-nav-mobile-item-left">
                      <Link to={item.nameAscii ? `/${item.nameAscii}` : "/"}>
                        {item.imageIconBrand && (
                          <div className="list-nav-mobile-item-icon">
                            <img
                              src={item.imageIconBrand}
                              alt={item.brandType}
                            />
                          </div>
                        )}
                        <div className="list-nav-mobile-item-title">
                          {item.brandType}
                        </div>
                      </Link>
                    </div>

                    <div className="list-nav-mobile-item-right">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
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
            <Link to="/">
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
            </Link>
          </li>
          <li>
            <Link className="cart-icon" to="/cart">
              <span className="icon-right-header">
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              <span className="title-icon-header">Giỏ hàng</span>
              <span
                className={
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
