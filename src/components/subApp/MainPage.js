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
    
    <div id="main">

        <div id ="playershit">

             <PlayerUpgrades id="playerupgrades"
                player={player}
                storeItems = {storeItems}
            />

            <PlayerStats id="playerstats"
                player={player}

            />


        </div>

        <div id ="othershit">

        
            <GameLauncher id="game launcher"
                setLaunch={setLaunch}
                launch={launch}
                allLevels = {allLevels}
                setSelectedLevel = {setSelectedLevel}
            />

            <GameUpgrades id="store"
                player={player}
                setPlayer = {setPlayer}
                storeItems = {storeItems}
                setStoreItems = {setStoreItems}

            />
            
         </div>
    </div>
    
    )

}
export default MainPage;