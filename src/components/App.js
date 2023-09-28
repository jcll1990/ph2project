import React, { useState, useEffect } from "react";


import Home from "./subApp/Home.js";
import Login from "./subApp/Login.js";
import MainPage from "./subApp/MainPage.js";
import GamePage from "./subApp/GamePage.js";

import {Switch, Route} from 'react-router-dom';

function App() {


  const [allUsers, setAllUsers] = useState([]);
  const [storeItems, setStoreItems] = useState({})


  const [player, setPlayer] = useState({});

  const [launch, setLaunch] = useState(false)


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
        />
      </Route>

      <Route exact path="/gamepage">
        
          {launch === true && Object.keys(player).length !== 0 ? 
          
          (
            <GamePage 
              player={player}
              setPlayer = {setPlayer}
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
