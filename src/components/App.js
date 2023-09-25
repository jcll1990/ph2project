import React from "react";

import Login from "./subApp/Login.js";
import MainPage from "./subApp/MainPage.js";
import GamePage from "./subApp/GamePage.js";


import { useState, useEffect} from "react";

function App() {

  useEffect(() => {
    fetch(`http://localhost:3000/users`)
      .then((resp) => resp.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);


  const [player,setPlayer] =useState({})
  const [allData, setAllData] = useState([])
  const [logPlayer, setLogPlayer] = useState([])

  const [playerHP, setPlayerHP] = useState(1)
  const [playerSpeed, setPlayerSpeed] = useState(1)
  const [playerDMG, setPlayerDMG] = useState(1) 
  const [playerMoney, setPlayerMoney] = useState(0) 


  useEffect(() => {

    setPlayerHP(player.user_hp)
    setPlayerSpeed(player.user_speed)
    setPlayerDMG(player.user_dmg)
    setPlayerMoney(player.user_money)

  }, [player]);



  return (

    
      <div className="App">
        
        <Login
            allData = {allData}
            setPlayer = {setPlayer}
            player = {player}
            logPlayer = {logPlayer}
            setLogPlayer = {setLogPlayer}

        />

        <MainPage
            player = {player}

            playerHP = {playerHP}
            playerSpeed = {playerSpeed}
            playerDMG = {playerDMG}
            playerMoney = {playerMoney}

            setPlayerHP={setPlayerHP}
            setPlayerSpeed = {setPlayerSpeed}
            setPlayerDMG = {setPlayerSpeed}
            setPlayerMoney = {setPlayerSpeed}
            
        />


        <GamePage
            playerHP={playerHP}
            playerSpeed={playerSpeed}
            playerDMG={playerDMG}
            player={player}
            setPlayerHP = {setPlayerHP}
            />
 
      </div>
  );
}
export default App;
