import React from "react";
import FilterItem from "./../FilterItem";
import { ListFilterWrapper } from "./../style";

const ListFilter = ({ listFilter }) => {
  return (
    <ListFilterWrapper className="filters">
      <div className="list-filter">
        {listFilter.map((item) => {
          return <FilterItem key={item.id} filter={item} />;
        })}
      </div>
    </ListFilterWrapper>
  );
};

export default ListFilter;
