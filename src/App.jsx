import { useEffect, useState } from 'react'

import './App.css'
import Home from './Pages/HomePage'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Cart from "./Pages/Cart"
import Fav from "./Pages/Fav"
import Product from './Pages/Productpage'

import ProductContext from './context/product-context'

const App = () => {
  const [count, setCount] = useState(0);
  const [productsApp, setProductsApp] = useState([]);

  console.log("App products", productsApp);

  // useEffect(() => {
  //   setCount(productsApp.length)
  // }, [productsApp])

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  }

  return (
    <div className="App">
      <ProductContext.Provider value={{count,productsApp}}>
        <BrowserRouter>
          <Route path="/" exact><Home increment={incrementCount} handleProducts={setProductsApp} /></Route>
          <Route path='/login'><Login /></Route>
          <Route path='/signUp'><SignUp /></Route>
          <Route path='/cart'><Cart /></Route>
          <Route path='/fav'><Fav /></Route>
          <Route path='/product/:prod'><Product /></Route>
        </BrowserRouter>
      </ProductContext.Provider>
    </div>
  )
}

export default App
