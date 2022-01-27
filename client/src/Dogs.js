import React, {useEffect, useState} from "react"
import DogCard from "./DogCard"


function Dogs() {
    const [dogs, setDogs] = useState([])

    useEffect(()=>{
        fetch("/dogs")
        .then((r) => r.json())
        .then(setDogs)
    }, [])

 /*

 {dogs.map((d)=>(
            <DogCard dog = {d}  key= {d.id} />

        ))}
*/

    return(

        <div>
        <h1> Dogs </h1>
        {dogs.map(d => <DogCard dog = {d} key ={d.id} />)}
        
        </div>
    )

}

export default Dogs