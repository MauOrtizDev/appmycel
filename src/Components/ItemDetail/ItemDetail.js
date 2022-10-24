import PuntajeBarras from "../PuntajeBarras/PuntajeBarras"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({ product }) => {
    const { id, nombre, img, precio, stock, caracteristicas } = product;

    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        setQuantityToAdd(cantidad)

        const productToAdd = {
            id, nombre, img, precio, cantidad,
        }
        addItem(productToAdd)
    }

    return (
        <>
            <h2>{nombre}</h2>
            <div className="w-100 m-auto d-flex justify-content-around align-items-start">
                <img className="img_detail" src={img} alt={nombre} />

                <div className='w-50 d-flex flex-column'>
                    <PuntajeBarras crts={caracteristicas} />
                    <h5 className='my-3 border'>Precio: ${Intl.NumberFormat('es-CO').format(precio)}</h5>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        {
                            quantityToAdd === 0 ? (
                                <ItemCount initial={0} onAdd={handleOnAdd} stock={stock} />
                            ) : (
                                <Link to='/cart' className="btn btn-success">Finalizar compra</Link>
                            )
                        }
                    </div>
                    <h6 className='my-5'>En Stock: {stock}</h6>
                </div>
            </div>
        </>
    )
}



export default ItemDetail