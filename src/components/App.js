import React, { useState, useEffect } from "react";


import Home from "./subApp/Home.js";
import Login from "./subApp/Login.js";
import MainPage from "./subApp/MainPage.js";
import GamePage from "./subApp/GamePage.js";
import YouDiedPage from "./subApp/YouDiedPage.js";
import YouSurvivedPage from "./subApp/YouSurvivedPage.js"

import {Switch, Route} from 'react-router-dom';

function App() {


  const [allUsers, setAllUsers] = useState([]);
  const [storeItems, setStoreItems] = useState({})


  const [player, setPlayer] = useState({});

  const [launch, setLaunch] = useState(false)

  const [selectedlevel, setSelectedLevel] = useState({})

  const [allLevels, setAllLevels] = useState([])


  useEffect(() => {
    fetch(`http://localhost:3000/users`)
      .then((resp) => resp.json())
      .then((data) => {
        setAllUsers(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/items`)
      .then((resp) => resp.json())
      .then((data) => {
        setStoreItems(data);
      });
  }, []);
   
  useEffect(() => {
  fetch(`http://localhost:3000/levels`)
    .then((resp) => resp.json())
    .then((data) => {
      setAllLevels(data);
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
            allUsers = {allUsers}
            setPlayer = {setPlayer}
            player={player}

        />
      </Route>

      <Route exact path="/mainpage">
        <MainPage
            player = {player}
            setPlayer = {setPlayer}
            launch= {launch}
            setLaunch={setLaunch}
            storeItems = {storeItems}
            setStoreItems = {setStoreItems}
            allLevels ={allLevels}
            setSelectedLevel = {setSelectedLevel}
        />
      </Route>

      <Route exact path="/gamepage">
        
          {launch === true && Object.keys(player).length !== 0  && Object.keys(selectedlevel).length !== 0? 
          
          (
            <GamePage 
              player={player}
              setPlayer = {setPlayer}
              setLaunch={setLaunch}
              selectedlevel = {selectedlevel}
            />
          ) : (
            <img src="/load.jpg" alt="Loading" />
          )}
        
      </Route>

      <Route exact path="/youdied">
        <YouDiedPage

        />
      </Route>

      <Route exact path="/yousurvived">
        <YouSurvivedPage

        />
      </Route>

    </Switch>
    </div>
      
  );
}

export default App;
