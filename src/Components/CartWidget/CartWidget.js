import React from 'react';
import '../../styles/CartWidget.css';
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'


const CartWidget = () => {

    const { getTotalQuantity } = useContext(CartContext)

    const totalQuantity = getTotalQuantity()

    return (
        <div className={`cart-widget ${totalQuantity ===0? 'text-muted':''}`}>
            <i className="fs-2 bi bi-cart4"></i>
            <span className={`bg-danger contador-carrito ${totalQuantity ===0? 'd-none':'d-inline-block'}`}>{totalQuantity}</span>
        </div>
    );
};

export default CartWidget;