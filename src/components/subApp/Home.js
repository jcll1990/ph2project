import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  function login() {

    history.push("/login");
  }

  return (
    <>
      <button onClick={() => login()}> Start </button>
    </>
  );
}

export default Home;