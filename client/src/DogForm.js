import {useState} from "react"

function DogForm (){
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [breed, setBreed] = useState("")

    function handleSubmit (e){
        e.preventDefault()
        fetch("/dogs",{
            method: "POST",
            head: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                age,
                breed
            }),
        }).then((r)=> {

        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label> Name: </label>
                <input type= "text" id="name" value={name} onChange={e => setName(e.target.value)}/>
                <label> Age: </label>
                <input type= "text" id="age" value={age} onChange={e => setAge(e.target.value)}/>
                <label> Breed: </label>
                <input type= "text" id="breed" value={breed} onChange={e => setBreed(e.target.value)}/>
                <input type= "submit"/>


            </form>

        </div>

    )
}

export default DogForm