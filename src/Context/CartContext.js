import { useState,useEffect, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])

        } else {
            console.log('ya esta agregado')
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
    }

    //   useEffect(() => {
    //     const totalQuantity = getTotalQuantity()
    //     setTotalQuantity(totalQuantity)
    //   }, [cart])

    useEffect(() => {
        const total = getTotal()
        setTotal(total)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.cantidad
        })

        return totalQuantity
    }

    const clear = () => {
        setCart([])
    }

    const getTotal = () => {
        let accu = 0;
        cart.forEach(element => {
            accu += element.precio * element.cantidad

        })
        return accu
    }
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getTotalQuantity, clear, total }}>
            {children}
        </CartContext.Provider>
    )
}