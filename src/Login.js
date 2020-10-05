import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css"
import {auth} from "./firebase"

function Login() {
    const history = useHistory()
      const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) =>{
      e.preventDefault();
auth.signInWithEmailAndPassword(email, password).then(auth=>{
    history.push("/")
})
.catch(error  => alert(error.message))
 }
  const register=(e)=>{
      e.preventDefault();
auth.createUserWithEmailAndPassword(email, password)
.then((auth)=>
{
    if(auth){
        history.push("/")
    }
}
).catch(error => alert(error.message))
  }
    return (
        <div className="login">
             <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt="logo-amazon"
        />
      </Link>
       <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button  type="submit" onClick={signIn} className="login__signInButton">
            Sign in
          </button>
        </form>
        <p>
          By signin-in you agree to Amazon's Condtions of Use & sale. Please se
          our privacy Notice, our Cookies Notice and our Interested-based Ads
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
        </div>
    )
}

export default Login
