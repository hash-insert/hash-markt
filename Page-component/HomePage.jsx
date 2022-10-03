import Header from "../src/Header";
import Card from "../src/Card";
import { useEffect, useState } from "react";
import '../src/Card.css'



export default function Home() {

  const [products, setProducts] = useState([]);

const fetchData = () => {
    
  // fetching data from url
  let url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
    console.log(data)
      setProducts(data);
    });
};

useEffect(() => {
   fetchData();
}, []);

  return (
    <div>
      <Header />
      <div  className="card-container">
      {products.map((prod) => {
        return (
        
            <Card key={prod.id} img={prod.image} num={prod.rating.count} name={prod.title} desc={prod.descrption} cost={prod.price} />
          );
      })}
      </div>
      
    </div>
  );
}
