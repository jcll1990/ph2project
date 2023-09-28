import React from "react";
import { useHistory } from "react-router-dom";
import youSurvived from "./images/extra/WINSCREEN.png"

function YouSurvivedPage() {
  const history = useHistory();

  function goback() {

    history.push("/mainpage");
  }

  return (

     <div className="died-screen">
    <img src={youSurvived} alt="You survived" />
<br></br><br></br>
      <button onClick={() => goback()}> goback </button>
</div>
  );
}

export default YouSurvivedPage;