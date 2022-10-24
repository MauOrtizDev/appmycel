import { useState, useContext, useEffect } from "react"
import { CartContext } from "../../Context/CartContext"
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import FormCheckout from "../FormCheckout/FormCheckout"
import { Link, useNavigate } from "react-router-dom"

const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { cart, total, clear } = useContext(CartContext)

    const [isCartEmpty, setIsCartEmpty] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {

        if (cart.length > 0) {
            setIsCartEmpty(false)
        } else {
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
        , [])

    if (isCartEmpty) {
        return (
        <div className="text-center">
            <h3 className='mx-auto text-danger'>Carrito Vacío :(</h3>
            <Link to ='/'>Volver a Productos</Link>
        </div>
        )
    }
    const createOrder = async (nombre, tel, correo) => {

        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name: nombre,
                    phone: tel,
                    email: correo
                },
                items: cart,
                total
            }


            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'productos')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore

            const batch = writeBatch(db)
            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.cantidad

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                    console.log(outOfStock);
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'ordenes')
                const orderAdded = await addDoc(orderRef, objOrder)

                alert(`Pedido realizado! Su id de orden es: ${orderAdded.id}`)
                clear()

            } else {
                alert('Hay productos fuera de stock. Por favor intenta nuevamente')
            }
            navigate('/');
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1 className="text-center">Su orden se esta generando...</h1>
    }

    return (
        <div className="text-center row">
            <div className="col row-sm">
                <h2 className="mb-3">Resumen de la Compra:</h2>
                <div className="text-end px-3">
                    {
                        cart.map(el => {
                            return (
                                <p key={el.id}>{el.cantidad + " x " + el.nombre + " = " + Intl.NumberFormat('es-CO').format(el.precio * el.cantidad)}</p>)
                        })
                    }
                    <h6>Total:------------------</h6>
                    <p>${Intl.NumberFormat('es-CO').format(total)}</p>
                </div>

            </div>
            <div className="col row-sm">
                <h2>Checkout</h2>
                <div className="p-2">
                    <FormCheckout onCreateOrder={createOrder} cart={cart} />
                </div>
            </div>
        </div>
    )
}

export default Checkout