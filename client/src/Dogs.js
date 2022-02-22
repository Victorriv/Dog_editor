import React, {useEffect, useState} from "react"
import {Link} from 'react-router-dom';
import DogCard from "./DogCard"
import DogForm from "./DogForm"


function Dogs({user}) {
    const [dogs, setDogs] = useState([])
    
  

    function removeDog(dog){
        setDogs((dogs)=> dogs.filter(t => t.id !== dog.id))
    }

    function addDog(dog){ 
        setDogs([...dogs, dog])
    }

    function editDog(dog){
        const edited = dogs.map(t =>{
            if (dog.id === t.id) {
                return dog
            }
            return t
        })
        setDogs(edited)
    }

   

    useEffect(() => {
        fetch(`/dogs`)
        .then((r) => r.json())
        .then(setDogs)    
        }, [] )
    

   

     return (
        
        <div>
            <h1>Dogs List</h1>
            <Link to={`/about`}><h4>About</h4></Link>
            {dogs.map(t => <DogCard user={user} editDog={editDog} key={t.id} dog={t} removeDog={removeDog} />)}
            <DogForm user={user} addDog={addDog} />
            
            

        </div>
        
        );

}


export default Dogs


