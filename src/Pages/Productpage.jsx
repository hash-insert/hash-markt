import { useState, useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/outline";
import Button from "../components/Button";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Product(props) {
  const [singleProd, setSingleProd] = useState([]);
  const fetchUniqueProd = () => {
    // fetching data from url
    let url = `https://fakestoreapi.com/products/${unique.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingleProd(data);
        // props.handleProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUniqueProd();
  }, []);

  let unique = useParams();

  return (
    <div>
      <Header />
      <hr />
      <h1>Product page</h1>
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
            <StarIcon />({singleProd.num})
          </div>
          <p> {singleProd.description}</p>
          <div className="pbox3">
            <span>${singleProd.price}</span>
            <Button
              name="Add To Cart"
              className="btn"
              //  img= <ShoppingCartIcon  style={{width:"10px",height:"10px"}} />
            />
            <div className="heart">
              <HeartIcon
                className="heartIcon"
                style={{
                  width: "25px",
                  height: "25px",
                  color: "grey",
                  fill: "grey",
                }}
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
