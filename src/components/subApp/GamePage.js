import React, { useEffect, useState, } from "react";
import "../../css/GamePage.css";

import champ2attackl from "../../images/champ/champ2attackl.gif"
import champ2attackr from "../../images/champ/champ2attackr.gif"
import champ2runr from "../../images/champ/champ2runr.gif"
import champ2runl from "../../images/champ/champ2runl.gif"

import demon1run from "../../images/demon1/demon1run.gif"
import demon1attack from "../../images/demon1/demon1attack.gif"

import { useHistory } from "react-router-dom";


function GamePage({
  player,
  setPlayer,
  setLaunch,
  selectedlevel,
  logMusic,
  batMusic 
  }) {

const history = useHistory();

const [playerHP, setPlayerHP] = useState(player.hp)
let playerSpeed = player.speed
let playerDMG = player.dmg

  
const [hit, setHit] = useState(false)
const [price, setPrice] = useState(selectedlevel.price)
const [flag, setFlag] = useState(true)

const [hit2, setHit2] = useState(false)
const [hit3, setHit3] = useState(false)
const [hit4, setHit4] = useState(false)
const [hit5, setHit5] = useState(false)

const [imageToUse, setImageToUse] = useState(champ2runr)

const [attack, setAttack] = useState(false)
const [positionX, setPositionX] = useState(650);
const [positionY, setPositionY] = useState(250);
const [isMovingUp, setIsMovingUp] = useState(false);
const [isMovingDown, setIsMovingDown] = useState(false);
const [isMovingLeft, setIsMovingLeft] = useState(false);
const [isMovingRight, setIsMovingRight] = useState(false);



///////////ENEMY VARIABLES

const [trigger, setTrigger] = useState(false);



const [enemySpeed, setEnemySpeed] = useState(selectedlevel.es)
const [enemyHP, setEnemyHP] = useState(selectedlevel.ehp)
const [enemy1, setEnemy1] = useState(selectedlevel.e1)

const [enemyDMG, setEnemyDMG] = useState(selectedlevel.ed)
const [enemyAttack, setEnemyAttack] = useState(false)
const [enemyPositionX, setEnemyPositionX] = useState(100); 
const [enemyPositionY, setEnemyPositionY] = useState(50); 



const [enemySpeed2, setEnemySpeed2] = useState(selectedlevel.es)
const [enemyHP2, setEnemyHP2] = useState(selectedlevel.ehp)
const [enemy2, setEnemy2] = useState(selectedlevel.e2)

const [enemyDMG2, setEnemyDMG2] = useState(selectedlevel.ed)
const [enemyAttack2, setEnemyAttack2] = useState(false)
const [enemyPositionX2, setEnemyPositionX2] = useState(1100); 
const [enemyPositionY2, setEnemyPositionY2] = useState(50); 


const [enemySpeed3, setEnemySpeed3] = useState(selectedlevel.es)
const [enemyHP3, setEnemyHP3] = useState(selectedlevel.ehp)
const [enemy3, setEnemy3] = useState(selectedlevel.e3)

const [enemyDMG3, setEnemyDMG3] = useState(selectedlevel.ed)
const [enemyAttack3, setEnemyAttack3] = useState(false)
const [enemyPositionX3, setEnemyPositionX3] = useState(0); 
const [enemyPositionY3, setEnemyPositionY3] = useState(400); 



const [enemySpeed4, setEnemySpeed4] = useState(selectedlevel.es)
const [enemyHP4, setEnemyHP4] = useState(selectedlevel.ehp)
const [enemy4, setEnemy4] = useState(selectedlevel.e4)


const [enemyDMG4, setEnemyDMG4] = useState(selectedlevel.ed)
const [enemyAttack4, setEnemyAttack4] = useState(false)
const [enemyPositionX4, setEnemyPositionX4] = useState(1300); 
const [enemyPositionY4, setEnemyPositionY4] = useState(300); 


const [enemySpeed5, setEnemySpeed5] = useState(selectedlevel.es)
const [enemyHP5, setEnemyHP5] = useState(selectedlevel.ehp)
const [enemy5, setEnemy5] = useState(selectedlevel.e5)

const [enemyDMG5, setEnemyDMG5] = useState(selectedlevel.ed)
const [enemyAttack5, setEnemyAttack5] = useState(false)
const [enemyPositionX5, setEnemyPositionX5] = useState(500); 
const [enemyPositionY5, setEnemyPositionY5] = useState(300); 




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
    const demonImg2 = {
    width: "200px",
    height: "200px",
    position: "absolute",
    top: `${Math.max(0, Math.min(750, enemyPositionY2))}px`, // Ensure the red square stays within the div
    left: `${Math.max(0, Math.min(1450, enemyPositionX2))}px`, // Ensure the red square stays within the div
  };

  const demonImg3 = {
    width: "200px",
    height: "200px",
    position: "absolute",
    top: `${Math.max(0, Math.min(750, enemyPositionY3))}px`, // Ensure the red square stays within the div
    left: `${Math.max(0, Math.min(1450, enemyPositionX3))}px`, // Ensure the red square stays within the div
  };

  const demonImg4 = {
    width: "200px",
    height: "200px",
    position: "absolute",
    top: `${Math.max(0, Math.min(750, enemyPositionY4))}px`, // Ensure the red square stays within the div
    left: `${Math.max(0, Math.min(1450, enemyPositionX4))}px`, // Ensure the red square stays within the div
  };

  const demonImg5 = {
    width: "200px",
    height: "200px",
    position: "absolute",
    top: `${Math.max(0, Math.min(750, enemyPositionY5))}px`, // Ensure the red square stays within the div
    left: `${Math.max(0, Math.min(1450, enemyPositionX5))}px`, // Ensure the red square stays within the div
  };

  

  function endgame() {


    
    batMusic.pause()
    
    if (flag && !enemy1 && !enemy2 && !enemy3 && !enemy4 && !enemy5) {
   
      let userupdate = {
        money : (player.money + price)
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
              setFlag(false)
              goback ()
             
          });
      })
   
    } else if 
      (playerHP <= 0) {
        setLaunch(false)
        history.push("/youdied");
        
    }
    
}

