import React from "react";
import { FilterItemWrapper } from "./../style";
import { Link } from "react-router-dom";

const FilterItem = ({ filter }) => {
  //Nhận dữ liệu từ cha là Filter
  return (
    <FilterItemWrapper>
      {filter.nameAscii ? (
        <Link className="category-filter" to={`/${filter.nameAscii}`}>
          <div className="content-filter">
            <div className="content-image">
              <img src={filter.image} alt="" />
            </div>
            <p>{filter.title}</p>
          </div>
        </Link>
      ) : (
        <Link className="category-filter" to={`/`}>
          <div className="content-filter">
            <div className="content-image">
              <img src={filter.image} alt="" />
            </div>
            <p>{filter.title}</p>
          </div>
        </Link>
      )}
    </FilterItemWrapper>
  );
};

export default FilterItem;
