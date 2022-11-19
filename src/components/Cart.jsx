import './Cart.css';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom'
import CartContext from '../context/Cart-context';
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"
import Button from './Button';
export default function Cart(props) 
{
    const cartCtx = useContext(CartContext);
    console.log(cartCtx);
  
    const cartstyle = {
      display: "flex",
      flexdirection: "column",
      justifyContent: "center",
      alignitems: "center",
    };
  
    return (
      <div>
        <hr />
        {cartCtx.items.length > 0 ? (
          cartCtx.items.map((item) => {
            console.log(item);
            return (
              <div className="cart-boxstyle">
                <img
                  src={item.image}
                  style={{ width: "150px", height: "150px", padding: "10px" }}
                ></img>
                <div className="cart-style">
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="cartbox" style={{ cartstyle }}>
            <h1>CART</h1>
            <ShoppingCartIcon
              style={{ width: "250px", height: "250px", color: "black" }}
            />
            <p>There are no products in your cart.</p>
            <p>Add the products you like to the cart and buy.</p>
            <Link to="/">
              <Button name="Continue Shopping" />
            </Link>
          </div>
        )}
      </div>
    );
  }