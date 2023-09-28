import React from "react";
import { useHistory } from "react-router-dom";
import youDiedImage from "./images/extra/youdiedgiphy.gif"

function YouDiedPage() {

// const diedImage = youDiedImage
  const history = useHistory();

  function goback() {

    history.push("/mainpage");
  }

  return (
    <div className="died-screen">
    <img src={youDiedImage} alt="You Died" />
<br></br><br></br>
<button onClick={() => goback()}> goback </button>

    </div>
  );
}

export default YouDiedPage;