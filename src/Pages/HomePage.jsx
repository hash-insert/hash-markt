import Header from "../components/Header";
import Card from "../components/Card";
import { useContext, useEffect, useState } from "react";
import "../components/Card.css";
import ProductContext from "../context/product-context";
import cartContext from "../context/cart-context";
import Button from "../components/Button";
import { Link } from "react-router-dom";





export default function Home(props) {
  const [products, setProducts] = useState([]);
  const [category,setCategory] = useState([])

  function handleElecBtn(){
    console.log('electronics')
    
 let filterElec = products.filter((item)=> {
  if(item.category=== 'electronics'){
    console.log(item)
  }
 
 })
 return filterElec
}

function handleJewBtn(){
  console.log('jewellary')
  
let filterJew = products.filter((item)=> {
if(item.category=== "jewelery"){
  console.log(item)
}

})
return filterJew
}
function handleMensBtn(){
  console.log('mens cloth')
  
let filterMens = products.filter((item)=> {
if(item.category=== "men's clothing"){
  console.log(item)
}

})
return filterMens
}
function handleWomensBtn(){
  console.log('womens cloth')
  
let filterWomens = products.filter((item)=> {
if(item.category=== "women's clothing"){
  console.log(item)
}

})
return filterWomens
}

  

  const { items, setItems, addTocart } = useContext(cartContext);

  const fetchData = () => {
    // fetching data from url
    let url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
        props.handleProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
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



  // Filtering Data
  // useEffect - depending click event of your handler tabs - fetch filtered products




  return (
    <div>
      <Header />
      <hr />
      <div className="tabs">
      <Link to="/">
      <Button name="All"  />
      </Link>
      
      <Button name="Electronics" handleBtn={handleElecBtn} />
      <Button name="Jewellary" handleBtn={handleJewBtn} />
      <Button name="Men's Clothing" handleBtn={handleMensBtn} />
      <Button name="Women's Clothing" handleBtn={handleWomensBtn} />


      </div>
      
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
