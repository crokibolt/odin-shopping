import React from "react";
import PropTypes from "prop-types";
import "./navbar.css";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
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
