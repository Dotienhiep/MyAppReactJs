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
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faMobile} />,
      title: "Bao da ốp lưng",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faBatteryQuarter} />,
      title: "Sạc dự phòng",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faSdCard} />,
      title: "Thẻ nhớ",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faAppleWhole} />,
      title: "Phụ kiện Apple",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faMobile} />,
      title: "Miếng dán màn hình",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faHeadphones} />,
      title: "Tai nghe",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faBroom} />,
      title: "Mực in",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faLaptopCode} />,
      title: "Loa",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faHardDrive} />,
      title: "USB-ổ cứng",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faBolt} />,
      title: "Sạc cáp",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faComputerMouse} />,
      title: "Chuột",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Bàn phím",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faBriefcase} />,
      title: "Balo túi xách",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faTv} />,
      title: "TV - BOX",
    },
    {
      id: uuidv4(),
      image: <FontAwesomeIcon icon={faEllipsis} />,
      title: "Phụ kiện khác",
    },
  ];
  return (
    <FilterAccessoryWrapper>
      <ListFilter listFilter={listFilter} />
    </FilterAccessoryWrapper>
  );
};

export default FilterAccessory;
