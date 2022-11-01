import { useState } from 'react'
import {createContext} from 'react'
const cartContext = createContext()


const CartProvider=(props)=>{
    const [items,setItems]=useState([])
    console.log('item is added',items)

    const addTocart=(prod)=>{
setItems((items)=>[prod,...items] )
    }
    const removeFromCart = (prod) => {

        setItems((items)=> [items.splice(0,prod)])
        
        console.log("remove from cart")
    }
    return (
        <cartContext.Provider value ={{items,setItems,addTocart,removeFromCart}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext;
export {CartProvider}