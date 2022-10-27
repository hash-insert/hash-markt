import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import "./Card.css";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="container">
      <div className="heart">
        <HeartIcon  className="heartIcon" style={{width:"25px",height:"25px"}} />
      </div>

      <img className="img-box" src={props.img} />

      <Link to={`/product/${props.id}`}>
        <h4>{props.name}</h4>
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

        handleBtn={() => {
          props.addTocart(props.prod);
        }}
      />
    </div>
  );
}
