import React from "react";
import { Link } from "react-router-dom";
import '../src/style/Navbar.css';

function Navvy(){
    return(
        <nav className="navbar">
            <div className="gradient"></div>
            <h className="headernav">Weal</h>
            <ul>
                <li><Link className="start" to="/SignIn" style={{ textDecoration: 'none' }}>Sign In</Link></li>
                <li><Link className="start" to="/Interface" style={{ textDecoration: 'none' }}>Interface</Link></li>
                <li><Link className="start" to="/SignUP" style={{ textDecoration: 'none' }}>SignUP</Link></li>
                <li><Link className="start" to="/Blog" style={{ textDecoration: 'none' }}>Blog</Link></li>
                <li><Link className="start" to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
            </ul>
        </nav>
    );
}

export default Navvy;