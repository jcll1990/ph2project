import React from "react";
import { useHistory } from "react-router-dom";




function GameLauncher({
  setLaunch,
  setSelectedLevel,
  allLevels,
  logMusic,
  batMusic
}) {

  const history = useHistory();



  function handleSubmit(event) {
    event.preventDefault();

    console.log(logMusic)
    logMusic.pause()
    batMusic.play()
    
    const thelvlnumb = event.target.levelSelect.value;

    const thelvl = allLevels.find(level => level.id == thelvlnumb);
    console.log(allLevels)
    console.log(thelvlnumb)
    console.log(thelvl)
    if (thelvl) {
      setSelectedLevel(thelvl);
      setLaunch(true);

    

      history.push("/gamepage");
    } else {
      console.error("Selected level not found");
    }
  }

  return (
  
    <div id="launcher">

      <form onSubmit={handleSubmit}>
        <label id="launchertext" className="launchParts">Kill the demons:</label>

        <select className="launchParts"  name="levelSelect" id="levelSelect">
          <option value="">-- Select a level --</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button className="launchParts"  id="launchbutton" type="submit">DO NOT DIE</button>
      </form>

    </div>
  );
}

export default GameLauncher;
