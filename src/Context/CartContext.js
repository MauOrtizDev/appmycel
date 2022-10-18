import { useState, useEffect, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    // const [totalQuantity, setTotalQuantity] = useState(0)
    console.log(cart)

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
            console.log(cart)
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

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            console.log(prod.cantidad)
            totalQuantity += prod.cantidad
        })

        return totalQuantity
    }

    const clear = () => {
        setCart([])
    }


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getTotalQuantity, clear }}>
            {children}
        </CartContext.Provider>
    )
}