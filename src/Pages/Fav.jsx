import Header from "../components/Header";
import Button from "../components/Button";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import FavContext from "../context/favorite-context";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Fav(props) {



  const fav = useContext(FavContext);
  return (
    <div>
      <Header /> 
      <hr />
      {(fav.items.length > 0)?
      fav.items.map((prod) => {
       return(
        <div className="favCards">
        <Card
        key={prod.id}
        id={prod.id}
        prod={prod}
        img={prod.image}
        num={prod.rating.count}
        name={prod.title}
        desc={prod.descrption}
        cost={prod.price}
        
      />
      </div>
       )
      
      })
      :

      <div className="fav">
        <h1>FAVOURITE</h1>
        <HeartIcon style={{ width: "250px", height: "250px", color: "red" }} />
        <p>There is no product in your favorites.</p>
        <p>Add the products you like to your favorites to buy them later.</p>
        <Link to="/"><Button name="Continue Shopping" /></Link>
      </div>
}
    </div>
  );
}
