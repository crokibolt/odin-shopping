import React from "react";
import "./navbar.css";

function Navbar() {
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
      </ul>
    </nav>
  );
}

export default Navbar;
