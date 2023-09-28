import React from "react";
import champimg from "../images/champ2/champ2image.png";
import "../../../css/MainPage.css";

export default function PlayerStats({
  player
}) {
  const champImg = {
    width: "200px",
  };

  return (
    <div className="player-container">
      <div className="card">
        <div className="card-content">
          <img src={champimg} style={champImg} alt="Champion" />
          <div className="player-stats">
            <h3>Stats</h3>
            <h4>HP: {player.hp}</h4>
            <h4>Damage: {player.dmg}</h4>
            <h4>Speed: {player.speed}</h4>
            <h4>Money: {player.money}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
