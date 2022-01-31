import React, {useState} from "react"

function SignUp({putShelter}){
    const [shelter, setShelter] = useState("")

    function handleSubmit(e){
        e.preventDefault() // 33:00
        fetch("/shelter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({shelter}),
        }).then(r => {
            console.log(r)
            r.json().then(shelter => putShelter(shelter))

        })

    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <label>  Create an Account: </label>
                <input type= "text" 
                        id = "shelter"
                        value = {shelter}
                        onChange= {e => setShelter(e.target.value) }
                
                
                />

            </form>

        </div>

    )
}

export default SignUp