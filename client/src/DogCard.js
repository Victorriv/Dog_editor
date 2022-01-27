function DogCard({dog}) {

    return (
        <div>
            {/*<h1> Dog Card </h1>*/}
            <p> Name: {dog.name} </p>
            <p> Age: {dog.age} </p>
            <p> Breed: {dog.breed} </p>
        </div>

    )

}


export default DogCard