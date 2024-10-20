import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../Search/ProductItem";
// import ProductItem from "../Category/FilterProduct/ProductItem";
import { SearchWrapper } from "./style";
import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";
import Copyright from "../../Components/Common/Copyright";
import { getListProduct } from "./../../services";
import Loading from "../../Components/Common/Loading";
import DealNav from "../../Components/Common/DealNav";

const Search = ({ onAdd }) => {
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { key } = useParams();
  // const [inputValue, setInputValue] = useState("");
  // console.log(listData);
  console.log("key", key);
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
  const filteredData = listData.filter((item) =>
    item.name.toLowerCase().includes(key.toLowerCase())
  );
  // console.log("filterData",filterData);
  if (isLoading) return <Loading />;
  if (!key) {
    return (
      <SearchWrapper>
        <Header />
        <DealNav />
        <div className="search-no-product">
          <span className="title-search">Vui lòng nhập tên sản phẩm</span>
        </div>
        <Footer />
        <Copyright />
      </SearchWrapper>
    );
  }
  console.log("listDataa sẻarrch===", listData);
  return (
    <SearchWrapper>
      <Header />
      <DealNav />
      <div className="list-search">
        {/* 1 điều kiện nữa khi key sai log ra ..... */}
        {filteredData.length === 0 || "" ? (
          <div className="search-no-product">
            <img src="/assets/images/khongtimthaysanpham.png" alt="" />
            <span className="title-search">Rất tiếc ! Sorry !</span>
            <span>
              Không tìm thấy sản phẩm phù hợp với từ khoá :{" "}
              <strong>{key}</strong>
            </span>
          </div>
        ) : (
          filteredData.map((item) => {
            return (
              <ProductItem
                className="product-search"
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
