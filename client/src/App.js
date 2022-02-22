import './App.css';
//import DogForm from './DogForm';
import Dogs from './Dogs';
import { Route, Switch} from 'react-router-dom';
import {useState, useEffect } from "react";
import Login from "./Login"
import About from "./About"

function App() {
  const [user, setUser] = useState("")

  
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))}
      }
      )
    }, []);
  
  

  function handleLogout(){
    fetch("/logout", {method: "DELETE"}).then(r => {
      setUser(null)
    })
  }

  if (!user) return <Login setUser ={setUser} /> 
  return (
    <div className= "App">
    <main>
     <Switch>
            <Route exact path ="/">
            <Dogs user={user}/>
          
            <button onClick={handleLogout}> Logout </button>
           </Route>
            <Route exact path="/new"></Route>
           <Route exact path="/about">
           <About/>
           
          </Route>

      </Switch>
    </main>
    
    </div>
    
   
  );
}

export default App;

