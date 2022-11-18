import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { HeartIcon, ShoppingCartIcon,StarIcon } from "@heroicons/react/24/outline";


import ProductContext from '../context/product-context';
import './Productdetails.css';
import Header from '../Header'

export default function Productdetails(props) {
    const { productList } = useContext(ProductContext);

    const prod_id = useParams();
    console.log("product id ", prod_id)

    const productDetail = productList.find(item => item.id === parseInt(prod_id.prod))
    console.log(productDetail);

    return (
        <div className='productpage'>
            <h1>Product details</h1>
            <div className='product'>
                <img src={productDetail.image} className='pimg'></img>
                <div className='productdetails'>
                    <h2>({productDetail.title})</h2>
                    <h3>{productDetail.rating && productDetail.rating.rate}</h3>
                    <p>{productDetail.description}</p>
                    <span>$.{productDetail.price}</span>
                    <button className='addtocart'>add to cart < ShoppingCartIcon className='cart' /></button>

                </div>

            </div>
        </div>
    )
}   