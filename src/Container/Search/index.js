import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../Category/FilterProduct/ProductItem";
import { SearchWrapper } from "./style";
import Header from "../../Components/Common/Header";
import Navigation from "./../Home/Navigation";
import Footer from "../../Components/Common/Footer";
import Copyright from "../../Components/Common/Copyright";
import { getListProduct } from "./../../services";
import Loading from "../../Components/Common/Loading";

const Search = ({ onAdd }) => {
  // const [dataList, setDataList] = useState([]);
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { key } = useParams();
  // const [inputValue, setInputValue] = useState("");
  // console.log(listData);
  // console.log("key", key);
  // console.log("Inputvalue", inputValue);
  // const dataFilter = () => {
  //   let data = [];
  //   if (key) {
  //     data = listData.filter((item) =>
  //       item?.name.toLowerCase().includes(key.toLowerCase())
  //     );
  //     return data;
  //   }
  //   // } else {
  //   //   return (data = listData.filter((item) =>
  //   //     item?.nameExt.toLowerCase().includes(inputValue.toLowerCase())
  //   //   ));
  //   // }
  // };
  // const filterData = dataFilter();
  // console.log(typeof filterData);
  // if(filterData.length === 0) {
  //   console.log(filterData);
  //   console.log("123hehehe");
  // }
  const api = `https://api-nodejs-backend.onrender.com/product/search/${key}`;
  //
  useEffect(() => {
    const initData = async () => {
      try {
        setIsLoading(true);
        const response = await getListProduct(api);
        const { data, status } = response;
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
  }, [api]);
  // console.log("filterData",filterData);
  if (isLoading) return <Loading />;
  console.log(listData);
  return (
    <SearchWrapper>
      <Header />
      <Navigation />
      <div className="list-search">
        {/* 1 điều kiện nữa khi key sai log ra ..... */}
        {listData.length === 0 ? (
          <div className="search-no-product">
            <img src="/assets/images/khongtimthaysanpham.png" alt="" />
            <span className="title-search">Rất tiếc ! Sorry !</span>
            <span>
              Không tìm thấy sản phẩm phù hợp với từ khoá :{" "}
              <strong>{key}</strong>
            </span>
          </div>
        ) : (
          listData.map((item) => {
            return (
              <ProductItem
                className="product"
                key={item._id}
                onAdd={onAdd}
                listData={item}
              />
            );
          })
        )}
      </div>
      <Footer />
      <Copyright />
    </SearchWrapper>
  );
};

export default Search;
