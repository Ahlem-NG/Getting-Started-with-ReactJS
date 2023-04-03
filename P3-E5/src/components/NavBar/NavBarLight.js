import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from 'react-router-dom';

const NavBarLight = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to='/'>Navbar</NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/pays'>Pays</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/admin'>Admin</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBarLight;