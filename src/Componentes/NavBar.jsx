import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg irvinNav">
            <div className="container-fluid">
                <div className="collapse navbar-collapse " id="navbarTogglerDemo03 ">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link to='/' className="nav-link active">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/reducer'className="nav-link active">Counter Reducer</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/formulario' className="nav-link active">Formulario</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/album' className="nav-link active">Lista de Album</Link>
                        </li>                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar
