import React from "react";
import PlayerStats from "./subMP/PlayerStats";
import PlayerUpgrades from "./subMP/PlayerUpgrades";
import GameUpgrades from "./subMP/GameUpgrades";
import GameLauncher from "./subMP/GameLauncher";


function MainPage({ 
    player,
    playerHP,
    playerSpeed,
    playerDMG,
    playerMoney, 
    setPlayerHP,
    setPlayerSpeed,
    setPlayerDMG,
    setPlayerMoney,
    updatePlayerData
    setPlayer,
    setLaunch,
    launch
}) {


    
    return (
    <>
    <PlayerStats

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

            playerHP = {player.user_hp}
            playerSpeed = {player.user_speed}
            playerDMG = {player.user_dmg}
            playerMoney = {player.user_money}

    />

    <PlayerUpgrades

    />

    <GameUpgrades
    />

    <GameLauncher
    setLaunch={setLaunch}
    launch={launch}
    />

    </>
    )

}
export default MainPage;