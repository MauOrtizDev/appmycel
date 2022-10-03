import { useState, useEffect } from "react"
import { getProductos } from "../AsyncMock/AsyncMock"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greetings }) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductos().then(res => {
            setProductos(res);
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setLoading(false);
            console.log("Llego")

        })
    }, [])

    if (loading) {
        return <h2>Cargando</h2>
    }

    return (
        <div className="container-fluid album py-3 bg-light">
            <h2 className="text-center">{greetings}</h2>
            <ItemList productos={productos} />
        </div>
    )

}

export default ItemListContainer