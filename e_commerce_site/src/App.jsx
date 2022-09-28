import { useState } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Header  from './Components/Header/Header'
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'
import Cart from './Components/Cart/Cart'
import Favourites from './Components/Favourites/Favourites'
import Productdetails from './Components/Product Details/ProductDetails'
import Home from './Components/Home/Home'
function App(){
  return(
    <>
    <Header />
    <Home />
    <Route path='/Signin'>
    <Signin />
    </Route>
    <Route path='/Signup'>
    <Signup />
    </Route>
    <Route path='/Cart'>
    <Cart />
    </Route>
    <Route path='/Favourites'>
    <Favourites />
    </Route>
    <Route path='/Productdetails'>
    <Productdetails />
    </Route>
    </>
  )
}
export default App
