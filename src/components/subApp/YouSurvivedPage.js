import React from "react";
import { useHistory } from "react-router-dom";

function YouSurvivedPage() {
  const history = useHistory();

  function goback() {

    history.push("/mainpage");
  }

  return (

     <div id="survived-screen">

      <button id="goback" onClick={() => goback()}> goback </button>
</div>
  );
}

export default YouSurvivedPage;