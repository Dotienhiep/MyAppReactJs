import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
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

  const api = `https://api-nodejs-backend.onrender.com/product/search/${key}`;

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

  // Tìm kiếm tương đối
  const filteredData = listData.filter((item) => {
    const keywords = key.toLowerCase().split(" ");
    return keywords.every((keyword) =>
      item.name.toLowerCase().includes(keyword)
    );
  });

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

  return (
    <SearchWrapper>
      <Header />
      <DealNav />
      <div className="list-search">
        {filteredData.length === 0 ? (
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
