import React, { useEffect, useState } from "react";
import "../../css/GamePage.css";
import imageToUse1 from "./img1.jpg"
import imageToUse2 from "./img2.jpg"
import imageToUse3 from "./img3.jpg"
import imageToUse4 from "./img4.jpg"
import demonimg from "./demon.jpg"

function GamePage() {
  const [position, setPosition] = useState({ x: 100, y: 100 }); // Initial position for the blue square
  const [enemyPosition, setEnemyPosition] = useState({ x: 300, y: 300 }); // Initial position for the red square
  const [attack, setAttack] = useState(false)
  const [imageToUse, setImageToUse] = useState(imageToUse1)
  const [hp, setHP] = useState(1)

  const divStyle = {
    width: "800px",
    height: "800px",
    position: "relative", // Set the parent div to relative positioning
    border: "1px solid black", // Optional: Add a border for visualization
  };
  const movableElementStyle = {
    width: "50px",
    height: "50px",
    position: "absolute",
    top: `${Math.max(0, Math.min(750, position.y))}px`,
    left: `${Math.max(0, Math.min(750, position.x))}px`,
  };
  const enemyStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: "red",
    position: "absolute",
    top: `${Math.max(0, Math.min(750, enemyPosition.y))}px`, // Ensure the red square stays within the div
    left: `${Math.max(0, Math.min(750, enemyPosition.x))}px`, // Ensure the red square stays within the div
  };



  // Function to move the enemy randomly within a 10px radius
  const moveEnemy = () => {
  
    const currentX = enemyPosition.x;
    const currentY = enemyPosition.y;

    // Generate random values of -5, 0, or 5 for both x and y directions
    const moveX = [-10,0,0,+10][Math.floor(Math.random() * 4)];
    const moveY = [-10,0,0,+10][Math.floor(Math.random() * 4)];

    // Calculate new coordinates
    const newX = currentX + moveX;
    const newY = currentY + moveY;



      setEnemyPosition({ x: newX, y: newY });

    }
  


  useEffect(() => {
    // Attach event listeners to handle arrow key presses for the blue square
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y - 10 }));
          setImageToUse(imageToUse4)
          break;
        case "ArrowDown":
          setPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y + 10 }));
          setImageToUse(imageToUse1)
          break;
        case "ArrowLeft":
          setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x - 10 }));
          setImageToUse(imageToUse2)
          break;
        case "ArrowRight":
          setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x + 10 }));
          setImageToUse(imageToUse3)
          break;            
        default:
          break;
      }

    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

  }, []);

  useEffect(() => {
    // Function to handle "A" key press
    const handleAKeyDown = () => {
      setAttack(true);

    };
  
    // Function to handle "A" key release
    const handleAKeyUp = () => {
      setAttack(false);
    };
  
    // Add event listener for "A" keydown
    window.addEventListener("keydown", (e) => {
      if (e.key === "a") {
        handleAKeyDown();
      }
    });
  
    // Add event listener for "A" keyup
    window.addEventListener("keyup", (e) => {
      if (e.key === "a") {
        handleAKeyUp();
      }
    });
  
  }, []);



  useEffect(() => {
    // Move the enemy randomly every 500ms (2x times faster)
    const interval = setInterval(moveEnemy, 500); // Reduced the interval duration

  }, []);

  useEffect(()=>{
  if (position.x === enemyPosition.x 
    && 
    position.y === enemyPosition.y) {
    setHP(prev => prev + 1)
  }
  }, [position, enemyPosition ])

  useEffect(()=>{
    if (hp >=5){
        alert("you lose!!!!!")
    }
    }, [hp])

  return (
    <div>
        <div style={divStyle}>
        <img 
            src={imageToUse}
            style={movableElementStyle}
            alt="Your Image Description"
        />

        <img 
            src={demonimg}
            style={enemyStyle}
            alt="Your Image Description"
        />
        </div>
      <div style={{ position: "absolute", color: "black" }}>
        <p>{position.x}</p>
        <p>{position.y}</p>
        <h1>HP:  {hp}--- at 5 you are dead</h1>
        <>
        {attack?
        <p>ATTACKING</p>
        :
        <p>NOT attacking</p>}
        </>
        <p>Enemy:</p>
        <p>{enemyPosition.x}</p>
        <p>{enemyPosition.y}</p>
      </div>
    </div>
  );
}


export default GamePage;
