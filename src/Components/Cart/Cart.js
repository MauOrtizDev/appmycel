import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'



const Cart = () => {
    const { cart } = useContext(CartContext);
    let total = 0;
    cart.forEach(element => {
        total += element.precio*element.cantidad
        
    });
    return (

        <div className="container text-center">
            <div className="row">
                <div className="col-lg-9 cart my-3 py-3">
                    <h2>Carrito de Compras</h2>
                    {cart.length > 0 ? cart.map(el =>

                        <CartItem cartItem={el} key={el.id} />

                    ) : <>
                            <h4 className="my-3">El Carrito está vacío! :(</h4>
                            <Link to='/'>Volver a productos</Link>
                        </>}
                </div>
                <div className="col-lg-3">
                    <h2>Total a pagar:</h2>
                    <p>${Intl.NumberFormat('es-CO').format(total)}</p>

                </div>
            </div>
        </div>)
}

export default Cart
