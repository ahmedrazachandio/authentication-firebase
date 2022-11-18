import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import { auth } from './firebase';

function App() {
  const [userName, SetUserName] = useState("");


  useEffect(() =>{
    auth.onAuthStateChanged((user) =>{
      if(user){
        SetUserName(user.displayName)
      }else SetUserName("");

      
      console.log(user)
    });

  },[])





  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>



      {/* <Home />
      <Login />
      <Signup /> */}
     
    </div>
  );
}

export default App;
