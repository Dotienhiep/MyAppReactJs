import React, { useState, useEffect } from "react";
import { TabsSaleWrapper } from "./style";
import TabItem from "./TabItem";
import SliderProduct from "./SliderProduct";
import SliderProduct1 from "./SilderProduct1";
import SliderProduct2 from "./SliderProduct2";
import SliderProduct3 from "./SliderProduct3";
import { getListProduct, getListProductHome } from "./../../../services";
import Loading from "./../../../Components/Common/Loading";

const TabsSale = () => {
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndexActive, setCurrentIndexActive] = useState(0);
  const listTab = [
    {
      id: 1,
      title: "7/8",
      content: "Đã kết thúc",
    },
    {
      id: 2,
      title: "8/8",
      content: "Đã kết thúc",
    },
    {
      id: 3,
      title: "9/8",
      content: "Sắp diễn ra",
    },
    {
      id: 4,
      title: "10/8",
      content: "Sắp diễn ra",
    },
  ];
  // const listData = [
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro1.jpg",
  //     title: "Ipad pro 11 M1 Wifi 128GB",
  //     cost: "22.990.000dd",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  // ];
  // const listData1 = [
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro3.jpg",
  //     title: "ehehhehe",
  //     cost: "hehehhe",
  //     btn: "heheheheh",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro4.jpg",
  //     title: "hheheheh",
  //     cost: "hdhdhdhdhhd",
  //     btn: "kakakakakak",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro5.jpg",
  //     title: "hheheheh",
  //     cost: "hdhdhdhdhhd",
  //     btn: "kakakakakak",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro6.jpg",
  //     title: "hheheheh",
  //     cost: "hdhdhdhdhhd",
  //     btn: "kakakakakak",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro7.jpg",
  //     title: "hheheheh",
  //     cost: "hdhdhdhdhhd",
  //     btn: "kakakakakak",
  //   },
  //   {
  //       id: uuidv4(),
  //       image: "/assets/images/pro8.jpg",
  //       title: "hheheheh",
  //       cost: "hdhdhdhdhhd",
  //       btn: "kakakakakak",
  //     },
  //     {
  //       id: uuidv4(),
  //       image: "/assets/images/pro8.jpg",
  //       title: "hheheheh",
  //       cost: "hdhdhdhdhhd",
  //       btn: "kakakakakak",
  //     },
  //     {
  //       id: uuidv4(),
  //       image: "/assets/images/pro8.jpg",
  //       title: "hheheheh",
  //       cost: "hdhdhdhdhhd",
  //       btn: "kakakakakak",
  //     }
  // ];
  // const listData2 = [
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro1.jpg",
  //     title: "Ipad pro 11 M1 Wifi 128GB",
  //     cost: "22.990.000dd",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  // ];
  // const listData3 = [
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro1.jpg",
  //     title: "Ipad pro 11 M1 Wifi 128GB",
  //     cost: "22.990.000dd",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  //   {
  //     id: uuidv4(),
  //     image: "/assets/images/pro2.jpg",
  //     title: "HP envy 13 ba1536TU core i5 1135g7",
  //     cost: "23.990.000đ",
  //     btn: "Đã kết thúc",
  //   },
  // ];
  useEffect(() => {
    const initData = async () => {
      try {
        setIsLoading(true);
        const response = await getListProductHome();
        const { data, status } = response;
        // console.log("res", response);
        if (status === 200) {
          setIsLoading(false);
          setListData(data.products);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };
    initData();
  }, []);
  if (isLoading) return <Loading />;

  const handleChangeTab = (currentIndex) => {
    setCurrentIndexActive(currentIndex);
  };

  const renderTabContent = () => {
    switch (currentIndexActive) {
      case 0:
        return <SliderProduct listData={listData} isInfinity={true} />;
      case 1:
        return <SliderProduct1 listData={listData} isInfinity={true} />;
      case 2:
        return <SliderProduct2 listData={listData} isInfinity={true} />;
      case 3:
        return <SliderProduct3 listData={listData} isInfinity={true} />;
      default:
        return "";
    }
  };
  //
  return (
    <TabsSaleWrapper>
      <div className="container-content-banner">
        <div className="flashsale-title">
          <img src="/assets/images/flashsale-banner.png" alt="" />
        </div>
        <div className="flashsale-banner">
          <img src="/assets/images/flash-banner-image.png" alt="" />
        </div>
      </div>
      <TabItem
        listTab={listTab}
        currentIndexActive={currentIndexActive}
        onChangeTab={handleChangeTab}
      >
        {renderTabContent()}
      </TabItem>
    </TabsSaleWrapper>
  );
};

export default TabsSale;
