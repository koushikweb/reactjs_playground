import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>  {

    return (
        <>
        <nav className="menu-container">
        <ul className="menu-list">
            <li className="menu-item">
                <Link to="/">Home</Link>
            </li>
            <li className="menu-item">
                <Link to="/userlist">User List</Link>
            </li>
            <li className="menu-item">
                <Link to="/savedata">Save</Link>
            </li>
        </ul>
        </nav>
        </>
    );
}

export default Navbar;