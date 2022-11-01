import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import "./Card.css";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ProductContext from "../context/product-context";
import FavContext from "../context/favorite-context";
import CartContext from "../context/cart-context";

export default function Card(props) {
  const countCtx = useContext(ProductContext);
  const fav = useContext(FavContext);
  const cartCtx = useContext(CartContext);
  const [toggle, setToggle] = useState(false);

  const handleCart = (e) => {
    {
      countCtx.incrementCount();
      toggle ? cartCtx.addTocart(props.prod)  :cartCtx.removeFromCart(props.prod)
      toggle
        ? (e.target.style.backgroundColor = "yellow")
        : (e.target.style.backgroundColor = "red");
      setToggle((toggle) => !toggle);
    
    }
  };

  return (
    <div className="container">
      <div className="heart">
        <HeartIcon
          className="heartIcon"
          
          onClick={(e) => {
            fav.addToFav(props.prod);
            toggle
              ? (e.target.style.fill = "grey")
              : (e.target.style.fill= "red");
            setToggle((toggle) => !toggle);
            console.log(toggle)
          }}
        
        />
      </div>

      <img className="img-box" src={props.img} />

      <Link to={`/product/${props.id}`}>
        <h4 style={{ color: "white" }}>{props.name}</h4>
      </Link>

      <div className="rating">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />({props.num})
      </div>
      <p>{props.desc}</p>
      <span>{props.cost}$</span>
      <Button
        name="Add To Cart"
        className="btn"
        //  img= <ShoppingCartIcon  style={{width:"10px",height:"10px"}} />

        handleBtn={(e) => handleCart(e)}
      />
    </div>
  );
}
