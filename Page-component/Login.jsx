import Button from "../src/Button"
import Header from "../src/Header"
import './Login.css'

export default function Login(){
    return (
        <div>
            <Header />
            <div className="input-style">
        <h1>LOGIN</h1>
        
        <input type="email" placeholder="Email or Number" />
        <input type="password" placeholder="Email password" />
        <p>Don't have an account? Sign up <a href="">here</a>.</p>
        <Button className="loginBtn" name="Login" type="submit" />
        </div>
        </div>
    )
}