import React from "react";
import { Link } from "react-router-dom";
import '../src/style/Navbar.css';

function Navvy(){
    return(
        <nav className="navbar">
            <div className="gradient"></div>
            <h className="headernav">Weal</h>
            <ul>
                <li><Link className="start" to="/Contact" style={{ textDecoration: 'none' }}>Contact</Link></li>
                <li><Link className="start" to="/Interface" style={{ textDecoration: 'none' }}>Interface</Link></li>
                <li><Link className="start" to="/Tech" style={{ textDecoration: 'none' }}>Tech</Link></li>
                <li><Link className="start" to="/About" style={{ textDecoration: 'none' }}>About</Link></li>
                <li><Link className="start" to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
            </ul>
        </nav>
    );
}

export default Navvy;