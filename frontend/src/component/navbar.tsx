import React, { FC } from "react";
import { Link } from "react-router-dom";


const Navbar: FC = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container nav-container">
        <div className='menu-wrapper'>
        <Link to="/" className="menu-item">Home</Link>
        </div>
        <div className="signin-signup">
            <Link to="/signup" className="nav-item">Sign up</Link>
            <Link to="/signin" className="nav-item">Sign in</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
