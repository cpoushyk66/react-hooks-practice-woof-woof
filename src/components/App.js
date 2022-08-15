import React, { useEffect, useState } from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo"

function App() {

  const [dogData, setDogData] = useState([]);
  const [currentDog, setCurrentDog] = useState({});
  const [filterDog, setFilterDog] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then(res => res.json())
    .then(dogs => {
      setDogData(dogs)
      setCurrentDog(dogs[0])
    })
  }, []);

  function handleClickFilter() {
    setFilterDog(!filterDog);
  }

  function handleUpdateDogs(dog) {
    let dogs = [...dogData];

    dogs[dog.id - 1].isGoodDog = dog.isGoodDog;

    const configObj = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dog)
    }


    fetch(`http://localhost:3001/pups/${dog.id}`)
    .then(res => res.json())
    .then(console.log)

    setDogData(dogs);
  }

  function handleSetDogInfo(dog) {
    setCurrentDog(dog)
  }


  function refineDogs() {

    let lessDogs = [...dogData];

    if (filterDog)
    {
      lessDogs = lessDogs.filter(dog => dog.isGoodDog)
    }

    return lessDogs;
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button onClick={handleClickFilter} id="good-dog-filter">Filter good dogs: {filterDog ? "ON" : "OFF"}</button>
      </div>
      <div id="dog-bar">
        <DogBar dogs={refineDogs(dogData)} onClickDog={handleSetDogInfo}/>
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogInfo dog={currentDog} onClickGood={handleUpdateDogs}/>
        </div>
      </div>
    </div>
  );
}

export default App;
