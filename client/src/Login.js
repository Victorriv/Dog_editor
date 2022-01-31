import React, {useState} from "react"
import SignUp from "./SignUp"

function Login({putShelter}){
    const [name, setName] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            
            body: JSON.stringify({name}),
        }).then(r => {
            console.log(r)
            r.json().then(shelter => putShelter(shelter))

        })

    }

    return (

        <div>
            <h4>Login to your account: </h4>
            <form onSubmit = {handleSubmit}>
                <label> Login in with Shelter Name: </label>
                    <input 
                        type= "text" 
                        id = "name"
                        value = {name}
                        onChange= {e => setName(e.target.value) }
                
                
                     />

            </form>
            <h4> Need to create an account? </h4>
            <SignUp setName={setName}/>
        </div>
            
    )
}

export default Login
