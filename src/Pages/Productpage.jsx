import { useState, useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/outline";
import Button from "../components/Button";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import FavContext from "../context/favorite-context";
import CartContext from "../context/cart-context";

export default function Product(props) {
  const [toggle, setToggle] = useState(false);
  const [singleProd, setSingleProd] = useState([]);
  const fav = useContext(FavContext);
  const cartCtx = useContext(CartContext);

  // Getting the product parameters like id from the url/link
  let unique = useParams();

  const fetchUniqueProd = () => {
    // fetching data from url
    let url = `https://fakestoreapi.com/products/${unique.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSingleProd(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUniqueProd();
  }, []);

  const handleCartBtn = (e) => {
    {
      // countCtx.incrementCount();
      toggle
        ? cartCtx.removeFromCart(singleProd)
        : cartCtx.addToCart(singleProd);
      toggle
        ? (e.target.style.backgroundColor = "yellow")
        : (e.target.style.backgroundColor = "red");
      setToggle((toggle) => !toggle);
    }
  };

  return (
    <div>
      <Header />
      <hr />

      <div className="pbox">
        <img src={singleProd.image} style={{ width: "300px" }} alt="" />
        <div className="pbox2">
          <h3>Brand</h3>
          <h1>{singleProd.title}</h1>
          <div className="rating">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p> {singleProd.description}</p>
          <div className="pbox3">
            <span>${singleProd.price}</span>
            <Button
              name={props.checkItem ? "Remove from Cart" : "Add To Cart"}
              className={`btn ${props.checkItem ? "btn-remove" : ""} `}
              handleBtn={(e) => {
                handleCartBtn(e);
              }}
            />
            <div className="heart">
              <HeartIcon
                className="heartIcon"
                onClick={(e) => {
                  fav.addToFav(singleProd);
                  toggle
                    ? (e.target.style.fill = "grey")
                    : (e.target.style.fill = "red");
                  setToggle((toggle) => !toggle);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
