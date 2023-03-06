/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import "./cart-product.css";

function CartProduct(props) {
  const { product, index, handleRemove, handleDecrement, handleIncrement } =
    props;

  return (
    <tr>
      <th scope="row">
        <img src={product.image} alt="" />
      </th>
      <td>{product.name}</td>
      <td>{product.size}</td>
      <td>${product.price}</td>
      <td>
        {product.quantity > 1 ? (
          <a onClick={handleDecrement} href="#" data-index={index}>
            {" "}
            -{" "}
          </a>
        ) : (
          <a href="#" disabled data-index={index}>
            {" "}
            -{" "}
          </a>
        )}
        {product.quantity}
        <a onClick={handleIncrement} href="#" data-index={index}>
          {" "}
          +{" "}
        </a>
      </td>
      <td>
        <a
          onClick={handleRemove}
          href="#"
          className="remove-btn secondary"
          data-index={index}>
          Remove
        </a>
      </td>
    </tr>
  );
}

CartProduct.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
};

export default CartProduct;
