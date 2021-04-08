import React from 'react'

const Navbar = () => {
    return (
        <nav className="indigo accent-3">
            <div className="nav-wrapper">
                <a href="/#!" className="brand-logo center">MY NAME</a>
                <ul className="left hide-on-med-and-down">
                    <li><a href="/#">Salir</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
