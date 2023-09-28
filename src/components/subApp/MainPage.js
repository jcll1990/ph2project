import React from "react";
import PlayerStats from "./subMP/PlayerStats";
import PlayerUpgrades from "./subMP/PlayerUpgrades";
import GameUpgrades from "./subMP/GameUpgrades";
import GameLauncher from "./subMP/GameLauncher";


function MainPage({
    player,
    setPlayer,
    launch,
    setLaunch,
    storeItems,
    setStoreItems
}) {


    
    
    return (
    <>
    <PlayerStats
        player={player}

    />

    <PlayerUpgrades
        player={player}
        storeItems = {storeItems}
    />

    <GameUpgrades
        player={player}
        setPlayer = {setPlayer}
        storeItems = {storeItems}
        setStoreItems = {setStoreItems}

    />

    <GameLauncher
        setLaunch={setLaunch}
        launch={launch}
    />
    </>
    )

}
export default MainPage;