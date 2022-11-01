import './Card.css'
import { Link } from 'react-router-dom'
import './components/Button.jsx';
import { useContext, useState } from "react";
import { HeartIcon, ShoppingCartIcon,StarIcon } from "@heroicons/react/24/outline";
import cartContext from './context/Cart-context';
import ProductCount from './context/ProductCount';
export default function Card(props) {
  const countCtx = useContext(ProductCount);
  const cartCtx = useContext(cartContext);
  const [toggle, setToggle] = useState(false);
  const handleCart = (e) => {
    {
      countCtx.incrementCount();
      toggle ? cartCtx.addTocart(props.prod)  :cartCtx.removeFromCart(props.prod)
      toggle
        ? (e.target.style.backgroundColor = "yellow")
        : (e.target.style.backgroundColor = "red");
      setToggle((toggle) => !toggle);
    
    }
  };
  return (
    <div className="container" >
       <HeartIcon className='heart' />
     
      <Link to={`/Productdetails/${props.id}`}><img src={props.image} /></Link>
      <div className='name'>
      ({props.name})

      </div>


      <div className='ratingstar' >
        <StarIcon className='rating'/>
        <StarIcon className='rating'/>
        <StarIcon className='rating'/>
        <StarIcon className='rating'/>
        <StarIcon className='rating'/>

        ({props.num})

      </div>
      <p>{props.desc}</p>
      <span>${props.cost}</span>
{/* <link to={`/Cart/${props.id}`}>< ShoppingCartIcon className='cart'/> </link> */}

<button  className='addtocart'  onClick={handleCart}>add to cart <ShoppingCartIcon className='cart' /></button>

    </div>
  )
}
