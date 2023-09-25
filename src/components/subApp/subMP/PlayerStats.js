import React from "react";

import champimg from "../images/champ2/champ2image.png"

function PlayerStats({
    playerHP,
    playerSpeed,
    playerDMG,
    playerMoney, 
}) {


    const champImg = {
        width: "200px",


      };
    
    return (

<div>
    <img src={champimg}
    style={champImg}/>
    <div>
        <h3>Stats</h3>
        <h4>HP: {playerHP}</h4>
        <h4>Damage: {playerDMG}</h4>
        <h4>Speed: {playerSpeed}</h4>
        <h4>Money: {playerMoney}</h4>


    </div>


</div>



        )

}
export default PlayerStats;