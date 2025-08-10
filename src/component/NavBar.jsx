import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";


export const NavBar = () => {
    
    const {cartItems} = useContext(CartContext)
    return (
        <span>Cart ({cartItems.length})</span>
    )
}