import { useEffect, useState } from "react"
import { getProduct } from "../AsyncMock/AsyncMock"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { productId } = useParams()
    const [loading, setLoading] = useState(true);
    const [stockLeft, setStockLeft] = useState(0)
    // console.log("Id: "+productId)
    // console.log("tipo: "+ typeof(productId))

    useEffect(() => {
        getProduct(productId).then(res => {
            console.log(res)
            setProduct(res)
            setLoading(false)
            setStockLeft(res.stock)
        })
    }, [productId])

    if (loading) {
        return <h2>Cargando</h2>
    }


    return (
        <div className="detail mx-auto text-center">
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer

{/* <div className="card p-1 text-center">
            <h5>{product.nombre}</h5>
            <div className="w-100 text-center m-auto d-flex justify-content-around align-items-start">
                {/* <div className="puntaje__fondo d-flex justify-content-center align-items-center text-center">
        <div className="puntuacion d-flex justify-content-center">
            <div>
                <div className="puntaje_num">48</div>
                <div className="palabra__puntos">PUNTOS</div>
            </div>
        </div>
    </div> 
                <img src={"/celulares/" + product.nombre.toLowerCase() + ".webp"} alt={product.nombre} />

                <div className='d-flex flex-column'>
                    <button className="btn-comparacion py-2">
                        Ver Detalle
                    </button>
                    <h6 className='my-3'>Precio </h6>
                    <h5>{product.precio}</h5>
                    <button className="btn-comparacion py-2 my-2" disabled>
                        Comprar
                    </button>
                    <h6 className='my-5'>En Stock: {product.stock}</h6>
                </div>
            </div>
            <ul>
    <li>Diseño: 45
        <div className="barra">
        </div>
    </li>
    <li>Pantalla: 33
        <div className="barra">
        </div>
    </li>
</ul>
        </div> */}