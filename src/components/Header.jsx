import "./header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../context/product-context";

export default function Header() {

  const store = useContext(ProductContext);

  console.log("store context ",store)
  return (
    <nav className="header">
      <Link to="/">
        <h1>#markt</h1>
      </Link>

      <Link to="/login"><h3>Login</h3></Link>
      <Link to="/signUp"><h3>Sign Up</h3></Link>
      <Link to="/cart"><h3>Cart</h3></Link>
      <Link to="/fav"><h3>Favrourite</h3></Link>

      <h3>{store.count ? store.count : 0}</h3>

      <a href="/cart">
        <svg

          style={{ width: "50px", height: "50px" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path

            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </a>
    </nav>
  );
}
