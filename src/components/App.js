import React from "react";
import Login from "./subApp/Login.js";

import MainPage from "./subApp/MainPage.js";


import { useState, useEffect} from "react";

function App() {

  const [player,setPlayer] =useState({})
  const [currentUser, setCurrentUser] = useState (1)
  const [startWeb, setStartWeb] = useState (false)

  function test(){
    console.log(currentUser)
    console.log(startWeb)
  }

  useEffect(() => {
   
    fetch(`http://localhost:3000/users/${currentUser}`)
      .then(resp => resp.json())
      .then(data => {
        setPlayer(data);	
      })            
}, []);






  

  return (

    
      <div className="App">
        
     
        <button onClick={() => test()}>test</button>
        <Login
        setCurrentUser = {setCurrentUser}
        currentUser = {currentUser}
        setStartWeb = {setStartWeb}
        />

        <MainPage
        player = {player}
        
        />


   

 
      </div>
  );
}
export default App;
