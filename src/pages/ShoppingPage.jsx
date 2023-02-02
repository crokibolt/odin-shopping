import React from "react";
import Product from "../components/Product";
import products from "../components/products";

function ShoppingPage() {
  return (
    <div>
      <h2>Sneakers</h2>
      <div className="products-container">
        {products.map((element, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Product product={element} key={i} />
        ))}
      </div>
    </div>
  );
}

export default ShoppingPage;
