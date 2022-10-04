import { useEffect, useState } from "react"
import { getProduct } from "../AsyncMock/AsyncMock"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    useEffect(() => {
        getProduct(2).then(res => {
            console.log(res)
            setProduct(res)
        })
    },[])

console.log(product)

return (
    <div>
        <h1>Detalle de Producto</h1>
    </div>
)
}

export default ItemDetailContainer