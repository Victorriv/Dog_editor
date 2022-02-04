import React, {useState} from "react"
import EditForm from "./EditForm"

function DogCard({dog, removeDog, user, editDog}) {
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
            
            <p> Name: {dog.name} </p>
            <p> Age: {dog.age} </p>
            <p> Breed: {dog.breed} </p>

            <button onClick={e => handleDelete(dog)} > Delete </button>

            <button onClick={e => handleEditButtonClick()}>{editButton}</button>
            
            {editForm ? <EditForm handleEditButtonClick={handleEditButtonClick} editDog={editDog} dog={dog} user={user}/> : null}
        </div>

    )

}


export default DogCard