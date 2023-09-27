import React from "react";
import { useHistory } from "react-router-dom";

function GameLauncher({setLaunch,launch}) {

    const history = useHistory();


function startgame() {
    setLaunch(true)
    history.push("/gamepage");
}

    
    return (
<>

<button onClick={() => startgame()}> Run game! </button>

</>
    )

}
export default GameLauncher;