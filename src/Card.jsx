import './Card.css'
import { Link } from 'react-router-dom'
import { HeartIcon, ShoppingCartIcon,StarIcon } from "@heroicons/react/24/outline";
// import CartContext from './context/Cart-context';
export default function Card(props) {
   const  handleBtn=(e) => {
    console.log(e.target);
    props.addTocart(props.prod);
  }
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

<button  className='addtocart'  onClick={handleBtn}>add to cart <ShoppingCartIcon className='cart' /></button>
    </div>
  )
}
