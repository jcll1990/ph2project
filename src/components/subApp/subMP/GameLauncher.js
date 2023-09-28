import React from "react";
import { useHistory } from "react-router-dom";

function GameLauncher({
  setLaunch,
  setSelectedLevel,
  allLevels
}) {

  const history = useHistory();



  function handleSubmit(event) {
    event.preventDefault();


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
<>

    <form onSubmit={handleSubmit}>
      <label>Select a level:</label>

      <select name="levelSelect" id="levelSelect">
        <option value="">-- Select a level --</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button type="submit">Submit</button>
    </form>

    </>
  );
}

export default GameLauncher;
