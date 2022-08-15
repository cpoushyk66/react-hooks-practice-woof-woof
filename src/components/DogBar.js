import React from "react";
import Dog from "./Dog";

function DogBar({dogs, onClickDog}) {

    const dogList = dogs.map(dog => {
        return <Dog dog={dog} key={dog.id} onClickDog={onClickDog}/>
    })

    return (
        <div>{dogList}</div>
    )
}

export default DogBar