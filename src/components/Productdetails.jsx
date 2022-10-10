import { useContext } from 'react';
import { useParams } from 'react-router-dom'

import ProductContext from '../context/product-context';
import Header from '../Header'

export default function Productdetails (props){
    const {productList} = useContext(ProductContext);

    const prod_id = useParams();
    console.log("product id ", prod_id)

    const productDetail = productList.find(item => item.id === parseInt(prod_id.prod))
    console.log(productDetail);

    return (
        <div>
            <h1>Product details</h1>
            <div> <img src={productDetail.image }></img></div>
        </div>
    )
}   