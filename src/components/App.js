import React, { useState, useEffect } from "react";
import Login from "./subApp/Login.js";
import MainPage from "./subApp/MainPage.js";

import PlayerStats from "./subApp/subMP/PlayerStats.js";

import GamePage from "./subApp/GamePage.js";
import Home from "./subApp/Home.js";




import {Switch, Route, Routes } from 'react-router-dom';

function App() {
  const [player, setPlayer] = useState({});
  const [allData, setAllData] = useState([]);
  const [logPlayer, setLogPlayer] = useState([]);
  const [playerHP, setPlayerHP] = useState(1);
  const [playerSpeed, setPlayerSpeed] = useState(1);
  const [playerDMG, setPlayerDMG] = useState(1);
  const [playerMoney, setPlayerMoney] = useState(0);

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

  useEffect(() => {
    setPlayerHP(player.user_hp);
    setPlayerSpeed(player.user_speed);
    setPlayerDMG(player.user_dmg);
    setPlayerMoney(player.user_money);
  }, [player]);

  const updatePlayerData = (updatedPlayer) => {
    // Assuming you have implemented this function to update player data on the server
    fetch(`http://localhost:3000/users/${player.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlayer),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update player data");
        }
        // Handle the response as needed
        console.log("Player data updated successfully.");
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  };

  return (
    <div className="App">
      <Login
        allData={allData}
        setPlayer={setPlayer}
        player={player}
        logPlayer={logPlayer}
        setLogPlayer={setLogPlayer}
      />
      <MainPage
        player={player}
        playerHP={playerHP}
        playerSpeed={playerSpeed}
        playerDMG={playerDMG}
        playerMoney={playerMoney}
        setPlayerHP={setPlayerHP}
        setPlayerSpeed={setPlayerSpeed}
        setPlayerDMG={setPlayerDMG}
        setPlayerMoney={setPlayerMoney}
        updatePlayerData={updatePlayerData}
      />
    </div>

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
