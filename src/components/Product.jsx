/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import "./product.css";

function Product(props) {
  const { product, handleAdd } = props;
  return (
    <article>
      <header>{product.name}</header>
      <img src={product.image} alt="" />
      <footer>
        <h4>${product.price}</h4>
        <button type="button" onClick={handleAdd}>
          Add to cart
        </button>
      </footer>
    </article>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default Product;
