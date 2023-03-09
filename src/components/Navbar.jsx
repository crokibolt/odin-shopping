import React from "react";
import PropTypes from "prop-types";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const { numberOfItems } = props;
  return (
    <nav>
      <ul>
        <li>
          <h1>Sneaker Shop</h1>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/odin-shopping/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/odin-shopping/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/odin-shopping/cart">
            Cart
            <span className="cart-number">{numberOfItems}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  numberOfItems: PropTypes.number.isRequired,
};

export default Navbar;
