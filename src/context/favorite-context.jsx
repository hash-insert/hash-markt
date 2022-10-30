import { useState } from 'react'
import {createContext} from 'react'
const FavContext = createContext()


const FavProvider=(props)=>{
    const [items,setItems]=useState([])
    console.log('item is added',items)

    const addToFav=(prod)=>{
setItems((items)=>[prod,...items] )
    }
    return (
        <FavContext.Provider value ={{items,setItems,addToFav}}>
            {props.children}
        </FavContext.Provider>
    )
}

export default FavContext;
export {FavProvider}