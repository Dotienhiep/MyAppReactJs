import styled from "styled-components";

export const SearchWrapper = styled.div`
  .list-search {
    display: flex;
    flex-wrap: wrap;
    margin: 100px 100px 0;
    justify-content: space-between;
  }
  .list-btn {
    margin: 10px 0px;
    width: 100%;
  }
  .list-btn .list-bth-responsive {
    display: flex;
    justify-content: space-between;
  }
  .search-no-product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
  }
  .search-no-product img {
    display: block;
    width: 300px;
  }
  .title-search {
    margin: 20px auto;
    font-size: 20px;
    color: #cd1916;
    font-weight: bold;
  }
`;
