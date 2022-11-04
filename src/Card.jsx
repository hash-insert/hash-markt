import './Card.css'
import { Link } from 'react-router-dom'
import './components/Button.jsx';
import { useContext, useState } from "react";
import { HeartIcon,StarIcon } from "@heroicons/react/24/outline";
import CartContext from './context/Cart-context';
import ProductCount from './context/ProductCount';
import FavContext from './context/Favourite-context';
import Button from './components/Button.jsx';

export default function Card(props) {
  const countCtx = useContext(ProductCount);
  const fav = useContext(FavContext);
  const cartCtx = useContext(CartContext);
  const [toggle, setToggle] = useState(false);

  const handleCart = (e) => {
    {
      toggle
      ? countCtx.decrementCount()
      : countCtx.incrementCount();
      toggle
        ? cartCtx.removeFromCart(props.prod)
        : cartCtx.addToCart(props.prod);
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
              : (e.target.style.fill = "red");
            setToggle((toggle) => !toggle);
            
          }}
        />
      </div>
      <Link to={`/productdetails/${props.id}`}>
      {/* <Link to={`/Productdetails/${props.id}`}><img src={props.image} /></Link> */}
      <img className="img-box" src={props.image} />  </Link>

        <h4 style={{ color: "white" }}>{props.name}</h4>
  

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
        handleBtn={(e) => { handleCart(e)}}
      />
    </div>
  );
}
