import { useState } from 'react'
import { createContext } from 'react'
const CartContext = createContext()


const CartProvider = (props) => {
    const [items, setItems] = useState([])
    console.log('item is added', items)

    const addToCart = (prod) => {

       const checkitem= items.find((item)=>item.id !== prod.id)
        setItems((checkitem) => [prod, ...checkitem])
    }

    const removeFromCart = (prod) => {
      
        const filteredItems = items.filter((items) => items.id !== prod.id)
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