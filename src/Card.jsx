import './Card.css'
import { Link } from 'react-router-dom'
import { HeartIcon, ShoppingCartIcon,StarIcon } from "@heroicons/react/24/outline";

export default function Card(props) {
  return (
    <div className="container" >
       <HeartIcon className='heart' />
     
      <Link to={`/Productdetails/${props.id}`}><img src={props.image} /></Link>
      <div className='image'>

      </div>
      ({props.name})


      <div className='rating'>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />

        ({props.num})

      </div>
      <p>{props.desc}</p>
      <span>{props.cost}</span>
{/* <link to={`/Cart/${props.id}`}>< ShoppingCartIcon className='cart'/> </link> */}

<button  className='addtocart'>add to cart < ShoppingCartIcon className='cart'/></button>
    </div>
  )
}
