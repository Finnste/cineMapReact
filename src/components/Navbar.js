import { Link } from "gatsby";
import React from "react";
import "../styles/navbarStyles.css";
import FontStyles from "../styles/globalStyles";

const Navbar = () => {
  return (
    <div>
      <FontStyles />
      <nav className="navbar">
        <div className="item headerTitle">
          <p id="mainTitle">CINEMAP</p>
          <p id="subTitle">
            A Collaborative Archive of London's 25 Independent Cinemas
          </p>
        </div>
        <div className="item item2">HELLO</div>
        <div className="item item3">MAP</div>
        <div className="item index">INDEX</div>
      </nav>{" "}
    </div>
  );
};

export default Navbar;
