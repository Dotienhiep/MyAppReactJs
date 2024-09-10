import styled from "styled-components";
import { device } from "../../contants";

export const DetailWrapper = styled.div`
  width: 100%;
  .detail-wrapper {
    margin: 100px 100px;
    @media ${device.laptop} {
      margin: 50px 50px;
    }
    @media ${device.tablet} {
      margin: 50px 50px;
    }
    @media ${device.mobile} {
      margin: 40px 30px;
    }
    @media ${device.mobileL} {
      margin: 20px 15px;
    }
    @media ${device.mobileM} {
      margin: 20px 15px;
    }
    @media ${device.mobileS} {
      margin: 20px 15px;
    }
  }
  .title-detail-product-length {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  ..title-detail-product-length h1 {
    font-size: 1.8rem;
    @media ${device.desktopS} {
      font-size: 1.7rem;
    }
    @media ${device.desktopXM} {
      font-size: 1.6rem;
    }
    @media ${device.desktopM} {
      font-size: 1.6rem;
    }
    @media ${device.laptopL} {
      font-size: 1.4rem;
    }
    @media ${device.laptopS} {
      font-size: 1.4rem;
    }
    @media ${device.laptopM} {
      font-size: 1.3rem;
    }
    @media ${device.laptopX} {
      font-size: 1.3rem;
    }
    @media ${device.laptop} {
      font-size: 1.5rem;
    }
    @media ${device.tablet} {
      font-size: 1.5rem;
    }
    @media ${device.mobile} {
      font-size: 1.5rem;
    }
    @media ${device.mobileL} {
      font-size: 1.5rem;
    }
    @media ${device.mobileM} {
      font-size: 2rem;
    }
    @media ${device.mobileS} {
      font-size: 1.4rem;
    }
  }
  .length-product {
    font-size: 1.6rem;
    @media ${device.desktopS} {
      font-size: 1.4rem;
    }
    @media ${device.desktopXM} {
      font-size: 1.2rem;
    }
    @media ${device.desktopM} {
      font-size: 1.1rem;
    }
    @media ${device.laptopL} {
      font-size: 1rem;
    }
    @media ${device.laptopS} {
      font-size: 0.9rem;
    }
    @media ${device.laptopM} {
      font-size: 0.8rem;
    }
    @media ${device.laptopX} {
      font-size: 0.8rem;
    }
    @media ${device.laptop} {
      font-size: 0.8rem;
    }
    @media ${device.tablet} {
      font-size: 0.8rem;
    }
    @media ${device.mobile} {
      font-size: 0.7rem;
    }
    @media ${device.mobileL} {
      font-size: 0.7rem;
    }
    @media ${device.mobileM} {
      font-size: 0.7rem;
    }
    @media ${device.mobileS} {
      font-size: 0.7rem;
    }
  }
  .content-detail-product {
    display: flex;
    @media ${device.laptop} {
      display: flex;
      flex-direction: column;
    }
    @media ${device.tablet} {
      display: flex;
      flex-direction: column;
    }
    @media ${device.mobile} {
      display: flex;
      flex-direction: column;
    }
    @media ${device.mobileL} {
      display: flex;
      flex-direction: column;
    }
    @media ${device.mobileM} {
      display: flex;
      flex-direction: column;
    }
    @media ${device.mobileS} {
      display: flex;
      flex-direction: column;
    }
  }
  .image-detail-product {
    flex-grow: 1;
    border: 1px solid transparent;
    margin-top: 30px;
  }
  /* .image-acc:hover img {
    transform: scale(1.12);
  } */
  .image-acc {
    width: 100%;
    height: 700px;
    border: 1px solid transparent;
    background-image: url(/assets/images/boder-product1.png);
    background-size: contain; /* Background sẽ nằm bên trong phần nền của div mà không tràn ra ngoài */
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    @media ${device.desktop} {
      height: 600px;
    }
    @media ${device.desktopS} {
      height: 500px;
    }
    @media ${device.desktopXM} {
      height: 450px;
    }
    @media ${device.desktopM} {
      height: 450px;
    }
    @media ${device.laptopL} {
      height: 400px;
    }
    @media ${device.laptopS} {
      height: 370px;
    }
    @media ${device.laptopM} {
      height: 350px;
    }
    @media ${device.laptopX} {
      height: 300px;
    }
    @media ${device.laptop} {
      height: 400px;
    }
    @media ${device.tablet} {
      height: 200px;
    }
    @media ${device.mobile} {
      height: 200px;
    }
    @media ${device.mobileL} {
      height: 150px;
    }
    @media ${device.mobileM} {
      height: 140px;
    }
    @media ${device.mobileS} {
      height: 120px;
    }
  }
  .image-acc img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 50%; /* Đảm bảo ảnh không vượt quá chiều rộng của div */
    max-height: 100%;
    display: block;
    background: transparent;
    overflow: hidden;
    @media ${device.desktop} {
      max-width: 35%;
    }
    @media ${device.desktopS} {
      max-width: 40%;
    }
    @media ${device.desktopXM} {
      max-width: 40%;
    }
    @media ${device.desktopM} {
      max-width: 42%;
    }
    @media ${device.laptopL} {
      max-width: 44%;
    }
    @media ${device.laptopS} {
      max-width: 43%;
    }
    @media ${device.laptopM} {
      max-width: 35%;
    }
    @media ${device.laptopX} {
      max-width: 35%;
    }
    @media ${device.laptop} {
      max-width: 35%;
    }
    @media ${device.tablet} {
      max-width: 25%;
    }
    @media ${device.mobile} {
      max-width: 35%;
    }
    @media ${device.mobileL} {
      max-width: 35%;
    }
    @media ${device.mobileM} {
      max-width: 35%;
    }
    @media ${device.mobileS} {
      max-width: 35%;
    }
  }
  .thumbnail-images {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
  }
  .thumbnail-images .list-thumbnail {
  }
  .thumbnail-images img {
    width: 100px !important;
    height: auto !important;
    margin: 5px !important;
  }
  .thumbnail-images button {
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    margin: 0 20px;
  }
  .active-thumb {
    border: 10px solid black;
    border-radius: 20px;
  }
  .information-product-detail {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    @media ${device.laptop} {
      width: 100%;
    }
    @media ${device.tablet} {
      width: 100%;
    }
    @media ${device.mobile} {
      width: 100%;
    }
    @media ${device.mobileL} {
      width: 100%;
    }
    @media ${device.mobileM} {
      width: 100%;
    }
    @media ${device.mobileS} {
      width: 100%;
    }
  }
  .price-detail {
    font-size: 30px;
    color: #cd1916;
    font-weight: bold;
    margin: 10px 15px;
    font-size: 2rem;
    @media ${device.desktopS} {
      font-size: 1.7rem;
    }
    @media ${device.desktopXM} {
      font-size: 1.6rem;
    }
    @media ${device.desktopM} {
      font-size: 1.6rem;
    }
    @media ${device.laptopL} {
      font-size: 1.5rem;
    }
    @media ${device.laptopS} {
      font-size: 1.5rem;
    }
    @media ${device.laptopM} {
      font-size: 1.4rem;
    }
    @media ${device.laptopX} {
      font-size: 1.4rem;
    }
    @media ${device.laptop} {
      font-size: 1.6rem;
    }
    @media ${device.tablet} {
      font-size: 1.5rem;
    }
    @media ${device.mobile} {
      font-size: 1.5rem;
    }
    @media ${device.mobileL} {
      font-size: 1.5rem;
    }
    @media ${device.mobileM} {
      font-size: 2rem;
    }
    @media ${device.mobileS} {
      font-size: 1.4rem;
    }
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
    font-size: 1.8rem;
    @media ${device.desktopS} {
      font-size: 1.6rem;
    }
    @media ${device.desktopXM} {
      font-size: 1.4rem;
    }
    @media ${device.desktopM} {
      font-size: 1.3rem;
    }
    @media ${device.laptopL} {
      font-size: 1.2rem;
    }
    @media ${device.laptopS} {
      font-size: 1rem;
    }
    @media ${device.laptopM} {
      font-size: 1rem;
    }
    @media ${device.laptopX} {
      font-size: 1rem;
    }
    @media ${device.laptop} {
      font-size: 1rem;
    }
    @media ${device.tablet} {
      font-size: 1rem;
    }
    @media ${device.mobile} {
      font-size: 1rem;
    }
    @media ${device.mobileL} {
      font-size: 1rem;
    }
    @media ${device.mobileM} {
      font-size: 1rem;
    }
    @media ${device.mobileS} {
      font-size: 1rem;
    }
  }
  .content-info {
    font-size: 1.8rem;
    @media ${device.desktopS} {
      font-size: 1.6rem;
    }
    @media ${device.desktopXM} {
      font-size: 1.4rem;
    }
    @media ${device.desktopM} {
      font-size: 1.3rem;
    }
    @media ${device.laptopL} {
      font-size: 1.2rem;
    }
    @media ${device.laptopS} {
      font-size: 1rem;
    }
    @media ${device.laptopM} {
      font-size: 1rem;
    }
    @media ${device.laptopX} {
      font-size: 1rem;
    }
    @media ${device.laptop} {
      font-size: 1rem;
    }
    @media ${device.tablet} {
      font-size: 1rem;
    }
    @media ${device.mobile} {
      font-size: 1rem;
    }
    @media ${device.mobileL} {
      font-size: 1rem;
    }
    @media ${device.mobileM} {
      font-size: 1rem;
    }
    @media ${device.mobileS} {
      font-size: 1rem;
    }
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
    @media ${device.laptopM} {
      display: flex;
      flex-direction: column;
      & button {
        min-width: 100%;
      }
    }
  }
  .list-btn-bottom button {
    padding: 10px 65px;
    background-color: #0763f9;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .list-btn-bottom button:hover {
    opacity: 0.8;
  }
  .vote-detail-product {
    margin: 50px 100px;
    @media ${device.laptop} {
      margin: 50px 50px;
    }
    @media ${device.tablet} {
      margin: 50px 50px;
    }
    @media ${device.mobile} {
      margin: 40px 30px;
    }
    @media ${device.mobileL} {
      margin: 20px 15px;
    }
    @media ${device.mobileM} {
      margin: 20px 15px;
    }
    @media ${device.mobileS} {
      margin: 20px 15px;
    }
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