function goback () {
  setLaunch(false)
  history.push("/yousurvived");
  
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

  function moveEnemy1() {
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
    const interval = setInterval(moveEnemy1, 100); 
  
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
}, [attack]);


////////////////////////////////////// HIT

useEffect(() => {
  if (((enemyPositionX - 40) <= positionX) && (positionX <= (enemyPositionX + 40)) && ((enemyPositionY - 40) <= positionY) && (positionY <= (enemyPositionY + 40))) {
    setHit(true);
  } else {
    setHit(false);
  }
}, [positionX, positionY, enemyPositionX, enemyPositionY, attack, enemyAttack]);

useEffect(() => {
  if (enemyAttack && hit && enemy1) {
    setPlayerHP((prevPlayerHP) => prevPlayerHP - enemyDMG)
    if (playerHP <=0) {
      endgame()
    }

  }

}, [enemyAttack]);

useEffect(() => {
  if (attack && hit) {
    setEnemyHP((prevEnemyHP) => prevEnemyHP - playerDMG);
    if (enemyHP <= 1) {
      setEnemy1(false)
      setEnemyDMG(0)
      endgame()
    }

  }
}, [attack]);



////////ENEMY 2

function moveEnemy2() {
  let dx2 = 0
  let dy2 = 0

  if (positionX > enemyPositionX2) {
    dx2 = 1} else if (positionX < enemyPositionX2) {
    dx2 = -1} else {dx2 = 0}

  if (positionY > enemyPositionY2) {
    dy2 = 1} else if (positionY < enemyPositionY2) {
    dy2 = -1} else {dy2 = 0}

  setEnemyPositionX2((prevPositionX2) => prevPositionX2 + dx2 * enemySpeed2);
  setEnemyPositionY2((prevPositionY2) => prevPositionY2 + dy2 * enemySpeed2);
}

useEffect(() => {
  const interval = setInterval(moveEnemy2, 100); 

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
  setEnemyAttack2(true);
  setTimeout(() => {
    setEnemyAttack2(false);
  }, 500); 
};
toggleAttack();

const intervalId = setInterval(toggleAttack, 2000);
return () => {
  clearInterval(intervalId);
};
}, [attack]);


////////////////////////////////////// HIT

useEffect(() => {
if (((enemyPositionX2 - 40) <= positionX) && (positionX <= (enemyPositionX2 + 40)) && ((enemyPositionY2 - 40) <= positionY) && (positionY <= (enemyPositionY2 + 40))) {
  setHit2(true);
} else {
  setHit2(false);
}
}, [positionX, positionY, enemyPositionX2, enemyPositionY2, attack, enemyAttack2]);

