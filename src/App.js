import React, {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Ghost from "./components/Ghost";
import Homeowner from "./components/House";

//useState variables -> set users, ghosts and houses and maybe hauntings
//fetch user data as an effect on page l oad
const [users, setUsers] = useState([])
const [ghosts, setGhosts] = useState([])
const [houses, setHouses] = useState([])

useEffect(()=> {
    fetch("http://api.open-notify.org/astros.json")
    .then((response) => response.json())
    .then((json) => {
      setUsers(json)
    })

    fetch("http://api.open-notify.org/astros.json")
    .then((response) => response.json())
    .then((json) => {
      setGhosts(json)
    })

    fetch("http://api.open-notify.org/astros.json")
    .then((response) => response.json())
    .then((json) => {
      setHouses(json)
    })
}, [])


const App = () => {
  return (
    <div>
      <Route exact path="/" >
        <Login
        handleLogin={handleLogin}
        error={error}
        onSignup={handleSignup}/>
      </Route>

      <Route exact path="/signup" >
        <SignUp
        handleLogin={handleLogin}
        error={error}
        onSignup={handleSignup}/>
      </Route>
      
      <Route exact path="/homepage" >
        <HomePage
        handleLogin={handleLogin}
        error={error}
        onSignup={handleSignup}
        houses = {houses}/>
      </Route>

    </div>
  );
};

export default App;
