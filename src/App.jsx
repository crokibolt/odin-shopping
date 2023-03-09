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
  const loadedItems = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];

  const [cartItems, setItems] = useState(loadedItems);
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

  const obtainTotal = () => {
    let i = 0;
    let total = 0;

    while (i < cartItems.length) {
      total += cartItems[i].quantity * cartItems[i].price;
      i += 1;
    }

    return total;
  };

  const removeItem = (e) => {
    e.preventDefault();

    setItems((prevItems) => {
      const index = parseInt(e.target.dataset.index, 10);
      const newItems = [...prevItems];

      newItems.splice(index, 1);

      return newItems;
    });
  };

  const incrementQuantity = (e) => {
    e.preventDefault();
    setItems((prevItems) => {
      const index = parseInt(e.target.dataset.index, 10);
      const newItems = [...prevItems];

      newItems[index].quantity += 1;

      return newItems;
    });
  };

  const decrementQuantity = (e) => {
    e.preventDefault();
    setItems((prevItems) => {
      const index = parseInt(e.target.dataset.index, 10);
      const newItems = [...prevItems];

      newItems[index].quantity -= 1;

      return newItems;
    });
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar numberOfItems={quantity} />
        <Routes>
          <Route path="/odin-shopping/" element={<Homepage />} />
          <Route path="/odin-shopping/shop" element={<ShoppingPage />} />
          <Route
            path="/odin-shopping/cart"
            element={
              <CartPage
                cartItems={cartItems}
                obtainTotal={obtainTotal}
                handleIncrement={incrementQuantity}
                handleDecrement={decrementQuantity}
                handleRemove={removeItem}
              />
            }
          />
          <Route
            path="odin-shopping/product/:productIndex"
            element={<ProductPage products={products} handleAdd={addItem} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
