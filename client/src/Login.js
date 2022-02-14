import React, {useState} from "react"
import SignUp from "./SignUp"


// render a login form on depending on loginForm
//LOGIN FORM
function Login({setUser}){
    const [username, setUsername] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username}),
        }).then(r => {
            console.log(r)
             r.json().then(user => setUser(user));

         });

      
    }
        
    return (

        <div>
            <h4>Login to your account: </h4>
            <form onSubmit = {handleSubmit}>
                <label> Username: </label>
                    <input 
                        type= "text" 
                        id = "username"
                        value = {username}
                        onChange= {e => setUsername(e.target.value)}
                     />
                    <button type= "Submit"> Login</button>
            </form>
            <h4> Need to create an account? </h4>
            <SignUp setUser={setUser}/>
        </div>
            
    )
}

export default Login
