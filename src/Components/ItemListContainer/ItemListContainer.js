import { useState, useEffect } from "react"
import { getProductos } from "../AsyncMock/AsyncMock"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greetings }) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {marcaId} = useParams();

    console.log(marcaId);

    useEffect(() => {
        getProductos().then(res => {
            if(marcaId){
                setProductos(res.filter(prod => prod.marca.toLowerCase() === marcaId))
            } else setProductos(res);
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setLoading(false);
        })
    }, [marcaId])

    if (loading) {
        return <h2 className="mx-auto">Cargando</h2>
    }
    console.log(productos);
    console.log(productos.filter(prod => prod.marca === marcaId));
    return (
        <div className="container-fluid album py-3 bg-light">
            <h2 className="text-center">{greetings}</h2>
            <ItemList productos={productos} />
        </div>
    )

}

export default ItemListContainer