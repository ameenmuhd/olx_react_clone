import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create  from './Pages/Create'
import View from './Pages/ViewPost'
import Home from './Pages/Home';
import {AuthContext,FirbaseContext} from './store/Context';
import Post from './store/PostContext'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const {setUser}=useContext(AuthContext)
  const {firbase}=useContext(FirbaseContext)
  useEffect(()=>{
firbase.auth().onAuthStateChanged((user)=>{
  setUser(user)
})
  })
  return (
    <div>
      <Post>
    <Router>
      <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/Signup'>
        <Signup></Signup>
      </Route>
      <Route path='/login'>
        <Login></Login>
      </Route>
      <Route path='/create'>
        <Create/>
      </Route>
      
      <Route path='/view'>
       <View></View>
      </Route>
             
             
    
    </Router>
    </Post>
   
    </div>
  );
}

export default App;
