import Header from '../Header'

import './Login.css';
export default function Login(){
    return (
        <div>
        <div className="input-style">
        <h1>LOGIN</h1>
        
        <input type="email" placeholder="Email or Number" />
        <input type="password" placeholder="Email password" />
        <p>Don't have an account? Sign up <a href="">here</a>.</p>
               <button className='loginbtn'>submit</button>
        </div>
        </div>
    )
}