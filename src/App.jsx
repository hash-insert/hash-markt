import { useState } from 'react'

 import './App.css'
import Header from './Header.jsx'
import Card from './Card.jsx'
import Home from '../Page-component/HomePage'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from "../Page-component/Login"
import SignUp from "../Page-component/SignUp"
import Cart from "../Page-component/Cart"
import Fav from "../Page-component/Fav"
import Product from '../Page-component/Productpage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  <BrowserRouter> 
 <Route path="/" exact><Home /></Route> 
  <Route path='/login'><Login /></Route>
        <Route path='/signUp'><SignUp /></Route>
        <Route path='/cart'><Cart /></Route>
        <Route path='/fav'><Fav /></Route>
        <Route path='/product/:prod'><Product /></Route>
  </BrowserRouter> 
 
   
    </div>
  )
}

export default App
