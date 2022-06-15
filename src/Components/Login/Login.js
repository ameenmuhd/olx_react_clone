import React,{useState,useContext} from 'react';
import { FirbaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom'
function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {firbase} =useContext(FirbaseContext)
  const history=useHistory()
  const handleLogin=(e)=>{
    console.log("hoi");
    e.preventDefault()
    firbase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')

    }).catch((err)=>{
      console.log('hoi');
      alert(err.message)
    })

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>{history.push('/signup')}}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
