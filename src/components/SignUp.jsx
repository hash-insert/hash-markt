import Header from '../Header'
import './SignUp.css';

export default function SignUp(){
    return (

<div>
    <div className="signup-style">
    <h1>SIGN UP</h1>
    <input type="name" placeholder="First Name" />
    <input type="name" placeholder="Last Name" />
    <input type="email" placeholder="Email Address" />
    <input type="password" placeholder="Password" />
    <input type="password" placeholder="Confirm Password" />
    <p>Already have an account? Login <a href="">here</a>.</p>
<button className='registerbtn'>register</button>    </div>
</div>        
    )
}