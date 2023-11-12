import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailWrapper } from "./style";
import { getListProduct } from "./../../services";
import Header from "../../Components/Common/Header";
import Navigation from "./../Home/Navigation";
import Footer from "../../Components/Common/Footer";
import Copyright from "../../Components/Common/Copyright";
import Loading from "../../Components/Common/Loading";
import { Link } from "react-router-dom";
import "./font-awesome.css";
import Modal from "./Modal";
import axios from "axios"

const Detail = ({ onAdd }) => {
  const lorem = "Thông tin đang được cập nhật";
  const [listData, setListData] = useState([]);
  const [listReview, setListReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [star, setStar] = useState(null);
  const [comment, setComment] = useState("");
  const [refresh, setRefresh] = useState(1);
  const { productId } = useParams();
  // const [mainImage, setMainImage] = useState('');
  // const [thumbnailImages, setThumbnailImages] = useState([]);
  // console.log("idpro",productId);
  const callAPI = (api) => {
    const response = getListProduct(api);
    return response;
  };
  function format(n, currency) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") + currency;
  }
  const openModal = () => {
    if (comment && star) setModal(true);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setComment(value);
  };
  const image = "https://api-nodejs-backend.onrender.com/";
  useEffect(() => {
    const initData = async () => {
      try {
        setIsLoading(true);
        const response = await callAPI(
          `https://api-nodejs-backend.onrender.com/product/${productId}`
        );
        const responseReview = await callAPI(
          `https://api-nodejs-backend.onrender.com/review/${productId}`
        );
        // const urlImage = await callAPI(
        //   `https://api-nodejs-backend.onrender.com/product/${productId}`
        // )
        const { data, status } = response;

        if (status === 200 && responseReview) {
          setIsLoading(false);
          setListData(data.product);
          console.log("dataaaaaproduct=====".data.product);
          setListReview(responseReview.data.listReview);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };
    initData();
  }, []);
  //imageapi
  if (isLoading) return <Loading />;
  // const handleThumbnailClick = (imagePath) => {
  //   setMainImage(imagePath);
  // };
  // console.log(listReview)
  console.log("listData", listData);
  // const productDetail = listData?.find((item) => {
  //   // console.log("porductId",typeof productId);
  //   // console.log("itemid",typeof item._id);
  //   if (item._id === productId) return true;
  // });
  // console.log("productDetail", productDetail);
  //memory
  // console.log("lítDtaa", listData);
  const priceMory = parseInt(listData?.price);
  const priceHehe = format(priceMory, " VND");
  // console.log(priceHehe);
  return (
    <DetailWrapper>
      <Header />
      <Navigation />
      <div className="detail-wrapper">
        <div className="title-detail-product-length">
          <h1 className="title-detail">{listData?.name}</h1>
          <span className="length-product">
            Số sản phẩm đã bán : {listData?.totalOrder}
          </span>
        </div>
        <div className="content-detail-product">
          <div className="image-detail-product">
            <div className="image-acc">
              <img src={image.concat(listData?.urlPicture)} alt="" />
            </div>
            {/* callAPI lấy image */}
            {/* <div className="thumbnail-list">
              {thumbnailImages.map((image, index) => (
                <div
                  key={index}
                  className="thumbnail"
                  onClick={() => handleThumbnailClick(image)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div> */}
          </div>
          <div className="information-product-detail">
            {/* <Tabs
              selectedIndex={tabIndex}
              onSelect={(tabIndex) => setTabIndex(tabIndex)}
            >
              {productDetail?.listProductGroupDetail.map((item) => {
                return <TabPanel>{format(item?.price, " đ")}</TabPanel>;
              })}
              <TabList>
                {productDetail?.listProductGroupDetail.map((item, index) => {
                  return (
                    <Tab
                      className={`tab-item ${
                        tabIndex === index ? "active-tab" : ""
                      }`}
                    >
                      <div className="tab-a">
                        <span className="text-storage">
                          <p
                            className={`button ${
                              tabIndex === index ? "active" : ""
                            }`}
                          ></p>
                        </span>
                        {item?.storage}
                      </div>
                      <div className="">{format(item?.price, "")}</div>
                    </Tab>
                  );
                })}
              </TabList>
            </Tabs> */}
            <div className="price-detail">{priceHehe}</div>
            <div className="">
              <div className="title------"></div>
              {listData?.listAttrDetailShort?.map((item) => {
                return (
                  <div key={item._id} className="info-detail">
                    <span className="title-info">{item?.attributeName} :</span>
                    <span className="content-info">{item?.value}</span>
                  </div>
                );
              })}
            </div>
            <span className="description">
              {listData?.description || lorem}
            </span>
            <div className="list-btn-detail">
              <button
                onClick={() => onAdd(listData)}
                className="submit-btn-detail-first"
              >
                <p className="title-btn-detail">
                  <Link to="/cart">MUA NGAY</Link>
                </p>
                <p className="content-btn-detail">
                  Giao hàng miễn phí hoặc nhận tại Shop
                </p>
              </button>
              <div className="list-btn-bottom">
                <button className="">
                  <p className="title-btn-detail">Trả góp 0%</p>
                  <p className="content-btn-detail">
                    Duyệt nhanh qua điện thoại
                  </p>
                </button>
                <button className="">
                  <p className="title-btn-detail">Trả góp qua thẻ</p>
                  <p className="content-btn-detail">
                    Visa ,card ,MasterCard ,...
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vote-detail-product">
        <h4>Đánh giá sản phẩm : {listData?.name}</h4>
        <hr></hr>
        <div className="form-upload">
          <textarea
            name="comment"
            value={comment}
            onChange={(e) => handleChange(e)}
            placeholder="Bạn có khuyên người khác mua sản phẩm không ? Tại sao ?"
            id="write-comment"
          ></textarea>
          <button onClick={() => openModal()}>Gửi đánh giá</button>
          <div className="stars">
            <form action="">
              <input
                onClick={() => setStar(5)}
                className="star star-5"
                id="star-5"
                type="radio"
                name="star"
              />
              <label className="star star-5" for="star-5"></label>
              <input
                onClick={() => setStar(4)}
                className="star star-4"
                id="star-4"
                type="radio"
                name="star"
              />
              <label className="star star-4" for="star-4"></label>
              <input
                onClick={() => setStar(3)}
                className="star star-3"
                id="star-3"
                type="radio"
                name="star"
              />
              <label className="star star-3" for="star-3"></label>
              <input
                onClick={() => setStar(2)}
                className="star star-2"
                id="star-2"
                type="radio"
                name="star"
              />
              <label className="star star-2" for="star-2"></label>
              <input
                onClick={() => setStar(1)}
                className="star star-1"
                id="star-1"
                type="radio"
                name="star"
              />
              <label className="star star-1" for="star-1"></label>
            </form>
          </div>
        </div>
        <div className="list-comment">
          <Review listReview={listReview}></Review>
          <Modal
            isShow={modal}
            close={setModal}
            star={star}
            comment={comment}
            refresh={refresh}
            setRefresh={setRefresh}
            productId={productId}
          />
        </div>
      </div>
      <Footer />
      <Copyright />
    </DetailWrapper>
  );
};

const Review = ({ listReview }) => {
  return listReview.map((item) => (
    <div className="comment-item" style={{ marginTop: "40px" }}>
      <img
        src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
        alt=""
      />
      <div className="content-comment">
        <h5>{item.customer.name}</h5>
        <p>Số sao: {item.rating}</p>
        <p>{item.comment}</p>
        {/* <span>{'4 gio truoc'}</span> */}
      </div>
    </div>
  ));
};

export default Detail;
