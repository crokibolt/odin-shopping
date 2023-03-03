import React from "react";
import { v4 } from "uuid";
import Product from "../components/Product";
import products from "../components/products";

function ShoppingPage() {
  return (
    <div>
      <h2>Sneakers</h2>
      <div className="products-container">
        {products.map((element, i) => (
          <Product product={element} index={i} key={v4()} />
        ))}
      </div>
    </div>
  );
}

export default ShoppingPage;
