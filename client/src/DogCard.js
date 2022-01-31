import React, {useState} from "react"
import EditForm from "./EditForm"

function DogCard({dog, removeDog, shelter, editDog}) {
    const [editForm, setEditForm] = useState(false)
    const [editButton, setEditButton] = useState("Show Edit Form")

    function handleDelete(dog){
        fetch(`/dogs/${dog.id}`, {method: "DELETE"}).then(r => {
            removeDog(dog)
            
          })
    }

    function handleEditButtonClick(){
        setEditForm(!editForm)
        !editForm ? setEditButton("Hide Edit Form") : setEditButton("Show Edit Form")
    }


    return (
        <div>
            {/*<h1> Dog Card </h1>*/}
            <p> Name: {dog.name} </p>
            <p> Age: {dog.age} </p>
            <p> Breed: {dog.breed} </p>
            <button onClick={e => handleDelete (dog)} > Delete </button>
            <button onClick={e => handleEditButtonClick()}>{editButton}</button>
            {editForm ? <EditForm handleEditButtonClick={handleEditButtonClick} editDog={editDog} dog={dog} shelter={shelter}/> : null}
        </div>

    )

}


export default DogCard