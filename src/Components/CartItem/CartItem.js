import './CartItem.css'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const CartItem = ({cartItem}) => {

    const {removeItem} = useContext(CartContext)


    const {id, nombre, precio, cantidad} = cartItem;
    return (<div className="cartItem border d-flex justify-content-around align-items-center">
                <img src={"/celulares/" + nombre.toLowerCase() + ".webp"} alt={nombre} />
            <h5>{nombre}</h5>
            <h6>{cantidad}</h6>
            <h6>${Intl.NumberFormat('es-CO').format(precio)}</h6>
            <h5>Total: ${Intl.NumberFormat('es-CO').format(precio*cantidad)}</h5>
            <button className='btn' onClick={()=>removeItem(id)}><i className="bi bi-trash"></i></button>


    </div>)
}

export default CartItem
