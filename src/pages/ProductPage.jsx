import React from "react";
import PropTypes from "prop-types";

function ProductPage({ product }) {
  const array = [];
  for (let i = 5; i <= 15; i++) {
    array.push(i);
  }
  return (
    <div>
      <div className="product-grid">
        <img src={product.image} alt="" />
        <h3>{product.name}</h3>
        <select>
          {array.map((number, i) => (
            <option name={`option#${i}`} value={number}>
              {number}
            </option>
          ))}
        </select>
        <button type="button">Add to cart</button>
      </div>
    </div>
  );
}

ProductPage.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductPage;
