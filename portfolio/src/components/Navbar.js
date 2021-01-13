import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <ul className="navlist">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/Projects">Projects</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About Me</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;