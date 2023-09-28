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
    setStoreItems,
    allLevels,
    setSelectedLevel
}) {


    
    
    return (
    <>
    <div className="supercontainer">
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
    </div>
    <GameLauncher
        setLaunch={setLaunch}
        launch={launch}
        allLevels = {allLevels}
        setSelectedLevel = {setSelectedLevel}
    />
    </>
    )

}
export default MainPage;