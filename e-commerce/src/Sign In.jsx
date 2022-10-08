import Button from "./button"

const Sign_In = () => {
    return (
        <div>
          <div className='input-style'>
          <h1>Login</h1>
          <input type="Email" placeholder = "Email Address" />
          <input type="Password" placeholder = "Password" />
          <p>Don't have an account Sign up <a href = "">here.</a></p>
          <Button className = "Loginbtn" name='submit' type='submit' >Login</Button>
        </div>
        </div>
    )
}
export default Sign_In;