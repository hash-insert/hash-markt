import Header from "../components/Header";
import Button from "../components/Button"
import { HeartIcon } from "@heroicons/react/24/outline";

export default function Fav(props) {
  return (
    <div>
      <Header />
      <h1>FAVOURITE</h1>
    <HeartIcon />
      <p>There is no product in your favorites.</p>
      <p>Add the products you like to your favorites to buy them later.</p>
      <Button name="Continue Shopping" />
    </div>
  );
}
