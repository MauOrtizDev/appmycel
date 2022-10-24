import { useState, useEffect } from "react"
// import { getProductos } from "../AsyncMock/AsyncMock"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = ({ greetings }) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { marcaId } = useParams();

    useEffect(() => {
        setLoading(true)

        const collectionRef = marcaId
            ? query(collection(db, 'productos'), where('marca', '==', marcaId))
            : collection(db, 'productos')


        getDocs(collectionRef).then(response => {

            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })

            setProductos(productsAdapted)
        })
            .catch(error => {
                alert('No se pueden obtener los productos')
            })
            .finally(() => {
                setLoading(false)
            })

        }, [marcaId])

        if (loading) {
            return <h2 className="mx-auto text-center">Cargando</h2>
        }
        return (
            <div className="container-fluid album py-3 bg-light">
                <h2 className="text-center">{greetings}</h2>
                <ItemList productos={productos} />
            </div>
        )

    }

export default ItemListContainer