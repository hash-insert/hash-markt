import './Cart.css';

import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom'
import cartContext from '../context/Cart-context';
export default function Cart(props) {
    const cart = useContext(cartContext);
    return (
        <div className="CartContainer">
            {(cart.items.length > 0) ?
                cart.items.map((item) => {
                    return <p>{item.title}</p>;
                })
                :

                <div className='product'>
                    <img src={item.image} className='pimg'></img>
                    <h1>CART</h1>

                    <h5>Presently No items in cards</h5>
                </div>

            }
        </div>

    )
}