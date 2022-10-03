
import Card from '../Card'
import '../Card.css'
import './Home.css'
import { useEffect, useState } from "react";
export default function Home() {

  const [products, setProducts] = useState([]);
  const [filter, setFilter]=useState()

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
const filterprod = (categories) =>{
  const updatedList = data.filter((catitems) => {
    return catitems.category === categories; });
  setFilter(updatedList);
}

  return (
  
    <div className='homepage'>
        <div className="filterbtn">
<button onClick={()=> setFilter()}> All </button>
<button onClick={()=> filterprod("electronics")}> Electronics </button>
<button onClick={()=>filterprod ("Jewellary")}>Jewellary </button>
<button onClick={()=>filterprod ("men's clothing")}> mens Clothing </button>
<button onClick={()=> filterprod("women's clothing")}> Womens Clothing </button>
</div>
<div className='cardcon'>
      {products.map((prod) => {
        return (
          <Card key={prod.id} image={prod.image} num={prod.rating.count} name={prod.title} desc={prod.descrption} cost={prod.price} />
        );
      })}
      </div>
      </div>
  );}


