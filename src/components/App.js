import React, { useState, useEffect } from "react";
import Login from "./subApp/Login.js";
import MainPage from "./subApp/MainPage.js";
import PlayerStats from "./subApp/subMP/PlayerStats.js";


function App() {
  const [player, setPlayer] = useState({});
  const [allData, setAllData] = useState([]);
  const [logPlayer, setLogPlayer] = useState([]);
  const [playerHP, setPlayerHP] = useState(1);
  const [playerSpeed, setPlayerSpeed] = useState(1);
  const [playerDMG, setPlayerDMG] = useState(1);
  const [playerMoney, setPlayerMoney] = useState(0);

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
  );
}

export default App;
