import { useState } from "react"
import Header from './Header'
import Sign_In from './Sign In'
import Sign_Up from './Sign Up'
import Cart from './Cart'
import ProductDetails from './ProductDetails'
import Favourites from './Favourites'
import button from './button'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'



export default function App() {
    return (
        <nav>
        <BrowserRouter>
            <Header />
            <Home />
            <Route path="/Cart">
                <Cart />
            </Route>
            <Route path="/Favourites">
                <Favourites />
            </Route>
            <Route path="/ProductDetails">
                <ProductDetails />
            </Route>
            <Route path="/Sign In">
                <Sign_In />
            </Route>
            <Route path="/Sign Up">
                <Sign_Up />
            </Route>
            </BrowserRouter>
        </nav>
    )
}
