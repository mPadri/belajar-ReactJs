import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Popular</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/daftar-buku">Daftar Buku</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar