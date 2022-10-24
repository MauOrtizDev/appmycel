import { useEffect, useState } from "react"
// import { getProduct } from "../AsyncMock/AsyncMock"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { productId } = useParams()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const docRef = doc(db, 'productos', productId)

        getDoc(docRef).then(doc => {
            const data = doc.data()

            const productAdapted = { id: doc.id, ...data }

            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
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
