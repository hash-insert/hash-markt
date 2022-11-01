import { useState } from 'react'
import { createContext } from 'react'
const CartContext = createContext()


const CartProvider = (props) => {
    const [items, setItems] = useState([])
    console.log('item is added', items)

    const addTocart = (prod) => {
        setItems((items) => [prod, ...items])
    }

    const removeFromCart = (prod) => {
        // remove from the cart items list
        setItems((items)=> [items.splice(0,prod)])
        
        console.log("remove from cart")
    }

    return (
        <CartContext.Provider value={{ items, setItems, addTocart,removeFromCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;
export { CartProvider }