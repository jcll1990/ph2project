import React from "react";
import { useHistory } from "react-router-dom";


function YouDiedPage({logMusic}) {

// const diedImage = youDiedImage
  const history = useHistory();

  function goback() {
    logMusic.play()
    history.push("/mainpage");
  }

  return (
    <div id="died-screen">
    <br></br><br></br>
    <button id="goback" onClick={() => goback()}> go back </button>
    </div>
  );
}

export default YouDiedPage;