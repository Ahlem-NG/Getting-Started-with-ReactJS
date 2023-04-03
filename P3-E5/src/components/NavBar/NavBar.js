import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from 'react-router-dom';

const navBar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div><h3 style={{color: 'white'}}>Navbar</h3></div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to='/'
                            activeClassName='active activeHome'
                            activeStyle={{
                                textTransform: 'uppercase'
                            }}
                            >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/pays'
                            activeClassName='active activePays'
                            activeStyle={{
                                textTransform: 'uppercase'
                            }}
                            >Pays</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to='/admin'>Admin</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default navBar;