import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => [...prevItems, product]);
    }

    const value = {cartItems, addToCart}

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
