import React from 'react';
import '../../styles/CartWidget.css';

// import { faBeer } from '@fortawesome/free-solid-svg-icons';

// import './styles/CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <i className="fs-2 bi bi-cart4"></i>
            <span className="bg-danger contador-carrito">15</span>
        </div>
    );
};

export default CartWidget;