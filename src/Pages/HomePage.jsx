import Header from "../components/Header";
import Card from "../components/Card";
import { useContext, useEffect, useState } from "react";
import "../components/Card.css";
import ProductContext from "../context/product-context";
import cartContext from "../context/cart-context";

export default function Home(props) {
  const [products, setProducts] = useState([]);

  const { items, setItems, addTocart } = useContext(cartContext);

  const fetchData = () => {
    // fetching data from url
    let url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        props.handleProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Get Categories
  // useEffect - fetch categories

  // Filtering Data
  // useEffect - depending click event of your handler tabs - fetch filtered products

  return (
    <div>
      <Header />
      <hr />
      <div className="card-container">
        {products.map((prod) => {
          return (
            <Card
              key={prod.id}
              prod={prod}
              img={prod.image}
              num={prod.rating.count}
              name={prod.title}
              desc={prod.descrption}
              cost={prod.price}
              addTocart={addTocart}
            />
          );
        })}
      </div>
    </div>
  );
}
