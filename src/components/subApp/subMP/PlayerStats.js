import React from "react";
import champimg from "../../../images/champ/champ2image.png";


export default function PlayerStats({
  player
}) {
  const champImg = {
    width: "200px",
  };

  return (
    <div id="playerstats">  
        <div id="photochamp">
          <img src={champimg} style={champImg} alt="Champion" />
        </div>

        <div id="player-stats">
            <h1>Stats</h1>
            <h2>HP: {player.hp}</h2>
            <h2>Damage: {player.dmg}</h2>
            <h2>Speed: {player.speed}</h2>
            <h2>Money: {player.money}</h2>
        </div>    
    </div>
  );
}
