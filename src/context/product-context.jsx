import { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  console.log("products fetch ");

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log("inside useeffect of context ")
    // fetching data from url
    let url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("products fetch ", data)
        setProductList(data);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ productList }}>{children}</ProductContext.Provider>
  )
}

export default ProductContext;