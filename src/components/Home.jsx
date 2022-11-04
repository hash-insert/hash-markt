
import Card from '../Card'
import '../Card.css'
import './Home.css'
import { useContext, useEffect, useState } from "react";
import ProductContext from '../context/product-context';
import CartContext from '../context/Cart-context';
export default function Home(props) {

   // const [products, setProducts] = useState([]);
   const {productList} = useContext(ProductContext);
   // const {productcart} = useContext(CartContext);
   console.log('products context ',productList)
 
   const [categories, setCategories] = useState([]);
   const [category, setCategory] = useState("");
   const { items, setItems, addTocart } = useContext(CartContext);
 
   const fetchCategories = () => {
     // fetching data from url
     let url = `https://fakestoreapi.com/products/categories`;
     fetch(url)
       .then((res) => res.json())
       .then((data) => {
         console.log("categories ", data)
         setCategories(data);
       });
   };
 
 
   useEffect(() => {
     fetchCategories();
   }, [])
 
   // onclick of the filter field
   const filterprod = (categories) => {
     console.log("categories ", categories)
     setCategory(categories);
   }
 
 
   let updatedList = [];
 
   if (category !== "") {
     updatedList = productList.filter((catitems) => catitems.category === category);
   }
   else {
     updatedList =  productList;
   }
 


  return (
    <div className='homepage'>
      <div className="filterbtn">
        <button onClick={() => filterprod("")}> All </button>
        <button onClick={() => filterprod("electronics")}> Electronics </button>
        <button onClick={() => filterprod("jewelery")}>Jewelery </button>
        <button onClick={() => filterprod("men's clothing")}> mens Clothing </button>
        <button onClick={() => filterprod("women's clothing")}> Womens Clothing </button>
      </div>
      <div className='cardcon'>
        {
          updatedList.map((prod) => {
            const checkitem = items.find((item) => item.id === prod.id)
            return (
              <Card  key = { prod.id}id={prod.id}  prod={prod} image={prod.image} num={prod.rating.count} name={prod.title} desc={prod.descrption} cost={prod.price}  addTocart={addTocart} checkItem={checkitem}/>
              
            );
          })}
      </div>
    </div>
  );
}


