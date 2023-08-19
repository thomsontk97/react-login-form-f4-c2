import React, { useState } from "react";



const Login = ()=> {

const [username,setUsername] = useState();
const [password,setPassword] = useState();


const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          // Save user object and token in localStorage
          localStorage.setItem('user', JSON.stringify(data.user));
          // Redirect to profile page
        //   window.location.href ="./Profile.js";
        window.location.replace("./Profile.js");
        } else {
          // Handle login error here
          console.error(data.message);
        }
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };


    return (

       <div className="root-box">
        <div className="main">
            <p>welcome back! 👋</p>
            <h1>Sign in to your account</h1>
         <div className="login-box">
            <div className="inpt-box">
            <label for="email">Your email</label>
            <input type="text" 
            id="email"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
            </div>
           <div className="inpt-box">
           <label for="password">Your password</label>
            <input type="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
           </div>
            <button onClick={handleLogin}>CONTINUE</button>
            <p>Forgot password?</p>
        </div>
       </div>
       <div>Don’t have an account? <a href="#">Sign up</a></div>
       </div>

    )

}


export default Login;