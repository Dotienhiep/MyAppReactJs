import "./App.css";
import Home from "./Container/Home";
import Category from "./Container/Category";
// import Category from "./Container/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Cart from "./Container/Cart";
import Detail from "./Container/Detail";
import Search from "./Container/Search";
import Pay from "./Container/Pay";
import Login from "./Container/Login";
import Empty from "./Components/Common/Empty";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems?.find((item) => item._id === product._id);
    if (exist) {
      // alert("Thêm sản phẩm vào giỏ hàng thành công <3");
      setCartItems(
        cartItems.map((x) => {
          return x._id === product._id && product.amount < product.quantity
            ? { ...exist, amount: exist.amount + 1 }
            : x;
        })
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, price: product.price, amount: 1 },
      ]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.amount === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, amount: exist.amount - 1 } : x
        )
      );
    }
  };
  const onRemoveAll = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.amount >= 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) => (x._id === product._id ? { ...exist } : x))
      );
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home onAdd={onAdd} cartItemsCount={cartItems.length} />}
          />
          <Route
            path="/:productType"
            exact
            element={<Category onAdd={onAdd} onRemove={onRemove} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                onRemoveAll={onRemoveAll}
              />
            }
          />
          <Route
            path="/:productType/:productId"
            element={<Detail onAdd={onAdd} />}
          />
          <Route path="/search/:key" element={<Search onAdd={onAdd} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/empty" element={<Empty />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
