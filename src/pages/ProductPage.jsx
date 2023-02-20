import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { generateItem } from "../components/products";
import "./productPage.css";

function ProductPage({ products, handleAdd }) {
  const params = useParams();
  const product = products[params.productIndex];
  const array = [];
  for (let i = 5; i <= 15; i++) {
    array.push(i);
  }
  const sizeSelect = document.getElementById("size");
  return (
    <div>
      <div className="product-grid">
        <h3 className="name">{product.name}</h3>
        <img src={product.image} alt="" />
        <h3 className="price">Price: ${product.price}</h3>
        <h5 className="size">Size</h5>
        <select id="size">
          {array.map((number, i) => (
            <option name={`option#${i}`} value={number}>
              {number}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => handleAdd(generateItem(sizeSelect.value, 1))}>
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
