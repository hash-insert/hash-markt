import { Link } from 'react-router-dom'
import './Header.css'
import { useContext } from "react"
import ProductCount from './context/ProductCount'
import { ShoppingCartIcon } from "@heroicons/react/24/outline"




export default function Header() {
  const store = useContext(ProductCount);
  return (
    <nav className="header">
      <div>
        <Link to="/"><h1>#markt</h1></Link>
      </div>


      <Link to="/login"><h3>Login</h3></Link>
      <Link to="/signUp"><h3>Sign Up</h3></Link>
      <Link to="/Cart"><h3>Cart</h3></Link>
      <Link to="/Favourites"><h3>Favrourite</h3></Link>

      

      <Link to="/cart">
      <h3>{store.count ? store.count : 0}</h3>
      <ShoppingCartIcon style={{width:"50px",height:"50px",color:"gold"}}/>
      </Link>
       
      

    </nav>
  )
}