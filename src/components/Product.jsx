/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/product.css";

function Product(props) {
  const { product, index } = props;
  return (
    <article>
      <header>{product.name}</header>
      <img src={product.image} alt="" />
      <footer>
        <Link to={`/odin-shopping/product/${index}`} role="button">
          View Product
        </Link>
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
  index: PropTypes.number.isRequired,
};

export default Product;
