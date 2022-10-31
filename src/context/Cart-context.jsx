import { useState } from 'react'
import {createContext} from 'react'
const cartContext = createContext()


const CartProvider=(props)=>{
    const [items,setItems]=useState([])
    console.log('item is added',items)

    const addTocart=(prod)=>{
setItems((items)=>[prod,...items] )
    }
    return (
        <cartContext.Provider value ={{items,setItems,addTocart}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext;
export {CartProvider}