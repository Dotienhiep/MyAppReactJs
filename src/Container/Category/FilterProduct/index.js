import React, { useState, useEffect } from "react";
import { FilterProductWrapper } from "./style";
import ProductItem from "./ProductItem";
import { getListProduct } from "./../../../services";
import Loading from "./../../../Components/Common/Loading";
import { useParams } from "react-router";
import removeVietnameseTones from "../../../utils/CharAsciiConvert";
import { range } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

const ProductType = [
  {
    id: "62f02663ca101bdf38a06f7b",
    name: "Điện thoại",
    nameAscii: "dien-thoai",
    subName: "Điện thoại",
    brand: [
      {
        name: "Tất cả",
      },
      {
        id: "62f0190024895662a4b85deb",
        name: "Samsung",
        nameAscii: "samsung",
        // thêm mỗi cái 1 price....
      },
      {
        id: "62f0194fcd115398719c4a58",
        name: "OPPO",
        nameAscii: "oppo",
      },
      {
        id: "62f0190024895662a4b85dec",
        name: "Xiaomi",
        nameAscii: "xiaomi",
      },
      {
        id: "62f0194fcd115398719c4a59",
        name: "Tecno",
        nameAscii: "tecno",
      },
      {
        id: "62f0190024895662a4b85dee",
        name: "Nokia",
        nameAscii: "nokia",
      },
      {
        id: "62f0194fcd115398719c4a5a",
        name: "Realme",
        nameAscii: "realme",
      },
      {
        id: "62f0194fcd115398719c4a5b",
        name: "Apple (Iphone)",
        nameAscii: "apple-iphone",
      },
      {
        id: "62f0194fcd115398719c4a5c",
        name: "Vivo",
        nameAscii: "vivo",
      },
    ],
    price: [
      {
        id: 1,
        priceFilter: "từ 0 triệu tới 3 triệu",
      },
      {
        id: 2,
        priceFilter: "từ 3 triệu tới 7 triệu",
      },
      {
        id: 3,
        priceFilter: "từ 7 triệu trở lên",
      },
    ],
  },
  {
    id: "62f02663ca101bdf38a06f7c",
    name: "Máy tính bảng",
    nameAscii: "may-tinh-bang",
    subName: "Ipad",
    brand: [
      {
        name: "Tất cả",
      },
      {
        id: "62f0190024895662a4b85dea",
        name: "Apple (iPad)",
        nameAscii: "apple-ipad",
      },
      {
        id: "62f0190024895662a4b85deb",
        name: "Samsung",
        nameAscii: "samsung",
      },
      {
        id: "62f0190024895662a4b85dec",
        name: "Xiaomi",
        nameAscii: "xiaomi",
      },
      {
        id: "62f0190024895662a4b85ded",
        name: "Lenovo",
        nameAscii: "lenovo",
      },
      {
        id: "62f0190024895662a4b85dee",
        name: "Nokia",
        nameAscii: "nokia",
      },
      {
        id: "62f0190024895662a4b85def",
        name: "Coolpad",
        nameAscii: "coolpad",
      },
    ],
    price: [
      {
        id: 1,
        priceFilter: "từ 0 triệu tới 7 triệu",
      },
      {
        id: 2,
        priceFilter: "từ 7 triệu tới 12 triệu",
      },
      {
        id: 3,
        priceFilter: "từ 12 triệu trở lên",
      },
    ],
  },
  {
    id: "62f02663ca101bdf38a06f7d",
    name: "Máy tính xách tay",
    nameAscii: "may-tinh-xach-tay",
    subName: "Laptop",
    brand: [
      {
        name: "Tất cả",
      },
      {
        id: "62f0199ad6fcc4d9d5c94cbd",
        name: "Apple (Macbook)",
        nameAscii: "apple-macbook",
      },
      {
        id: "62f0199ad6fcc4d9d5c94cbe",
        name: "Asus",
        nameAscii: "asus",
      },
      {
        id: "62f0199ad6fcc4d9d5c94cbf",
        name: "Dell",
        nameAscii: "dell",
      },
      {
        id: "62f0190024895662a4b85ded",
        name: "Lenovo",
        nameAscii: "lenovo",
      },
      {
        id: "62f0199ad6fcc4d9d5c94cc0",
        name: "MSI",
        nameAscii: "msi",
      },
      {
        id: "62f0199ad6fcc4d9d5c94cc1",
        name: "Acer",
        nameAscii: "acer",
      },
    ],
    price: [
      {
        id: 1,
        priceFilter: "từ 0 triệu tới 7 triệu",
      },
      {
        id: 2,
        priceFilter: "từ 7 triệu tới 12 triệu",
      },
      {
        id: 3,
        priceFilter: "từ 12 triệu trở lên",
      },
    ],
  },
  {
    id: "62f02663ca101bdf38a06f7e",
    name: "Máy tính để bàn",
    nameAscii: "may-tinh-de-ban",
    subName: "PC",
    brand: [
      {
        name: "Tất cả",
      },
      {
        id: "62f019e5296e5ce5a0b62096",
        name: "Apple (iMac)",
        nameAscii: "apple-imac",
      },
      {
        id: "62f019e5296e5ce5a0b62097",
        name: "HP",
        nameAscii: "hp",
      },
      {
        id: "62f0199ad6fcc4d9d5c94cbe",
        name: "Asus",
        nameAscii: "asus",
      },
      {
        id: "62f0190024895662a4b85ded",
        name: "Lenovo",
        nameAscii: "lenovo",
      },
    ],
    price: [
      {
        id: 1,
        priceFilter: "từ 0 triệu tới 7 triệu",
      },
      {
        id: 2,
        priceFilter: "từ 7 triệu tới 12 triệu",
      },
      {
        id: 3,
        priceFilter: "từ 12 triệu trở lên",
      },
    ],
  },
  {
    id: "62f02663ca101bdf38a06f7f",
    name: "Màn hình",
    nameAscii: "man-hinh",
    subName: "Màn hình",
    brand: [
      {
        id: "62f01a674cc7ea2945e63fa5",
        name: "Apple",
        nameAscii: "apple",
      },
      {
        id: "62f0190024895662a4b85deb",
        name: "Samsung",
        nameAscii: "samsung",
      },
      {
        id: "62f0190024895662a4b85dec",
        name: "Xiaomi",
        nameAscii: "xiaomi",
      },
      {
        id: "62f01a674cc7ea2945e63fa6",
        name: "LG",
        nameAscii: "lg",
      },
      {
        id: "62f0199ad6fcc4d9d5c94cc0",
        name: "MSI",
        nameAscii: "msi",
      },
      {
        id: "62f0199ad6fcc4d9d5c94cbf",
        name: "Dell",
        nameAscii: "dell",
      },
      {
        id: "62f0199ad6fcc4d9d5c94cc1",
        name: "Acer",
        nameAscii: "acer",
      },
    ],
    price: [
      {
        id: 1,
        priceFilter: "từ 0 triệu tới 7 triệu",
      },
      {
        id: 2,
        priceFilter: "từ 7 triệu tới 12 triệu",
      },
      {
        id: 3,
        priceFilter: "từ 12 triệu trở lên",
      },
    ],
  },
];
const FilterProduct = ({ onAdd }) => {
  // const listBrand = [
  //   {
  //     id: uuidv4(),
  //     title: "Tất cả"
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "iPhone"
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "Samsung"
  //   }
  // {
  //   id: uuidv4(),
  //   title: "Vivo"
  // },
  // {
  //   id: uuidv4(),
  //   title: "Xiaomi"
  // },
  // {
  //   id: uuidv4(),
  //   title: "Masstel"
  // },
  // {
  //   id: uuidv4(),
  //   title: "Tecno"
  // },
  // {
  //   id: uuidv4(),
  //   title: "Asus"
  // },
  // {
  //   id: uuidv4(),
  //   title: "Realme"
  // },
  // {
  //   id: uuidv4(),
  //   title: "OPPO"
  // },
  // {
  //   id: uuidv4(),
  //   title: "Nokia"
  // }
  // ];
  const [listData, setListData] = useState([]);
  const [checked, setChecked] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const { productType } = useParams();
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const brand = checked.reduce((arr, item) => {
    arr.push(removeVietnameseTones(item));
    return arr;
  }, []);
  const queryObject = {
    brand: params.brand || brand.toString(),
    page: params.page || currentIndex,
  };
  // const type = ProductType.filter((obj) => {
  //   if (obj.nameAscii === productType) return obj;
  // });
  const type = ProductType.filter((obj) => {
    return obj.nameAscii === productType;
  });
  const listBrand = type[0].brand;
  const listPriceFilter = type[0].price;
  // thêm price
  const searchParams = new URLSearchParams(Object.entries(queryObject));
  const api = `https://api-nodejs-backend.onrender.com/product/type/${productType}?${searchParams}`;
  useEffect(() => {
    const initData = async () => {
      try {
        setIsLoading(true);
        const response = await getListProduct(api);
        const { data, status } = response;
        // console.log(data);
        if (status === 200) {
          setIsLoading(false);
          setListData(data.data.listProduct);
          setTotalPage(Math.ceil(data.data.totalProduct / 12));
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };
    initData();
  }, [api]);
  if (isLoading) return <Loading />;
  // if (!isLoading) return <h1>Khong co san pham nao</h1>

  //check brand
  const handleChange = (e) => {
    const value = e.target.value;
    setCurrentIndex(1);
    if (value === "Tất cả") setChecked([]);
    else {
      if (!checked.includes(value)) setChecked([...checked, e.target.value]);
      else {
        const array = checked.reduce((arr, item) => {
          if (item === value) return arr;
          arr.push(item);
          // console.log(arr);
          return arr;
        }, []);
        setChecked(array);
      }
    }
  };
  //check price
  // const handlePriceFilter = (e) => {
  //   const value = e.target.value
  //   if(price >1000000) {

  //   }
  // }

  //pagination
  // console.log("totalpgae",totalPage);
  const handleChangeIndex = (index) => {
    setCurrentIndex(index + 1);
  };
  // if (!listCountry.length) return null;
  //btn
  const handlePrev = () => {
    // console.log("hehehe");
    // prev vo han
    if (currentIndex === 1) {
      setCurrentIndex(currentIndex);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleNext = () => {
    // next vo han
    // console.log("curentIndex", currentIndex);
    // console.log("totalpgae", totalPage);
    if (currentIndex === totalPage - 1) {
      // next vo han
      // console.log("hahahahhahha");
      setCurrentIndex(currentIndex);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  console.log("rrrrr", listData);
  return (
    <FilterProductWrapper>
      <div className="list-filter">
        <div className="brand">Hãng sản xuất </div>
        <div className="filter">
          {listBrand.map((item) => {
            return (
              <div className="filter-item" key={item.id}>
                <label htmlFor="checkbox">
                  <input
                    value={item.name}
                    autoFocus={true}
                    type="checkbox"
                    id="checkbox"
                    checked={
                      item.name === "Tất cả" && checked.length === 0
                        ? true
                        : checked.includes(item.name)
                    }
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </label>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        {/* <div className="price">Theo giá</div>
        <div className="">
          {listPriceFilter.map((item) => {
            return (
              <div className="filter-item" key={item.id}>
                <label htmlFor="checkbox">
                  <input
                    value={item.priceFilter}
                    autoFocus={true}
                    type="checkbox"
                    id="checkbox"
                    // checked={
                    //   item.name === "Tất cả" && checked.length === 0
                    //     ? true
                    //     : checked.includes(item.name)
                    // }
                    // onChange={(e) => {
                    //   handleChange(e);
                    // }}
                  />
                </label>
                <span>{item.priceFilter}</span>
              </div>
            );
          })}
        </div> */}
      </div>
      <div className="category">
        {checked.length > 0 && (
          <div className="check-category">{`Lọc sản phẩm theo: ${checked}`}</div>
          //lọc theo giá....
        )}
        <div className="list-product-page">
          <div className="list-product">
            {listData.map((item) => {
              return (
                <ProductItem key={item._id} listData={item} onAdd={onAdd} />
              );
            })}
          </div>
          <div className="pagination">
            {currentIndex === 1 ? (
              <button
                className="btn-prev"
                disabled={currentIndex === 1}
                onClick={handlePrev}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
            ) : (
              <button
                className="btn-prev"
                disabled={currentIndex === 1}
                onClick={handlePrev}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
            )}
            {range(totalPage).map((item, index) => {
              return (
                <span
                  onClick={() => {
                    handleChangeIndex(index);
                  }}
                  className={`page ${
                    currentIndex === index + 1 ? "active-pagination" : ""
                  }`}
                >
                  {index + 1}
                </span>
              );
            })}
            {currentIndex === Number(totalPage) ? (
              <button
                className="btn-next"
                disabled={currentIndex === totalPage}
                onClick={handleNext}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            ) : (
              <button
                className="btn-next"
                disabled={currentIndex === totalPage}
                onClick={handleNext}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            )}
          </div>
        </div>
      </div>
    </FilterProductWrapper>
  );
};

export default FilterProduct;
