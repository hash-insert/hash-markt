const Sign_Up = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <div className="Sign-up">
               <input type = "text" placeholder="First Name"/>
               <input type = "text" placeholder="Last Name"/>
               <input type = "Email" placeholder="Email Address"/>
               <input type = "Password" placeholder="Password"/>
               <input type = "Password" placeholder="Password Confirm"/>
               <p>Already have an account? Login <a href = "">here.</a></p>
               <button className = "Loginbtn" name='Login' type='submit'>Sign Up</button>
            </div>
        </div>
    )
}
export default Sign_Up;