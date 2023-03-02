import React, { useState, useEffect } from "react";
import "@picocss/pico/css/pico.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import ShoppingPage from "./pages/ShoppingPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import products from "./components/products";

function App() {
  const [cartItems, setItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const obtainQuantity = () => {
    let i = 0;
    let newQuantity = 0;

    while (i < cartItems.length) {
      newQuantity += cartItems[i].quantity;
      i += 1;
    }

    return newQuantity;
  };

  const addItem = (size, index) => {
    setItems((prevItems) => {
      let found = false;
      let i = 0;
      let newItems = [];
      const newItem = { ...products[index], size };

      while (!found && i < prevItems.length) {
        if (
          prevItems[i].name === newItem.name &&
          prevItems[i].size === newItem.size
        ) {
          newItems = [...prevItems];
          newItems[i].quantity += 1;
          found = true;
        }
        i += 1;
      }
      if (!found && i === prevItems.length) {
        newItems = [...prevItems, newItem];
      }
      return newItems;
    });
  };

  useEffect(() => {
    setQuantity(obtainQuantity());
  });

  // const obtainTotal = () => {
  //   let i = 0;
  //   let total = 0;

  //   while (i < cartItems.length) {
  //     total += cartItems[i].quantity * cartItems[i].price;
  //     i += 1;
  //   }

  //   return total;
  // };

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar numberOfItems={quantity} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShoppingPage />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
          <Route
            path="/product/:productIndex"
            element={<ProductPage products={products} handleAdd={addItem} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
