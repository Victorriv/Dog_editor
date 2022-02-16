import React, { useState } from "react"

//SIGNUP FORM
function SignUp({setUser}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault() 
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                username,
                password,
            }),
        }).then(r => {
            console.log(r)
            r.json().then(user => setUser(user))

        })

    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <label>  Create an Account: </label>
                <input type= "text" 
                        id = "username"
                        value = {username}
                        onChange= {e => setUsername(e.target.value) } />
                <button type= "Submit"> SignUp </button>
            </form>

        </div>

    )
}

export default SignUp