import { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Cart from './components/Cart'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Favourites from './components/Favourites'
import Productdetails from './components/Productdetails'
import ProductCount from './context/ProductCount'
function App() {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  }

  return (
    <div className='App'>
       <ProductCount.Provider value={{count,incrementCount}}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact><Home  increment={incrementCount}/></Route>
        <Route path='/login'><Login /></Route>
        <Route path='/signUp'><SignUp /></Route>
        <Route path='/cart'><Cart /></Route>
        <Route path='/favourites'><Favourites /></Route>
        <Route path='/productdetails/:id'><Productdetails /></Route>
      </BrowserRouter>
      </ProductCount.Provider>
    </div>
  )
}
export default App