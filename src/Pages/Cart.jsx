import Header from "../components/Header";
import Button from "../components/Button";
import cartContext from "../context/cart-context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";




export default function Cart(props) {




  const cartstyle = {
    display: "flex",
    flexdirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div>
      <Header />
      <div style={{ cartstyle }}>
        <h1>CART</h1>
     <ShoppingCartIcon />
        <p>There are no products in your cart.</p>
        <p>Add the products you like to the cart and buy.</p>
        <Button name="Continue Shopping" />
      </div>
    </div>
  );
}
