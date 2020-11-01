import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Link className="navbar-brand mb-0 h1" to="/"><i className="fas fa-pen"></i> WRITE RIGHT</Link>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link btn btn-outline-success" to="/register">Signup<span class="sr-only">(current)</span></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
