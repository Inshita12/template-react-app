import React from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <div>
      <nav className="nav">
        <div className="left-div">
          <Link to="/">
          <img
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            alt="logo"
          ></img>
          </Link>
        </div>
        <div className="search-container">
          <img
            className="search-icon"
            src="https://image.flaticon.com/icons/svg/483/483356.svg"
            alt="search"
          />
          <input placeholder="Search" />
          <div className="search-results">
            <ul>
              <li className="serach-results-row">
                <img src="" alt="user-dp" />
                <span>Inshita</span>
              </li>
              <li className="serach-results-row">
                <img src="" alt="user-dp" />
                <span>Inshita</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          <div className="user">
            <img
              src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
              alt="user-dp"
              id="user-dp"
            />
            <span>Inshita</span>
          </div>
          <nav className="nav-links">
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
