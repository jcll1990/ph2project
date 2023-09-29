import React from "react";
import { useHistory } from "react-router-dom";


function Home() {
  const history = useHistory();

  function login() {

    history.push("/login");
  }

  return (
    <div id="home">
    <h1>Demon Hunter</h1>
    
    <button id="homebutton" onClick={() => login()}> Start </button>
    </div>
  );
}

export default Home;