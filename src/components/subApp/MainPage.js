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
    setPlayerMoney
}) {


    
    return (
    <>
    <PlayerStats
            playerHP = {playerHP}
            playerSpeed = {playerSpeed}
            playerDMG = {playerDMG}
            playerMoney = {playerMoney}
    />

    <PlayerUpgrades

    />

    <GameUpgrades
    />

    <GameLauncher
    />

    </>
    )

}
export default MainPage;