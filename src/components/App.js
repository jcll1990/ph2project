import React from "react";
import Login from "./subApp/Login.js";
import GamePage from "./subApp/GamePage.js";

import { useState} from "react";

function App() {

  function test(){
    console.log(currentUser)
    console.log(startWeb)
  }

 

  const [currentUser, setCurrentUser] = useState ()
  const [startWeb, setStartWeb] = useState (false)
  

  return (

    
      <div className="App">
        
        <h1>SPACESHIP</h1>
        <button onClick={() => test()}>test</button>
        <Login
        setCurrentUser = {setCurrentUser}
        currentUser = {currentUser}
        setStartWeb = {setStartWeb}
        />

        <GamePage
        />
   

 
      </div>
  );
}
export default App;
