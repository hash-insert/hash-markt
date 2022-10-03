import { useState } from 'react'
import{BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import Header from './Header'
import Cart from './components/Cart'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Favourites from './components/Favourites'
import Productdetails from './components/Productdetails'
 function App() {
return(
<div className='App'>
  <BrowserRouter>
  <Header/>
  <Route path="/" exact><Home /></Route>
  <Route path='/login'><Login/></Route>
  <Route path='/signUp'><SignUp /></Route>
  <Route path='/Cart'><Cart/></Route>
  <Route path='/Favourites'><Favourites /></Route>
  <Route path='/Productdetails'><Productdetails /></Route>

  </BrowserRouter>

</div>
)
 }
export default App