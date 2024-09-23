import React from "react";
import ListFilter from "./ListFilter";
import { FilterAccessoryWrapper } from "./style";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRibbon,
  faHardDrive,
  faTv,
  faBriefcase,
  faKeyboard,
  faBatteryQuarter,
  faComputerMouse,
  faMobile,
  faSdCard,
  faAppleWhole,
  faHeadphones,
  faBroom,
  faLaptopCode,
  faBolt,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

const FilterAccessory = () => {
  const listFilter = [
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faRibbon} />,
      title: "Phụ kiện nổi bật",
      // nameAscii: "phu-kien-noi-bat",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faMobile} />,
      title: "Bao da ốp lưng",
      // nameAscii: "bao-da-op-lung",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faBatteryQuarter} />,
      title: "Sạc dự phòng",
      // nameAscii: "sac-du-phong",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faSdCard} />,
      title: "Thẻ nhớ",
      // nameAscii: "the-nho",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faAppleWhole} />,
      title: "Phụ kiện Apple",
      // nameAscii: "phu-kien-apple",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faMobile} />,
      title: "Miếng dán màn hình",
      // nameAscii: "mieng-dan-man-hinh",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faHeadphones} />,
      title: "Tai nghe",
      // nameAscii: "tai-nghe",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faBroom} />,
      title: "Mực in",
      // nameAscii: "muc-in",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faLaptopCode} />,
      title: "Loa",
      // nameAscii: "loa",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faHardDrive} />,
      title: "USB-ổ cứng",
      // nameAscii: "usb-o-cung",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faBolt} />,
      title: "Sạc cáp",
      // nameAscii: "sac-cap",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faComputerMouse} />,
      title: "Chuột",
      // nameAscii: "chuot",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Bàn phím",
      // nameAscii: "ban-phim",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faBriefcase} />,
      title: "Balo túi xách",
      // nameAscii: "balo-tui-xach",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faTv} />,
      title: "TV - BOX",
      // nameAscii: "tv-box",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faEllipsis} />,
      title: "Phụ kiện khác",
      // nameAscii: "phu-kien-khac",
    },
  ];
  return (
    <FilterAccessoryWrapper>
      <ListFilter listFilter={listFilter} />
    </FilterAccessoryWrapper>
  );
};

export default FilterAccessory;
