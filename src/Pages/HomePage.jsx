import Header from "../components/Header";
import Card from "../components/Card";
import { useContext, useEffect, useState } from "react";
import "../components/Card.css";
import ProductContext from "../context/product-context";
import CartContext from "../context/cart-context";
import Button from "../components/Button";
import { Link } from "react-router-dom";


export default function Home(props) {
  const [products, setProducts] = useState([]);

  const [category, setCategory] = useState("")

  const { items, setItems, addTocart } = useContext(CartContext);

  const fetchData = () => {
    // fetching data from url
    let url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
        // props.handleProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
    filterProducts();
  }, []);

  // Get Categories
  // useEffect - fetch categories
  const fetchCategories = () => {

    let url = 'https://fakestoreapi.com/products/categories';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const filterprod = (categories) => {
    console.log("categories ", categories)
    setCategory(categories);
  }

  let filterCard = [];
  const filterProducts = () => {
    if (products.length != 0) {
      if (category != "") {
        filterCard = products.filter((items) => items.category === category);
      }
      else {
        filterCard = products;
      }
    }
  }


  return (
    <div>
      <Header />
      <hr />
      <div className="tabs">
        <Button className="all" name="All" handleBtn={() => filterprod("")} />
        <Button className="all" name="Electronics" handleBtn={() => filterprod("electronics")} />
        <Button className="all" name="Jewellary" handleBtn={() => filterprod("jewelery")} />
        <Button className="all" name="Men's Clothing" handleBtn={() => filterprod("men's clothing")} />
        <Button className="all" name="Women's Clothing" handleBtn={() => filterprod("women's clothing")} />
      </div>

      <div className="card-container">
        {filterCard.map((prod) => {
          return (
            <Card
              key={prod.id}
              id={prod.id}
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
