import React, { useState } from "react";
import NavItem from "./NavItem";
import { NavWrapper } from "./style";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faLaptop,
  faTabletScreenButton,
  faAppleWhole,
  faDesktop,
  faHeadphones,
  faRotateLeft,
  faHouseLaptop,
  faSimCard,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import Burger from "./Burguer";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const listNavigation = [
    {
      id: uuidv4(),
      title: "ĐIỆN THOẠI",
      nameAscii: "dien-thoai",
      icon: <FontAwesomeIcon icon={faMobileScreenButton} />,
      listSubMenu: {
        titleTop: "Hãng sản xuất",
        titleCenter: "Đồng hồ thông minh",
        titleBottom: "",
        listTop: [
          "Apple(Iphone)",
          "Xiaomi",
          "Nokia",
          "Realme",
          "Samsung",
          "Vivo",
          "Asus",
          "OPPO",
          "Tecno",
          "Masstel",
        ],
        listCenter: [
          "Apple Watch",
          "Masstel",
          "Huewei",
          "Samsung",
          "Xiaomi",
          "OPPO",
          "Garmin",
        ],
        listBottom: [""],
        titleCost: "Mức giá",
        listCost: [
          "Dưới 2 triệu",
          "Từ 2 - 4 triệu",
          "Từ 4- 7 triệu",
          "Từ 7 - 13 triệu",
          "Trên 13 triệu",
        ],
        titleProduct: "Bán chạy nhất",
        imageRight: "/assets/images/phone-nav.png",
      },
      listProduct: [
        {
          id: uuidv4(),
          image: "/assets/images/navigation-phone1.jpg",
          title: "Samsung galaxy A53 5G 256GB",
          cost: "9.490.000 ₫",
        },
        {
          id: uuidv4(),
          image: "/assets/images/navigation-phone2.jpg",
          title: "OPPO A55 4GB-64GB",
          cost: "4.290.000 ₫",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "LAPTOP",
      nameAscii: "may-tinh-xach-tay",
      icon: <FontAwesomeIcon icon={faLaptop} />,
      listSubMenu: {
        titleTop: "Hãng sản xuất",
        titleCenter: "Phần mềm",
        titleBottom: "Máy in",
        listTop: [
          "Apple(Macbook))",
          "Acer",
          "Dell",
          "Fujitsu",
          "Masstel",
          "Asus",
          "MSI",
          "Microsoft",
          "Chuwi",
          "HP",
          "Lenovo",
          "Gigabyte",
          "Avita",
        ],
        listCenter: [
          "Diệt virus",
          "Microsoft Office",
          "Windows",
          "Phần mềm khác",
        ],
        listBottom: ["HP", "Canon", "Brother"],
        titleCost: "Mức giá",
        listCost: [
          "Dưới 2 triệu",
          "Từ 2 - 4 triệu",
          "Từ 4- 7 triệu",
          "Từ 7 - 13 triệu",
          "Trên 13 triệu",
        ],
        titleProduct: "Bán chạy nhất",
        imageRight: "/assets/images/laptop-nav.png",
      },
      listProduct: [
        {
          id: uuidv4(),
          image: "",
          title: "",
          cost: "30000000",
        },
        {
          id: uuidv4(),
          image: "",
          title: "",
          cost: "30000000",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "IPAD",
      nameAscii: "may-tinh-bang",
      icon: <FontAwesomeIcon icon={faTabletScreenButton} />,
      listSubMenu: {
        titleTop: "Hãng sản xuất",
        titleCenter: "",
        titleBottom: "",
        listTop: [
          "Apple(Ipad)",
          "Lenovo",
          "Nexta",
          "Samsung",
          "Xiaomi",
          "Masstel",
          "Coolpad",
        ],
        listCenter: [""],
        listBottom: [""],
        titleCost: "Mức giá",
        listCost: [
          "Dưới 2 triệu",
          "Từ 2 - 4 triệu",
          "Từ 4- 7 triệu",
          "Từ 7 - 13 triệu",
          "Trên 13 triệu",
        ],
        titleProduct: "Bán chạy nhất",
        imageRight: "/assets/images/tablet-nav.jpeg",
      },
      listProduct: [
        {
          id: uuidv4(),
          image: "/assets/images/p3.jpg",
          title: "iPad Pro 11 2021 M1 Wi-Fi 128GB",
          cost: "19.990.000 ₫",
        },
        {
          id: uuidv4(),
          image: "/assets/images/p4.jpg",
          title: "Samsung Galaxy Tab S6 Lite 2022",
          cost: "7.990.000 ₫",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "APPLE", /// trống
      icon: <FontAwesomeIcon icon={faAppleWhole} />,
      listSubMenu: {
        titleTop: "Hãng sản xuất",
        titleCenter: "Đồng hồ thông minh",
        titleBottom: "hehhee",
        listTop: [
          "Apple(Iphone)",
          "Xiaomi",
          "Nokia",
          "Realme",
          "Samsung",
          "Vivo",
          "Asus",
          "OPPO",
          "Tecno",
          "Masstel",
        ],
        listCenter: [
          "Apple Watch",
          "Masstel",
          "Huewei",
          "Samsung",
          "Xiaomi",
          "OPPO",
          "Garmin",
        ],
        listBottom: [
          "Apple Watch",
          "Masstel",
          "Huewei",
          "Samsung",
          "Xiaomi",
          "OPPO",
          "Garmin",
        ],
        titleCost: "Mức giá",
        listCost: [
          "Dưới 2 triệu",
          "Từ 2 - 4 triệu",
          "Từ 4- 7 triệu",
          "Từ 7 - 13 triệu",
          "Trên 13 triệu",
        ],
        titleProduct: "Bán chạy nhất",
        imageRight: "/assets/images/apple-nav.png",
      },
      listProduct: [
        {
          id: uuidv4(),
          image: "/assets/images/p5.jpg",
          title: "iPhone 13 Pro Max 128GB",
          cost: "27.990.000 ₫",
        },
        {
          id: uuidv4(),
          image: "/assets/images/p6.jpg",
          title: "iPhone 13 128GB",
          cost: "18.990.000 ₫",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "PC - LINH KIỆN",
      nameAscii: "may-tinh-de-ban",
      icon: <FontAwesomeIcon icon={faDesktop} />,
      listSubMenu: {
        titleTop: "",
        titleCenter: "",
        titleBottom: "",
        listTop: ["PC", "Linh Kiện", "Màn hình", "Built PC"],
        listCenter: [],
        listBottom: [],
        titleCost: "",
        listCost: [""],
        titleProduct: "",
        imageRight: "",
      },
      listProduct: [],
    },
    {
      id: uuidv4(),
      title: "PHỤ KIỆN",
      icon: <FontAwesomeIcon icon={faHeadphones} />,
      listSubMenu: {
        titleTop: "Hãng sản xuất",
        titleCenter: "Đồng hồ thông minh",
        titleBottom: "hehhee",
        listTop: [
          "Apple(Iphone)",
          "Xiaomi",
          "Nokia",
          "Realme",
          "Samsung",
          "Vivo",
          "Asus",
          "OPPO",
          "Tecno",
          "Masstel",
        ],
        listCenter: [
          "Apple Watch",
          "Masstel",
          "Huewei",
          "Samsung",
          "Xiaomi",
          "OPPO",
          "Garmin",
        ],
        listBottom: [
          "Apple Watch",
          "Masstel",
          "Huewei",
          "Samsung",
          "Xiaomi",
          "OPPO",
          "Garmin",
        ],
        titleCost: "Mức giá",
        listCost: [
          "Dưới 2 triệu",
          "Từ 2 - 4 triệu",
          "Từ 4- 7 triệu",
          "Từ 7 - 13 triệu",
          "Trên 13 triệu",
        ],
        titleProduct: "Bán chạy nhất",
        imageRight: "/assets/images/phukien-nav.png",
      },
      listProduct: [
        {
          id: uuidv4(),
          image: "/assets/images/p7.jpeg",
          title: "Combo Loa Bluetooth Karaoke kèm Mic không dây ivalue F12-65N",
          cost: "1.953.000 ₫",
        },
        {
          id: uuidv4(),
          image: "/assets/images/p8.jpg",
          title: "Pin sạc dự phòng UmeTravel 10000mAh TRIP10000 Quick Charge",
          cost: "809.000 ₫",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "MÁY CŨ GIÁ RẺ",
      icon: <FontAwesomeIcon icon={faRotateLeft} />,
      listSubMenu: {
        titleTop: "Hãng sản xuất",
        titleCenter: "Đồng hồ thông minh",
        titleBottom: "hehhee",
        listTop: [
          "Apple(Iphone)",
          "Xiaomi",
          "Nokia",
          "Realme",
          "Samsung",
          "Vivo",
          "Asus",
          "OPPO",
          "Tecno",
          "Masstel",
        ],
        listCenter: [
          "Apple Watch",
          "Masstel",
          "Huewei",
          "Samsung",
          "Xiaomi",
          "OPPO",
          "Garmin",
        ],
        listBottom: [
          "Apple Watch",
          "Masstel",
          "Huewei",
          "Samsung",
          "Xiaomi",
          "OPPO",
          "Garmin",
        ],
        titleCost: "Mức giá",
        listCost: [
          "Dưới 2 triệu",
          "Từ 2 - 4 triệu",
          "Từ 4- 7 triệu",
          "Từ 7 - 13 triệu",
          "Trên 13 triệu",
        ],
        titleProduct: "Bán chạy nhất",
        imageRight: "",
      },
      listProduct: [
        {
          id: uuidv4(),
          image: "/assets/images/pro2.jpg",
          title: "iphone 12 pro max 51222222222bggggg",
          cost: "30000000",
        },
        {
          id: uuidv4(),
          image: "/assets/images/pro2.jpg",
          title: "iphone 12 pro max",
          cost: "30000000",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "HÀNG GIA DỤNG",
      icon: <FontAwesomeIcon icon={faHouseLaptop} />,
      listSubMenu: {
        titleTop: "Hãng sản xuất",
        titleCenter: "Đồng hồ thông minh",
        titleBottom: "hehhee",
        listTop: [
          "Apple(Iphone)",
          "Xiaomi",
          "Nokia",
          "Realme",
          "Samsung",
          "Vivo",
          "Asus",
          "OPPO",
          "Tecno",
          "Masstel",
        ],
        listCenter: [
          "Apple Watch",
          "Masstel",
          "Huewei",
          "Samsung",
          "Xiaomi",
          "OPPO",
          "Garmin",
        ],
        listBottom: [
          "Apple Watch",
          "Masstel",
          "Huewei",
          "Samsung",
          "Xiaomi",
          "OPPO",
          "Garmin",
        ],
        titleCost: "Mức giá",
        listCost: [
          "Dưới 2 triệu",
          "Từ 2 - 4 triệu",
          "Từ 4- 7 triệu",
          "Từ 7 - 13 triệu",
          "Trên 13 triệu",
        ],
        titleProduct: "Bán chạy nhất",
        imageRight: "",
      },
      listProduct: [
        {
          id: uuidv4(),
          image: "/assets/images/pro2.jpg",
          title: "iphone 12 pro max 51222222222bggggg",
          cost: "30000000",
        },
        {
          id: uuidv4(),
          image: "/assets/images/pro2.jpg",
          title: "iphone 12 pro max",
          cost: "30000000",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "SIM & THẺ",
      icon: <FontAwesomeIcon icon={faSimCard} />,
      listSubMenu: {
        titleTop: "Hãng sản xuất",
        titleCenter: "Đồng hồ thông minh",
        titleBottom: "hehhee",
        listTop: [
          "Apple(Iphone)",
          "Xiaomi",
          "Nokia",
          "Realme",
          "Samsung",
          "Vivo",
          "Asus",
          "OPPO",
          "Tecno",
          "Masstel",
        ],
        listCenter: [
          "Apple Watch",
          "Masstel",
          "Huewei",
          "Samsung",
          "Xiaomi",
          "OPPO",
          "Garmin",
        ],
        listBottom: [
          "Apple Watch",
          "Masstel",
          "Huewei",
          "Samsung",
          "Xiaomi",
          "OPPO",
          "Garmin",
        ],
        titleCost: "Mức giá",
        listCost: [
          "Dưới 2 triệu",
          "Từ 2 - 4 triệu",
          "Từ 4- 7 triệu",
          "Từ 7 - 13 triệu",
          "Trên 13 triệu",
        ],
        titleProduct: "Bán chạy nhất",
        imageRight: "",
      },
      listProduct: [
        {
          id: uuidv4(),
          image: "/assets/images/pro2.jpg",
          title: "iphone 12 pro max 51222222222bggggg",
          cost: "30000000",
        },
        {
          id: uuidv4(),
          image: "/assets/images/pro2.jpg",
          title: "iphone 12 pro max",
          cost: "30000000",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "KHUYẾN MÃI",
      icon: <FontAwesomeIcon icon={faUniversalAccess} />,
      listSubMenu: {
        titleTop: "",
        titleCenter: "",
        titleBottom: "",
        listTop: ["Thông tin trao thưởng", "Tin tức khuyến mãi"],
        listCenter: [],
        listBottom: [],
        titleCost: "Mức giá",
        listCost: [
          "Dưới 2 triệu",
          "Từ 2 - 4 triệu",
          "Từ 4- 7 triệu",
          "Từ 7 - 13 triệu",
          "Trên 13 triệu",
        ],
        titleProduct: "Bán chạy nhất",
        imageRight: "",
      },
      listProduct: [
        {
          id: uuidv4(),
          image: "/assets/images/pro2.jpg",
          title: "iphone 12 pro max 51222222222bggggg",
          cost: "30000000",
        },
        {
          id: uuidv4(),
          image: "/assets/images/pro2.jpg",
          title: "iphone 12 pro max",
          cost: "30000000",
        },
      ],
    },
  ];

  return (
    <NavWrapper>
      <ul className="list-nav">
        {listNavigation.map((item) => {
          return <NavItem key={item.id} NavItem={item} />;
        })}
      </ul>
      <div className="menu-icon">
        <Burger open={open} setOpen={setOpen} />
      </div>
      <div className={`menu-content-mobile ${open ? "open" : ""}`}>
        <Link to="/">
          <span className="logo">
            <img src="/assets/images/logoshoplaptop.png" alt="logo" />
          </span>
          <div className="logoo">
            <span className="shop">Shop</span>
            <span className="com">.Com.vn</span>
          </div>
        </Link>
        <div className="menu-mobile-nav">
          <ul className="list-nav-mobile">
            {listNavigation.map((item) => {
              return <NavItem key={item.id} NavItem={item} />;
            })}
          </ul>
        </div>
      </div>
    </NavWrapper>
  );
};
export default Navigation;
