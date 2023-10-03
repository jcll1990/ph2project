import React from "react";
import { useHistory } from "react-router-dom";

function YouSurvivedPage({logMusic}) {
  const history = useHistory();

  function goback() {
    logMusic.play()
    history.push("/mainpage");
  }

  return (

     <div id="survived-screen">

      <button id="goback" onClick={() => goback()}> goback </button>
</div>
  );
}

export default YouSurvivedPage;