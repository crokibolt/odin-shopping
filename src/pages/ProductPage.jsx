import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
// import { generateItem } from "../components/products";
import "../styles/productPage.css";

function ProductPage({ products, handleAdd }) {
  const params = useParams();
  const product = products[params.productIndex];
  const array = [];

  const [size, setSize] = useState(5);

  for (let i = 5; i <= 15; i++) {
    array.push(i);
  }

  const handleChange = (e) => {
    setSize(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <div className="product-grid">
        <h3 className="name">{product.name}</h3>
        <img className="productImageL" src={product.image} alt="" />
        <h3 className="price">Price: ${product.price}</h3>
        <h5 className="size">Size</h5>
        <select value={size} onChange={handleChange} id="sizeSelect">
          {array.map((number, i) => (
            <option name={`option#${i}`} value={number}>
              {number}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => handleAdd(size, params.productIndex)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

ProductPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default ProductPage;
