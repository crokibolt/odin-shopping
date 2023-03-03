import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import CartProduct from "../components/CartProduct";

function CartPage(props) {
  const { cartItems } = props;

  return (
    <>
      {cartItems.map((item, i) => (
        <CartProduct product={item} index={i} key={v4()} />
      ))}
    </>
  );
}

CartPage.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      size: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CartPage;
