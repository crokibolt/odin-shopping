import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import CartProduct from "../components/CartProduct";

function CartPage(props) {
  const {
    cartItems,
    obtainTotal,
    handleIncrement,
    handleDecrement,
    handleRemove,
  } = props;

  return (
    <div>
      <table role="grid">
        <thead>
          <tr>
            <th scope="col"> </th>
            <th scope="col">Product</th>
            <th scope="col">Size</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, i) => (
            <CartProduct
              product={item}
              index={i}
              key={v4()}
              handleRemove={handleRemove}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="col"> </th>
            <th scope="col"> </th>
            <th scope="col"> </th>
            <th scope="col"> Total: </th>
            <th scope="col"> $ {obtainTotal()}</th>
          </tr>
        </tfoot>
      </table>
      <button type="button">Checkout</button>
    </div>
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
  obtainTotal: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
};

export default CartPage;
