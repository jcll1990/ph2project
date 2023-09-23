import React, { useEffect, useState, } from "react";
import "../../css/GamePage.css";
import imageToUse1 from "../../jpgs/img1.jpg"
import imageToUse2 from "../../jpgs/img2.jpg"
import imageToUse3 from "../../jpgs/img3.jpg"
import imageToUse4 from "../../jpgs/img4.jpg"
import demonimg from "../../jpgs/demon.jpg"

function GamePage() {

/////PLAYER VARIABLES

const [playerHP, setPlayerHP] = useState(1)
const [playerSpeed, setPlayerSpeed] = useState(20)
const [playerDMG, setPlayerDMG] = useState(1)

const [attack, setAttack] = useState(false)
const [positionX, setPositionX] = useState(700);
const [positionY, setPositionY] = useState(750);
const [imageToUse, setImageToUse] = useState(imageToUse1)
const [isMovingUp, setIsMovingUp] = useState(false);
const [isMovingDown, setIsMovingDown] = useState(false);
const [isMovingLeft, setIsMovingLeft] = useState(false);
const [isMovingRight, setIsMovingRight] = useState(false);



///////////ENEMY VARIABLES

const [enemySpeed, setEnemySpeed] = useState(5)

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
  };
  const playerImg = {
    width: "50px",
    height: "50px",
    position: "absolute",
    top: `${Math.max(0, Math.min(750, positionY))}px`,
    left: `${Math.max(0, Math.min(1450, positionX))}px`,
  };
  const demonImg = {
    width: "50px",
    height: "50px",
    backgroundColor: "red",
    position: "absolute",
    top: `${Math.max(0, Math.min(750, enemyPositionY))}px`, // Ensure the red square stays within the div
    left: `${Math.max(0, Math.min(1450, enemyPositionX))}px`, // Ensure the red square stays within the div
  };



////////////////////////////////////////////PLAYER THINGS
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////Player move

useEffect(() => {
  const handleKeyDown = (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'a'].includes(e.key)) {
      e.preventDefault();
      switch (e.key) {
        case "ArrowUp":
          if (!isMovingUp) {
            setPositionY((prevPositionY) => prevPositionY - playerSpeed);
            setImageToUse(imageToUse4);
            setIsMovingUp(true);
            setAttack(false);
          }
          break;
        case "ArrowDown":
          if (!isMovingDown) {
            setPositionY((prevPositionY) => prevPositionY + playerSpeed);
            setImageToUse(imageToUse1);
            setIsMovingDown(true);
            setAttack(false);
          }
          break;
        case "ArrowLeft":
          if (!isMovingLeft) {
            setPositionX((prevPositionX) => prevPositionX - playerSpeed);
            setImageToUse(imageToUse2);
            setIsMovingLeft(true);
            setAttack(false);
          }
          break;
        case "ArrowRight":
          if (!isMovingRight) {
            setPositionX((prevPositionX) => prevPositionX + playerSpeed);
            setImageToUse(imageToUse3);
            setIsMovingRight(true);
            setAttack(false);
          }
          break;
        case "a":
          setAttack(true);
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
    }, 300); // Set the enemyAttack to false after 300 milliseconds
  };

  // Start with an initial toggle
  toggleAttack();

  // Set up an interval to toggle the enemyAttack state every 3000 milliseconds (3 seconds)
  const intervalId = setInterval(toggleAttack, 3000);

  // Clean up the interval when the component unmounts
  return () => {
    clearInterval(intervalId);
  };
}, []);









/////////////////////////////////////////////////////////////////GAME HTML
//////////////////////////////////////////////////////////////

  return (

    <div>
          <>
    <button onClick={() => test()}>test</button>
    </>
        <div style={divMap}>
        <img 
            src={imageToUse}
            style={playerImg}
            alt="Your Image Description"
        />

        <img 
            src={demonimg}
            style={demonImg}
            alt="Your Image Description"
        />
        </div>
      <div style={{ position: "absolute", color: "black" }}>
        <p>{positionX}</p>
        <p>{positionY}</p>
        <h1>HP:  {playerHP}--- at 5 you are dead</h1>
        <>
        {attack?
        <p>ATTACKING</p>
        :
        <p>NOT attacking</p>}
        </>
        <p>Enemy:</p>
        <p>{enemyPositionX}</p>
        <p>{enemyPositionY}</p>
        <>
        {enemyAttack?
        <p>ENEMY ATTACKING</p>
        :
        <p>NOT attacking</p>}
        </>
      </div>
    </div>
  );
}


export default GamePage;
