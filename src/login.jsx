import React, { useState } from 'react'
import axios from 'axios';
import './App.css';
import './login.css';

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [user, setUser] = useState("");


  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/1")
      setUser(data)
    } catch {
      setError(error)
    }
  }
  return (
    <div className="login-base" >
     
        <p style={{textAlign:'center', padding:'40px'}}>{user.name}</p>
     



      <div className="login-heads">


        <label htmlFor="Email">Email</label>
        <input value={username} onChange={e => setUserName(e.target.value)} placeholder='username' type="email" />



        <label htmlFor="password">password</label>
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='password' id="password" />



        <button onClick={handleClick} disabled={!username || !password}> {loading ? "Please wait" : "Login"}</button>


        <span
          data-test-id="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >Something went wrong</span>

      </div>


    </div>
  )
}

export default Login;