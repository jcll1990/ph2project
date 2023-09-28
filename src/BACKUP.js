import React, { useEffect, useState, } from "react";
import "../../css/GamePage.css";

import champ2attackl from "./images/champ2/champ2attackl.gif"
import champ2attackr from "./images/champ2/champ2attackr.gif"
import champ2runr from "./images/champ2/champ2runr.gif"
import champ2runl from "./images/champ2/champ2runl.gif"

import demon1run from "./images/demon1/demon1run.gif"
import demon1attack from "./images/demon1/demon1attack.gif"

import { useHistory } from "react-router-dom";


function GamePage({
  player,
  setPlayer,
  setLaunch
}) {

const history = useHistory();


const [playerHP, setPlayerHP] = useState(player.hp)
let playerSpeed = player.speed
let playerDMG = player.dmg

const [hit, setHit] = useState(false)
const [imageToUse, setImageToUse] = useState(champ2runr)

const [attack, setAttack] = useState(false)
const [positionX, setPositionX] = useState(700);
const [positionY, setPositionY] = useState(600);
const [isMovingUp, setIsMovingUp] = useState(false);
const [isMovingDown, setIsMovingDown] = useState(false);
const [isMovingLeft, setIsMovingLeft] = useState(false);
const [isMovingRight, setIsMovingRight] = useState(false);



///////////ENEMY VARIABLES

const [enemySpeed, setEnemySpeed] = useState(5)
const [enemyHP, setEnemyHP] = useState(10)

const [enemyAttack, setEnemyAttack] = useState(false)
const [enemyPositionX, setEnemyPositionX] = useState(300); 
const [enemyPositionY, setEnemyPositionY] = useState(300); 
const [trigger, setTrigger] = useState(false);




////////////DIVS AND SHIT


  const playerImg = {
    width: "150px",
    height: "150px",
    position: "absolute",
    top: `${Math.max(0, Math.min(7200, positionY))}px`,
    left: `${Math.max(0, Math.min(1450, positionX))}px`,
  };
  const demonImg = {
    width: "200px",
    height: "200px",
    position: "absolute",
    top: `${Math.max(0, Math.min(750, enemyPositionY))}px`, // Ensure the red square stays within the div
    left: `${Math.max(0, Math.min(1450, enemyPositionX))}px`, // Ensure the red square stays within the div
  };


  function endgame() {

    setLaunch(false)
    if (enemyHP <= 0) {

      let userupdate = {
        money : (player.money +100)
        }

    fetch(`http://localhost:3000/users/${player.id}`, {
    method: 'PATCH',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(userupdate)
    })
    .then(response => {

        fetch(`http://localhost:3000/users/${player.id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setPlayer(data);
            alert("You won")
        });
    })
    } else {
      alert ("You died")
    }
    history.push("/mainpage");
}



////////////////////////////////////////////PLAYER THINGS
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////Player move and attack

useEffect(() => {
  const handleKeyDown = (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'a'].includes(e.key)) {
      e.preventDefault();
      switch (e.key) {
        case "ArrowUp":
          if (!isMovingUp) {
            setPositionY((prevPositionY) => prevPositionY - playerSpeed);
            setIsMovingUp(true);
            setAttack(false);
          }
          break;
        case "ArrowDown":
          if (!isMovingDown) {
            setPositionY((prevPositionY) => prevPositionY + playerSpeed);
            setIsMovingDown(true);
            setAttack(false);
          }
          break;
        case "ArrowLeft":
          if (!isMovingLeft) {
            setPositionX((prevPositionX) => prevPositionX - playerSpeed);
            setImageToUse(champ2runl);
            setIsMovingLeft(true);
            setAttack(false);
          }
          break;
        case "ArrowRight":
          if (!isMovingRight) {
            setPositionX((prevPositionX) => prevPositionX + playerSpeed);
            setImageToUse(champ2runr);
            setIsMovingRight(true);
            setAttack(false);
          }
          break;
        case "a":
          setAttack(true);


          if (imageToUse == champ2runl) { setImageToUse(champ2attackl)} else {setImageToUse(champ2attackr)}

          
          break;
        default:
          break;
      }
    }
  };

  const handleKeyUp = (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'a'].includes(e.key)) {
      switch (e.key) {
        case "ArrowUp":
          setIsMovingUp(false);
          setAttack(false);
          break;
        case "ArrowDown":
          setIsMovingDown(false);
          setAttack(false);
          break;
        case "ArrowLeft":
          setIsMovingLeft(false);
          setAttack(false);
          break;
        case "ArrowRight":
          setIsMovingRight(false);
          setAttack(false);
          break;
        case "a":
          setAttack(false);
          break;
        default:
          break;
      }
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

  // Clean up the event listeners when the component unmounts
  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
  };
}, [isMovingUp, isMovingDown, isMovingLeft, isMovingRight, attack]);

////////////////////////////////////////////ENEMY THINGS
/////////////////////////////////////////////////////////////////////////////////////
//////////ENEMY move

  function moveEnemy() {
    let dx = 0
    let dy = 0

    if (positionX > enemyPositionX) {
      dx = 1} else if (positionX < enemyPositionX) {
      dx = -1} else {dx = 0}

    if (positionY > enemyPositionY) {
      dy = 1} else if (positionY < enemyPositionY) {
      dy = -1} else {dy = 0}

    setEnemyPositionX((prevPositionX) => prevPositionX + dx * enemySpeed);
    setEnemyPositionY((prevPositionY) => prevPositionY + dy * enemySpeed);
  }
  
  useEffect(() => {
    const interval = setInterval(moveEnemy, 100); 
  
    return () => {
      clearInterval(interval);
    };
  }, [trigger]);
  

  useEffect(() => {
    const intervalId = setInterval(() => {

      setTrigger((prevTrigger) => !prevTrigger);
    }, 300); 

  }, []); 
  
////////////////ENEMY ATTACK

useEffect(() => {
  const toggleAttack = () => {
    setEnemyAttack(true);
    setTimeout(() => {
      setEnemyAttack(false);
    }, 500); 
  };
  toggleAttack();

  const intervalId = setInterval(toggleAttack, 2000);
  return () => {
    clearInterval(intervalId);
  };
}, [enemyAttack,attack]);


////////////////////////////////////// HIT

useEffect(() => {
  if (((enemyPositionX - 30) <= positionX) && (positionX <= (enemyPositionX + 30)) && ((enemyPositionY - 30) <= positionY) && (positionY <= (enemyPositionY + 30))) {
    setHit(true);
  } else {
    setHit(false);
  }
}, [positionX, positionY, enemyPositionX, enemyPositionY, attack, enemyAttack]);

useEffect(() => {
  if (enemyAttack && hit) {
    setPlayerHP((prevPlayerHP) => prevPlayerHP - 1)
    if (playerHP <=0) {
      endgame()
    }

  }

}, [attack, enemyAttack]);

useEffect(() => {
  if (attack && hit) {
    setEnemyHP((prevEnemyHP) => prevEnemyHP - playerDMG);
    if (enemyHP <= 0) {
      endgame()
    }

  }

}, [attack, enemyAttack]);


/////////////////////////////////////////////////////////////////GAME HTML
//////////////////////////////////////////////////////////////

  return (

    <div>
          
    <div className="map-container">
        <img 
            src={imageToUse}
            style={playerImg}
            alt="Your Image Description"
        />

        <img 
            src={enemyAttack === true ? demon1attack : demon1run}
            style={demonImg}
            alt="Your Image Description"
        />
        </div>
      <div style={{ position: "absolute"}}>

      <>
      <h1>PLAYER HP: {playerHP}</h1>
      <h1>DEMON HP: {enemyHP}</h1>
      </>
      </div>
    </div>
  );
}


export default GamePage;
