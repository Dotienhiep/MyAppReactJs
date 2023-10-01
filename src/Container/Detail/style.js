import styled from "styled-components";

export const DetailWrapper = styled.div`
  width: 100%;
  .detail-wrapper {
    margin: 50px 100px;
  }
  .title-detail-product-length {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  .title-detail {
    font-size: 1.75rem;
  }
  .content-detail-product {
    display: flex;
  }
  .image-detail-product {
    flex-grow: 1;
    border: 1px solid transparent;
    margin-top: 30px;
  }
  .image-acc {
    width: 100%;
    height: auto;
    border: 1px solid transparent;
    background-image: url(/assets/images/banner-detail.png);
    background-repeat: no-repeat;
    background-position: center top;
  }
  .image-acc img {
    margin: 150px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .information-product-detail {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .price-detail {
    font-size: 30px;
    color: #cd1916;
    font-weight: bold;
    margin: 10px 15px;
  }
  .react-tabs__tab-list {
    display: flex;
    list-style-type: none;
    background-color: #cacaca;
  }
  .react-tabs__tab-panel {
    margin: 30px 20px;
    font-size: 28px;
    font-family: Roboto, sans-serif;
    font-weight: 600;
    color: #cd1916;
  }
  .tab-item {
    display: flex;
    width: calc(100% / 4);
    padding: 10px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
  }
  .tab-item:hover {
    background-color: #edeeef;
    border-radius: 5px;
  }
  .all-info {
    background-color: #cacaca;
  }
  .info-detail {
    margin: 10px 25px;
  }
  .title-info {
    margin-right: 10px;
    font-weight: bold;
  }
  .title------ {
    font-size: 18px;
    margin-left: 15px;
  }

  //actice
  .button {
    border: 1px solid black;
    color: #ffffff;
    border-radius: 50%;
    padding: 5px;
    display: inline-block;
    font-family: Arial;
    text-align: center;
    text-decoration: none;
    margin-right: 5px;
  }
  .tab-a {
    font-size: 14px;
    font-weight: 600;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  @-webkit-keyframes glowing {
    0% {
      background-color: #004a7f;
      -webkit-box-shadow: 0 0 3px #004a7f;
    }
    50% {
      background-color: #0094ff;
      -webkit-box-shadow: 0 0 10px #0094ff;
    }
    100% {
      background-color: #004a7f;
      -webkit-box-shadow: 0 0 3px #004a7f;
    }
  }
  @-moz-keyframes glowing {
    0% {
      background-color: #004a7f;
      -moz-box-shadow: 0 0 3px #004a7f;
    }
    50% {
      background-color: #0094ff;
      -moz-box-shadow: 0 0 10px #0094ff;
    }
    100% {
      background-color: #004a7f;
      -moz-box-shadow: 0 0 3px #004a7f;
    }
  }
  @-o-keyframes glowing {
    0% {
      background-color: #004a7f;
      box-shadow: 0 0 3px #004a7f;
    }
    50% {
      background-color: #0094ff;
      box-shadow: 0 0 10px #0094ff;
    }
    100% {
      background-color: #004a7f;
      box-shadow: 0 0 3px #004a7f;
    }
  }
  @keyframes glowing {
    0% {
      background-color: #004a7f;
      box-shadow: 0 0 3px #004a7f;
    }
    50% {
      background-color: #0094ff;
      box-shadow: 0 0 10px #0094ff;
    }
    100% {
      background-color: #004a7f;
      box-shadow: 0 0 3px #004a7f;
    }
  }
  .active {
    -webkit-animation: glowing 1500ms infinite;
    -moz-animation: glowing 1500ms infinite;
    -o-animation: glowing 1500ms infinite;
    animation: glowing 1500ms infinite;
    font-size: 6px;
    background-color: #000;
    padding: 5px;
  }
  .active-tab {
    background-color: #edeeef;
  }
  .description {
    padding: 20px;
    font-size: 1rem;
    font-weight: 450;
    line-height: 1.6rem;
  }
  .list-btn-detail {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 15px;
  }
  .list-btn-detail .submit-btn-detail-first {
    padding: 10px 20px;
    border: none;
    outline: none;
    background-color: #cd1916;
    color: #fff;
    border-radius: 3px;
  }
  .list-btn-detail .submit-btn-detail-first:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  .title-btn-detail a {
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
  .content-btn-detail {
    font-size: 14px;
  }
  .list-btn-bottom {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list-btn-bottom button {
    padding: 10px 65px;
    background-color: #0763f9;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  .list-btn-bottom button:hover {
    opacity: 0.8;
  }
  .vote-detail-product {
    margin: 50px 100px;
  }
  .vote-detail-product h4 {
    margin: 15px 0;
    font-size: 20px;
  }
  .list-comment {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  .list-comment .comment-item {
    display: flex;
  }
  .list-comment .comment-item img {
    width: 70px;
    height: 70px;
    object-fit: cover;
  }
  .list-comment .comment-item .content-comment {
    margin-left: 20px;
  }
  .list-comment .comment-item h5 {
    font-size: 18px;
  }
  .list-comment .comment-item p {
    font-size: 15px;
    margin: 10px 0;
  }
  .form-upload {
    border: none;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  .form-upload textarea {
    width: 100%;
    height: 68px;
    border-radius: 4px;
    border: 1px solid #ced4da;
    padding: 8px 123px 8px 8px;
    background-color: #fff;
    font-size: 16px;
    outline: none;
  }
  .form-upload button {
    padding: 10px 11px;
    position: absolute;
    top: 15px;
    right: 20px;
    outline: none;
    border: none;
    font-size: 14px;
    border-radius: 5px;
    background-color: #cd1916;
    color: #fff;
  }
  /* rate star */
  div.stars {
    width: 270px;
    display: inline-block;
  }

  input.star {
    display: none;
  }

  label.star {
    float: right;
    padding: 10px;
    font-size: 36px;
    color: #444;
    transition: all 0.2s;
  }

  input.star:checked ~ label.star:before {
    content: "\f005";
    color: #fd4;
    transition: all 0.25s;
  }

  input.star-5:checked ~ label.star:before {
    color: #fe7;
    text-shadow: 0 0 20px #952;
  }

  input.star-1:checked ~ label.star:before {
    color: #f62;
  }

  label.star:hover {
    transform: rotate(-15deg) scale(1.3);
  }

  label.star:before {
    content: "\f006";
    font-family: FontAwesome;
  }
`;
