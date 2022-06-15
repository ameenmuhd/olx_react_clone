import React, { useState,useContext } from 'react';
import { FirbaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import  {useHistory} from 'react-router-dom'
import './Signup.css';

export default function Signup() {
  const history=useHistory()
  const [Username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  const {firbase}=useContext(FirbaseContext)
const handleSubmit=(e)=>{
  e.preventDefault();
 firbase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
  result.user.updateProfile({displayName:Username}).then(()=>{
    firbase.firestore().collection('users').add({
      id:result.user.uid,
      username:Username,
      phone:phone
    }).then(()=>{
      history.push('/login')

    })
  })
})
}

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            value={Username}
            onChange={(e)=>{setUsername(e.target.value)}}
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
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
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
