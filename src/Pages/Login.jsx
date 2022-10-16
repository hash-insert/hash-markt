import Button from "../components/Button";
import Header from "../components/Header";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <Header />
      <hr />
      <div className="input-style">
        <h1>LOGIN</h1>

        <input type="email" placeholder="Email or Number" />
        <input type="password" placeholder="Email password" />
        <p>
          Don't have an account? Sign up <a href="">here</a>.
        </p>
        <Button className="loginBtn" name="Login" type="submit" />
      </div>
    </div>
  );
}
