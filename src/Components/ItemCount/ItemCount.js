import { useState } from "react";


const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(0)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const restar = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <div className="btn-group border w-75" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={restar}>-</button>
                <h4 className="px-4 w-50">{count}</h4>
                <button type="button" className="btn btn-primary" onClick={sumar}>+</button>
            </div>
            <button className="btn-comparacion py-2 my-2 w-50" onClick={()=>onAdd(count)} disabled={count == 0 ? true : false}>
                Agregar al Carrito
            </button>
        </>
    )

}

export default ItemCount