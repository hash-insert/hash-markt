import { useState,useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";






export default function Product (props){
    const [singleProd,setSingleProd]= useState([])
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
          .catch((err)=> {
            console.log(err)
          })
      };
      
    
      useEffect(() => {
        fetchUniqueProd();
      }, []);

let unique = useParams()


    return (
        <div>
            <Header />
            <hr />
            <h1>Product page</h1>
          <>
          {singleProd.id} <br />
          {singleProd.title}<br />
          <img src={singleProd.image} style={{width:"100px"}}    alt="" /><br />

          </>
            </div>
          
    )
}