useEffect(() => {
if (enemyAttack2 && hit2 && enemy2) {
  setPlayerHP((prevPlayerHP) => prevPlayerHP - enemyDMG2)
  if (playerHP <=0) {
    endgame()
  }

}

}, [enemyAttack2]);

useEffect(() => {
if (attack && hit2) {
  setEnemyHP2((prevEnemyHP2) => prevEnemyHP2 - playerDMG);
  if (enemyHP2 <= 1) {
    setEnemy2(false)
    setEnemyDMG2(0)
    endgame()
  }

}
}, [attack]);


////////////////ENEMY 3

function moveEnemy3() {
  let dx3 = 0
  let dy3 = 0

  if (positionX > enemyPositionX3) {
    dx3 = 1} else if (positionX < enemyPositionX3) {
    dx3 = -1} else {dx3 = 0}

  if (positionY > enemyPositionY3) {
    dy3 = 1} else if (positionY < enemyPositionY3) {
    dy3 = -1} else {dy3 = 0}

  setEnemyPositionX3((prevPositionX3) => prevPositionX3 + dx3 * enemySpeed3);
  setEnemyPositionY3((prevPositionY3) => prevPositionY3 + dy3 * enemySpeed3);
}

useEffect(() => {
  const interval = setInterval(moveEnemy3, 100); 

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
  setEnemyAttack3(true);
  setTimeout(() => {
    setEnemyAttack3(false);
  }, 500); 
};
toggleAttack();

const intervalId = setInterval(toggleAttack, 2000);
return () => {
  clearInterval(intervalId);
};
}, [attack]);


////////////////////////////////////// HIT

useEffect(() => {
if (((enemyPositionX3 - 40) <= positionX) && (positionX <= (enemyPositionX3 + 40)) && ((enemyPositionY3 - 40) <= positionY) && (positionY <= (enemyPositionY3 + 40))) {
  setHit3(true);
} else {
  setHit3(false);
}
}, [positionX, positionY, enemyPositionX3, enemyPositionY3, attack, enemyAttack3]);

useEffect(() => {
if (enemyAttack3 && hit3 && enemy3) {
  setPlayerHP((prevPlayerHP) => prevPlayerHP - enemyDMG3)
  if (playerHP <=0) {
    endgame()
  }

}

}, [enemyAttack3]);

useEffect(() => {
if (attack && hit3) {
  setEnemyHP3((prevEnemyHP3) => prevEnemyHP3 - playerDMG);
  if (enemyHP3 <= 1) {
    setEnemy3(false)
    setEnemyDMG3(0)
    endgame()
  }

}
}, [attack]);

////// Enemy 4

function moveEnemy4() {
  let dx4 = 0
  let dy4 = 0

  if (positionX > enemyPositionX4) {
    dx4 = 1} else if (positionX < enemyPositionX4) {
    dx4 = -1} else {dx4 = 0}

  if (positionY > enemyPositionY4) {
    dy4 = 1} else if (positionY < enemyPositionY4) {
    dy4 = -1} else {dy4 = 0}

  setEnemyPositionX4((prevPositionX4) => prevPositionX4 + dx4 * enemySpeed4);
  setEnemyPositionY4((prevPositionY4) => prevPositionY4 + dy4 * enemySpeed4);
}

useEffect(() => {
  const interval = setInterval(moveEnemy4, 100); 

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
  setEnemyAttack4(true);
  setTimeout(() => {
    setEnemyAttack4(false);
  }, 500); 
};
toggleAttack();

const intervalId = setInterval(toggleAttack, 2000);
return () => {
  clearInterval(intervalId);
};
}, [attack]);


////////////////////////////////////// HIT

useEffect(() => {
if (((enemyPositionX4 - 40) <= positionX) && (positionX <= (enemyPositionX4 + 40)) && ((enemyPositionY4 - 40) <= positionY) && (positionY <= (enemyPositionY4 + 40))) {
  setHit4(true);
} else {
  setHit4(false);
}
}, [positionX, positionY, enemyPositionX4, enemyPositionY4, attack, enemyAttack4]);

useEffect(() => {
if (enemyAttack4 && hit4 && enemy4) {
  setPlayerHP((prevPlayerHP) => prevPlayerHP - enemyDMG4)
  if (playerHP <=0) {
    endgame()
  }

}

}, [enemyAttack4]);

