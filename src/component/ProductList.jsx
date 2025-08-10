import { use, useEffect, useState } from "react"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const ProductList = () => {

    const { addToCart } = useContext(CartContext) 

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    throw new Error(`HTTP error, ${response.status}`)
                }
                const jsonData = await response.json()
                setData(jsonData);
            }
            catch (e) {
                setError(e.message)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    },[])

    if(loading){
        return <div>Loading...</div>
    }
    
    if(error){
        return <div>Error: {error}</div>
    }

    return (
        <>
            <ul>
                {data.map((product) => (
                    <li key={product.id}>
                        {product.title}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </>
    )
}