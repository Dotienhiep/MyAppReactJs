import React from "react";
import { PriceWrapper } from "./style";

const Price = ({ data }) => {
  const dataMemory = parseInt(data?.price);
  function format(n, currency) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") + currency;
  }
  const price = format(dataMemory, " VND");
  return (
    <PriceWrapper>
      <span className="price-storage">{price}</span>
    </PriceWrapper>
  );
};

export default Price;
