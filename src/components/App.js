import React from "react";

import Login from "./subApp/Login.js";
import MainPage from "./subApp/MainPage.js";
import GamePage from "./subApp/GamePage.js";
import Home from "./subApp/Home.js";


import { useState, useEffect} from "react";

import {Switch, Route, Routes } from 'react-router-dom';

function App() {

  const [player, setPlayer] = useState({})
  const [allData, setAllData] = useState([])
  const [launch, setLaunch] = useState(false)

let a = {}


  useEffect(() => {
    fetch(`http://localhost:3000/users`)
      .then((resp) => resp.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);

  return (
  <div>
    <Switch>

      <Route exact path="/">
        <Home

        />
      </Route>
      
      <Route exact path="/login">
        <Login
            allData = {allData}
            setPlayer = {setPlayer}

        />
      </Route>

      <Route exact path="/mainpage">
        <MainPage
            player = {player}
            setPlayer = {setPlayer}
            launch= {launch}
            setLaunch={setLaunch}            
        />
      </Route>

      <Route exact path="/gamepage">
        
          {launch === true && Object.keys(player).length !== 0 ? 
          
          (
            <GamePage 
              player={player}
              setLaunch={setLaunch}
            />
          ) : (
            <img src="/load.jpg" alt="Loading" />
          )}
        
      </Route>

    </Switch>
    </div>
      
  );
}
export default App;
