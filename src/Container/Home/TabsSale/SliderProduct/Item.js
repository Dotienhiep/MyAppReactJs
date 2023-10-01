import styled from "styled-components";

export default styled.div`
  display: flex;
  height: auto;
  margin-top: 20px;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  width: 94%;
  border-radius: 6px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-image: url("/assets/images/boder-product.png");
  background-repeat: no-repeat;
  background-position: center top 15px;
  &:hover {
    border: 1px solid #ccc;
  }
  &:hover .list-btn {
    display: block;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
  }
  img {
    width: 130px;
    height: 130px;
    object-fit: cover;
  }
  .content {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }
  .content .title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
    font-family: "Helvetica Neue", Helvetica;
  }
  .content .title:hover {
    color: #cb1a21;
  }
  .content .title:active {
    color: #8A2BE2;
  }
  a {
    text-decoration: none;
  }
`;
