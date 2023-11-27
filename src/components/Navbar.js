import { Link } from 'gatsby';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/cinema-index">Cinemas</Link>
                <Link to="/cinema">Cinema</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;