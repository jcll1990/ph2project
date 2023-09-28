import React from "react";
import { useHistory } from "react-router-dom";

function GameLauncher({
  setLaunch,
  setSelectedLevel,
  allLevels
}) {

  const history = useHistory();

  function run () {
    setLaunch(true);
    history.push("/gamepage");
  }

  function handleSubmit(event) {
    event.preventDefault();


    const selectedLevelId = event.target.levelSelect.value;

    const selectedLevel = allLevels.find(level => level.id === selectedLevelId);


    if (selectedLevel) {
      setSelectedLevel(selectedLevel);
      setLaunch(true);
      history.push("/gamepage");
    } else {
      console.error("Selected level not found");
    }
  }

  return (
<>
<button onClick={() => run()}>START TEST5</button>
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
