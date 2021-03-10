import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <ul className="navlist">
                        <li><Link to="/">Quotes Generator</Link></li>
                        <li><Link to="/home">Home</Link></li>
                        {/* <FontAwesomeIcon icon={faHome} size="2x" /> */}
                        <i className="fas fa-home"></i>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;