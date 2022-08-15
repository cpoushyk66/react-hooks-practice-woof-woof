import React from "react";

function Dog({dog, onClickDog}) {

    function onClickedDog() {
        onClickDog(dog);
    }
    return (
        <span onClick={onClickedDog}>{dog.name}</span>
    )
}

export default Dog