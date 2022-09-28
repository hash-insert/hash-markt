import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <ul>
                <li>
                    <Link to='/Signin'>Signin</Link>
                </li>
                <li>
                    <Link to='/Signup'>Signin</Link>
                </li>
                <li>
                    <Link to='/Cart'>Cart</Link>
                </li>
                <li>
                    <Link to='/Favourites'>Favourites</Link>
                </li>
                <li>
                    <Link to='/ProductDetails'>Product Details</Link>
                </li>
                {/* <li>
                    <a href='/'>Signin</a>
                </li> */}
            </ul>

        </div>
    )
}

export default Header