import { useState } from 'react'
import { createContext } from 'react'
const CartContext = createContext()


const CartProvider = (props) => {
    const [items, setItems] = useState([])
    console.log('item is added', items)

    const addToCart = (prod) => {
        setItems((items) => [prod, ...items])
    }

    const removeFromCart = (prod) => {
      
        const filteredItems = items.filter((item) => item.id !== prod.id)
        setItems(filteredItems)

        console.log("remove from cart")
    }

    return (
        <CartContext.Provider value={{ items, setItems, addToCart, removeFromCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;
export { CartProvider }