import { useState } from 'react'
import { createContext } from 'react'
const CartContext = createContext()


const CartProvider = (props) => {
    const [items, setItems] = useState([])
    console.log('item is added', items)

    const addTocart = (prod) => {
        setItems((items) => [prod, ...items])
    }

    const removeFromCart = () => {
        // remove from the cart items list
        console.log("remove from cart")
    }

    return (
        <cartContext.Provider value={{ items, setItems, addTocart }}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartContext;
export { CartProvider }