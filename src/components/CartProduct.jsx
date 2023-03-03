import React from "react";
import PropTypes from "prop-types";
import "./cart-product.css";

function CartProduct(props) {
  const { product, index } = props;

  return (
    <div>
      <article className="product-card">
        <img src={product.image} alt="" />
        <div>
          <h3>{product.name}</h3>
          <br />
          <h5>Size: {product.size}</h5>
          <h5>Quantity: {product.quantity}</h5>
        </div>
      </article>
    </div>
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
};

export default CartProduct;
