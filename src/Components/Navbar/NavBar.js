import React from "react";
import CartWidget from '../CartWidget/CartWidget';
import logoMyCel from '../../Assets/logoMyCel.svg';
import '../../styles/Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-md bg-dark">
            <div className="container-fluid fs-4">
                <Link to="/">
                    <img className='logo  nav-link' src={logoMyCel} />
                </Link>
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
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z">
                                    </path>
                                </svg>
                                Marcas
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to='/marca/samsung' className="dropdown-item" href="#">Samsung</Link></li>
                                <li><Link to='/marca/huawei-xiaomi' className="dropdown-item" href="#">Huawei/Xiaomi</Link></li>
                                <li><Link to='/marca/vivo' className="dropdown-item" href="#">Vivo</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link to='/marca/otros' className="dropdown-item" href="#">Otros</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <form role="search">
                                <input className="form-control me-2"
                                    type="search"
                                    placeholder="Buscar"
                                    aria-label="Search" disabled/>
                            </form>
                            <ul className="bg-light fs-6">
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Iniciar Sesión</a>
                        </li>
                        <li className="nav-item">
                            <Link to='/cart' className="nav-link"><CartWidget />
                            </Link>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;