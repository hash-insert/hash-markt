import { useState, useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/outline";
import Button from "../components/Button";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import FavContext from "../context/favorite-context";

export default function Product(props) {
  const [toggle, setToggle] = useState(false);
  const [singleProd, setSingleProd] = useState([]);
  const fav = useContext(FavContext);


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

  let unique = useParams();

  const handleBtn=(e) => {
    toggle
      ? (e.target.style.backgroundColor = "yellow")
      : (e.target.style.backgroundColor = "red");
    setToggle((toggle) => !toggle);

    console.log(toggle);
  }

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
              name="Add To Cart"
              className="btn"
              onClick={(e) => {
                console.log(e)
                // handleBtn(e);
              }}
            />
            <div className="heart">
              <HeartIcon
                className="heartIcon"
                onClick={(e) => {
                  fav.addToFav(props.prod);
                  e.target.style.fill = "red";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
