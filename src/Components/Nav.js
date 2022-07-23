import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <ul className="list">
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/service">
              Service
            </Link>
          </li>
          <li>
            <Link className="link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
