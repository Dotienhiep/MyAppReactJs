import axios from "axios";
import { useState } from "react";
import "./style.css";
const Modal = ({
  isShow,
  close,
  star,
  comment,
  refresh,
  setRefresh,
  productId,
}) => {
  const display = isShow ? "" : "none";
  const [info, setInfo] = useState({
    name: "",
    phoneNumber: "",
  });
  const [nameError, setNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const onKeyPress = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };
  const closeModal = () => {
    setInfo({ name: "", phoneNumber: "" });
    close(false);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInfo({ ...info, [name]: value });
    if (setPhoneNumberError) setPhoneNumberError(false);
    if (setNameError) setNameError(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (info.name === "") setNameError(true);
    if (info.phoneNumber === "") setPhoneNumberError(true);
    if (info.name && info.phoneNumber) {
      const review = {
        name: info.name,
        phoneNumber: info.phoneNumber,
        rating: star,
        comment: comment,
      };
      try {
        const postReview = await axios.post(
          `https://api-nodejs-backend.onrender.com/review/${productId}`,
          review
        );
        if (postReview) {
          // console.log(postReview);
          closeModal();
          setRefresh(++refresh);
        }
      } catch (err) {
        // console.log(err);
        closeModal();
        setRefresh(++refresh);
      }
      // setRefresh(++refresh)
    }
  };
  return (
    <div
      className="md-modal"
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: display,
      }}
    >
      <div className="modal-box">
        <button
          onClick={() => {
            closeModal();
          }}
          className="rounded relative md-btn flex items-center px-3 ml-auto flex-shrink-0 justify-center  rounded-full px-0"
          style={{ minHeight: "32px", minWidth: "32px" }}
        >
          <div className="bg opacity-0 hover:opacity-20 active:opacity-40 dark:hover:opacity-30 dark:active:opacity-10 bg-shade-mid"></div>
          <span
            className="flex items-center justify-center font-medium select-none"
            style={{ cursor: "pointer" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="med text-currentColor icon"
            >
              <path
                d="M18 6 6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>{" "}
          </span>
        </button>
        <h1 className="label">Hoàn thành gửi nhận xét</h1>
        <form
          className="login_form"
          action="home.html"
          method="post"
          name="form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="font">Tên</div>
          <input
            autoComplete="off"
            onChange={(e) => handleChange(e)}
            type="text"
            value={info.name}
            name="name"
          />
          <div id="email_error" style={{ display: nameError ? "" : "none" }}>
            Vui lòng nhập tên
          </div>
          <div className="font font2">Số điện thoại</div>
          <input
            name="phoneNumber"
            onChange={(e) => handleChange(e)}
            value={info.phoneNumber}
            onKeyPress={(e) => onKeyPress(e)}
          />
          <div
            id="pass_error"
            style={{ display: phoneNumberError ? "" : "none" }}
          >
            Vui lòng nhập số điện thoại
          </div>
          <button type="submit">Gửi nhận xét</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
