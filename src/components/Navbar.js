import { Link } from "gatsby";
import React from "react";
import "../styles/navbarStyles.css";
import FontStyles from "../styles/globalStyles";

const Navbar = () => {
  return (
    <div>
      <FontStyles />
      <nav className="navbar">
        <div className="headerTitle">
          <Link className="link" to="/cinema-archive">
            <div id="mainTitle">CINEMAP</div>{" "}
          </Link>
          <div id="subTitle">
            A Collaborative Archive of London's 25 Independent Cinemas
          </div>
        </div>
        <div className="item">MAP</div>
        <div className="item">INDEX</div>
        <div className="item">ARCHIVE</div>
      </nav>
    </div>
  );
};

export default Navbar;
