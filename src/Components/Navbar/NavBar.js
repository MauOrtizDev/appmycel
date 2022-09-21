import React from "react";
import CartWidget from './CartWidget';
import logoMyCel from '../../Assets/logoMyCel.svg';
import '../../styles/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid fs-4">
                <a className="navbar-brand" href="#"><img className='logo  nav-link'  src={logoMyCel}/></a>

                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex align-items-center justify-content-around w-100">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <svg stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 512 512"
                                    height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z">
                                    </path>
                                </svg>
                                 Categorías
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Android</a></li>
                                <li><a className="dropdown-item" href="#">Windows Phone</a></li>
                                <li><a className="dropdown-item" href="#">Iphone</a></li>
                                <li><a className="dropdown-item" href="#">Otros</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Sección en Construcción</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <form role="search">
                                <input className="form-control me-2"
                                    type="search"
                                    placeholder="Buscar"
                                    aria-label="Search"/>
                            </form>
                            <ul className="bg-light fs-6">
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre Nosotros</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link disabled">Iniciar Sesión</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><CartWidget/></a>
                        </li>
                    </ul>

                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;