import React from "react";
import PropTypes from "prop-types";
import "./navbar.css";

function Navbar(props) {
  const { numberOfItems } = props;
  return (
    <nav>
      <ul>
        <li>
          <h1>Shop</h1>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">Homepage</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/cart">
            Cart
            <span className="cart-number">{numberOfItems}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  numberOfItems: PropTypes.number.isRequired,
};

export default Navbar;
