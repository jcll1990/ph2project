import React, { useEffect, useState, } from "react";
import "../../css/GamePage.css";



import map from "./images/maps/Best map.png"
import map2 from "./images/maps/mapasa.png"


import champ1attackl from "./images/champ1/champ1attackl.gif"
import champ1attackr from "./images/champ1/champ1attackr.gif"
import champ1runr from "./images/champ1/champ1runr.gif"
import champ1runl from "./images/champ1/champ1runl.gif"

import champ2attackl from "./images/champ2/champ2attackl.gif"
import champ2attackr from "./images/champ2/champ2attackr.gif"
import champ2runr from "./images/champ2/champ2runr.gif"
import champ2runl from "./images/champ2/champ2runl.gif"

import champ3attackl from "./images/champ3/camp3attackl.gif"
import champ3attackr from "./images/champ3/camp3attackr.gif"
import champ3runr from "./images/champ3/champ3runr.gif"
import champ3runl from "./images/champ3/champ3runl.gif"

import demon1run from "./images/demon1/demon1run.gif"
import demon1attack from "./images/demon1/demon1attack.gif"
import demon2run from "./images/demon2/demon2run.gif"
import demon2attack from "./images/demon2/demon2attack.gif"

function GamePage() {

const [hit, setHit] = useState(false)

/////PLAYER VARIABLES

const [playerImag, setPlayerImg] = useState(3)
const [playerHP, setPlayerHP] = useState(10)
const [playerSpeed, setPlayerSpeed] = useState(20)
const [playerDMG, setPlayerDMG] = useState(1)

const [imageToUse, setImageToUse] = useState(champ3runr)


const [attack, setAttack] = useState(false)
const [positionX, setPositionX] = useState(700);
const [positionY, setPositionY] = useState(600);
const [isMovingUp, setIsMovingUp] = useState(false);
const [isMovingDown, setIsMovingDown] = useState(false);
const [isMovingLeft, setIsMovingLeft] = useState(false);
const [isMovingRight, setIsMovingRight] = useState(false);



///////////ENEMY VARIABLES

const [enemySpeed, setEnemySpeed] = useState(5)
const [enemyHP, setEnemyHP] = useState(5)


const [enemyImg, setEnemyImg] = useState(demon1run)

const [enemyAttack, setEnemyAttack] = useState(false)
const [enemyPositionX, setEnemyPositionX] = useState(300); 
const [enemyPositionY, setEnemyPositionY] = useState(300); 
const [trigger, setTrigger] = useState(false);




////////////DIVS AND SHIT

  const divMap = {
    width: "1500px",
    height: "800px",
    position: "relative",
    border: "10px solid black",
    backgroundImage: `url(${map})`, // Set the background image
    backgroundSize: "cover", // Adjust the background size as needed
  };

  const playerImg = {
    width: "80px",
    height: "80px",
    position: "absolute",
    top: `${Math.max(0, Math.min(7200, positionY))}px`,
    left: `${Math.max(0, Math.min(1450, positionX))}px`,
  };
  const demonImg = {
    width: "150px",
    height: "150px",
    position: "absolute",
    top: `${Math.max(0, Math.min(750, enemyPositionY))}px`, // Ensure the red square stays within the div
    left: `${Math.max(0, Math.min(1450, enemyPositionX))}px`, // Ensure the red square stays within the div
  };



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
            setImageToUse(champ3runl);
            setIsMovingLeft(true);
            setAttack(false);
          }
          break;
        case "ArrowRight":
          if (!isMovingRight) {
            setPositionX((prevPositionX) => prevPositionX + playerSpeed);
            setImageToUse(champ3runr);
            setIsMovingRight(true);
            setAttack(false);
          }
          break;
        case "a":
          setAttack(true);


          if (imageToUse == champ3runl) { setImageToUse(champ3attackl)} else {setImageToUse(champ3attackr)}

          
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
    return () => {
      clearInterval(intervalId);
    };
  }, []); 
  

////////////////ENEMY ATTACK

useEffect(() => {
  const toggleAttack = () => {
    setEnemyAttack(true);
    setTimeout(() => {
      setEnemyAttack(false);
    }, 800); // Set the enemyAttack to false after 300 milliseconds
  };

  // Start with an initial toggle
  toggleAttack();

  // Set up an interval to toggle the enemyAttack state every 3000 milliseconds (3 seconds)
  const intervalId = setInterval(toggleAttack, 2000);

  // Clean up the interval when the component unmounts
  return () => {
    clearInterval(intervalId);
  };

  

}, []);


////////////////////////////////////// HIT

useEffect(() => {
  if (((enemyPositionX - 50) <= positionX) && (positionX <= (enemyPositionX + 50)) && ((enemyPositionY - 50) <= positionY) && (positionY <= (enemyPositionY + 50))) {
    setHit(true);
  } else {
    setHit(false);
  }
}, [positionX, positionY, enemyPositionX, enemyPositionY, attack, enemyAttack]);

useEffect(() => {
  if (enemyAttack && hit) {
    setPlayerHP((prevPlayerHP) => prevPlayerHP - 1);
    if(playerHP <=1) {alert("Pierdes")} else {}
  }

}, [attack, enemyAttack]);

useEffect(() => {
  if (attack && hit) {
    setEnemyHP((prevEnemyHP) => prevEnemyHP - playerDMG);
    if(enemyHP <=1) {alert("Ganas")} else {}
  }

}, [attack, enemyAttack]);





/////////////////////////////////////////////////////////////////GAME HTML
//////////////////////////////////////////////////////////////

  return (

    <div>
          <>
    <button onClick={() => test()}>test</button>
    </>
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
