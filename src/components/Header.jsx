import "./header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../context/product-context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Header() {

  const store = useContext(ProductContext);

  
  return (
    <nav className="header">
      <Link to="/">
        <h1 className="head">#markt</h1>
      </Link>

      <Link to="/login"><h3>Login</h3></Link>
      <Link to="/signUp"><h3>Sign Up</h3></Link>
      <Link to="/cart"><h3>Cart</h3></Link>
      <Link to="/fav"><h3>Favrourite</h3></Link>

      

      <Link to="/cart">
      <h3>{store.count ? store.count : 0}</h3>
      <ShoppingCartIcon style={{width:"50px",height:"50px",color:"gold"}}/>
      </Link>
       
      
    </nav>
  
  );
}
