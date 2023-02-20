import React, { useState } from "react";
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

  const addItem = (newItem) => {
    setItems((prevItems) => {
      let found = false;
      let i = 0;
      let newItems = [];

      while (!found && i < prevItems.length) {
        if (
          prevItems[i].name === newItem.name &&
          prevItems[i].size === newItem.size
        ) {
          newItems = prevItems;
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

  const obtainTotal = () => {
    let i = 0;
    let total = 0;

    while (i < cartItems.length) {
      total += cartItems[i].quantity * cartItems[i].price;
      i += 1;
    }

    return total;
  };

  const obtainQuantity = () => {
    const i = 0;
    let quantity = 0;

    while (i < cartItems.length) {
      quantity += cartItems[i].quantity;
    }

    return quantity;
  };

  return (
    <div className="container">
      <Navbar numberOfItems={obtainQuantity()} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShoppingPage />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
          <Route
            path="/product/:productIndex"
            element={<ProductPage products={products} handleAdd={addItem} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
