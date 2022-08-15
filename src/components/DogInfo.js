import React from "react";

function DogInfo({dog, onClickGood}) {

    function handleToggleGood() {
        const newDog = {
            id: dog.id,
            name: dog.name,
            isGoodDog: !dog.isGoodDog,
            image: dog.image
        }

        onClickGood(newDog);
    }
    return (
        <div>
            <img src={dog.image} alt={dog.name} />
            <h2>{dog.name}</h2>
            <button onClick={handleToggleGood}>{dog.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
        </div>
    )
}

export default DogInfo