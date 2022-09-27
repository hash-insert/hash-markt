import Header from "../src/Header";
import Card from "../src/Card";
import { useEffect, useState } from "react";

// const [products, setProducts] = useState([]);

// const fetchData = () => {
    
//   // fetching data from url
//   let url = "https://fakestoreapi.com/products";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       setProducts(data.json());
//     });
// };

// useEffect(() => {

//   fetchData();
// }, []);

// console.log(products)
export default function Home() {

  const [products, setProducts] = useState([]);

const fetchData = () => {
    
  // fetching data from url
  let url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
    
      setProducts(data);
    });
};

useEffect(() => {
   fetchData();
}, []);

  return (
    <div>
      <Header />
      
      {products.map((prod) => {
        return (
        <ul>
          <li key={prod.id}>
            <Card name={prod.title} desc={prod.dscrption} cost={prod.price} />
            <h1>{prod.title}</h1>
          </li>
        </ul>);
      })}
    </div>
  );
}
