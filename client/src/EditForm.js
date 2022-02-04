import {useState} from "react"

function EditForm({dog, user, editDog, handleEditButtonClick}){
    const [name, setName] = useState(dog.name)
    const [age, setAge] = useState(dog.age)
    const [breed, setBreed] = useState(dog.breed)

    function handleSubmit(e){
        e.preventDefault()
        setName("")
        setAge(0)
        setBreed("")
        
        fetch(`/dogs/${dog.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                age,
                breed,
                user_id: user.id
            }),
        })
          .then(r => r.json())
          .then(t => {
              editDog(t)
              handleEditButtonClick()
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit</h2>
            <label> Name </label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
            <label>Age </label> 
            <input type="number" id="age" value={age} onChange={e => setAge(e.target.value)}/>
            <label>Breed </label>
            <input type="text" id="breed" value={breed} onChange={e => setBreed(e.target.value)}/>
            <input type="submit"/>
        </form>
    )
}

export default EditForm