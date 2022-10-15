import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import "./Card.css";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="container">
      <div className="heart">
        <HeartIcon />
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
       

        handleBtn={() => {
          props.addTocart(props.prod);
        }}
      />
    </div>
  );
}
