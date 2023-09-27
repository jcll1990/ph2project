import React from "react";
import PlayerStats from "./subMP/PlayerStats";
import PlayerUpgrades from "./subMP/PlayerUpgrades";
import GameUpgrades from "./subMP/GameUpgrades";
import GameLauncher from "./subMP/GameLauncher";

function MainPage({ 
    player,
    setPlayer,
    setLaunch,
    launch
}) {


    
    return (
    <>

    <PlayerStats
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