useEffect(() => {
if (attack && hit4) {
  setEnemyHP4((prevEnemyHP4) => prevEnemyHP4 - playerDMG);
  if (enemyHP4 <= 1) {
    setEnemy4(false)
    setEnemyDMG4(0)
    endgame()
  }

}
}, [attack]);



//////Enamy 5


function moveEnemy5() {
  let dx5 = 0
  let dy5 = 0

  if (positionX > enemyPositionX5) {
    dx5 = 1} else if (positionX < enemyPositionX5) {
    dx5 = -1} else {dx5 = 0}

  if (positionY > enemyPositionY5) {
    dy5 = 1} else if (positionY < enemyPositionY5) {
    dy5 = -1} else {dy5 = 0}

  setEnemyPositionX5((prevPositionX5) => prevPositionX5 + dx5 * enemySpeed5);
  setEnemyPositionY5((prevPositionY5) => prevPositionY5 + dy5 * enemySpeed5);
}

useEffect(() => {
  const interval = setInterval(moveEnemy5, 100); 

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
  setEnemyAttack5(true);
  setTimeout(() => {
    setEnemyAttack5(false);
  }, 500); 
};
toggleAttack();

const intervalId = setInterval(toggleAttack, 2000);
return () => {
  clearInterval(intervalId);
};
}, [attack]);


////////////////////////////////////// HIT

useEffect(() => {
if (((enemyPositionX5 - 40) <= positionX) && (positionX <= (enemyPositionX5 + 40)) && ((enemyPositionY5 - 40) <= positionY) && (positionY <= (enemyPositionY5 + 40))) {
  setHit5(true);
} else {
  setHit5(false);
}
}, [positionX, positionY, enemyPositionX5, enemyPositionY5, attack, enemyAttack5]);

useEffect(() => {
if (enemyAttack5 && hit5 && enemy5) {
  setPlayerHP((prevPlayerHP) => prevPlayerHP - enemyDMG5)
  if (playerHP <=0) {
    endgame()
  }

}

}, [enemyAttack5]);

useEffect(() => {
if (attack && hit5) {
  setEnemyHP5((prevEnemyHP5) => prevEnemyHP5 - playerDMG);
  if (enemyHP5 <= 1) {
    setEnemy5(false)
    setEnemyDMG5(0)
    endgame()
  }

}
}, [attack]);

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

        <>
        {enemy1? (
        <img 
            src={enemyAttack === true ? demon1attack : demon1run}
            style={demonImg}
            alt="Your Image Description"
        />
        ):(
        <></>
        )}
        </>


        <>
        {enemy2? (
        <img 
            src={enemyAttack2 === true ? demon1attack : demon1run}
            style={demonImg2}
            alt="Your Image Description"
        />
        ):(
        <></>
        )}
        </>

        <>
        {enemy3? (
        <img 
            src={enemyAttack3 === true ? demon1attack : demon1run}
            style={demonImg3}
            alt="Your Image Description"
        />
        ):(
        <></>
        )}
        </>

        <>
        {enemy4? (
        <img 
            src={enemyAttack4 === true ? demon1attack : demon1run}
            style={demonImg4}
            alt="Your Image Description"
        />
        ):(
        <></>
        )}
        </>

        <>
        {enemy5? (
        <img 
            src={enemyAttack5 === true ? demon1attack : demon1run}
            style={demonImg5}
            alt="Your Image Description"
        />
        ):(
        <></>
        )}
        </>
        </div>


      <div id="allhp" style={{ position: "absolute"}}>

    

      <h1>PLAYER HP: {playerHP}</h1>

      {enemy1? (
        <h2>DEMON HP: {enemyHP}</h2>
        ):(
        <></>
        )}

      {enemy2? (
        <h2>DEMON2 HP: {enemyHP2}</h2>
        ):(
        <></>
        )}

      {enemy3? (
        <h2>DEMON3 HP: {enemyHP3}</h2>
        ):(
        <></>
        )}

      {enemy4? (
        <h2>DEMON4 HP: {enemyHP4}</h2>
        ):(
        <></>
        )}

      {enemy5? (
        <h2>DEMON5 HP: {enemyHP5}</h2>
        ):(
        <></>
        )}


  
      </div>
    </div>
  );
}


export default GamePage;
