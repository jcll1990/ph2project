import React, { useEffect, useState, } from "react";
import GamePage from "./GamePage.js";

function MainPage({player}) {


    const [playerImag, setPlayerImg] = useState()
    const [playerHP, setPlayerHP] = useState()
    const [playerSpeed, setPlayerSpeed] = useState()
    const [playerDMG, setPlayerDMG] = useState() 

    

    useEffect(() => {
  
        setPlayerImg(player.user_champ)
        setPlayerHP(player.user_hp)
        setPlayerSpeed(player.user_speed)
        setPlayerDMG(player.user_dmg)

}, [player]);
    
    return (







    <GamePage
    playerImag={playerImag}
    playerHP={playerHP}
    playerSpeed={playerSpeed}
    playerDMG={playerDMG}
    />

    )

}
export default MainPage;