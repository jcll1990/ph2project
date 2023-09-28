import React from "react";
import { useHistory } from "react-router-dom";

function YouDiedPage() {
  const history = useHistory();

  function goback() {

    history.push("/mainpage");
  }

  return (
    <>
      <button onClick={() => goback()}> goback </button>
    </>
  );
}

export default YouDiedPage;