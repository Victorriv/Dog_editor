import './App.css';
import DogForm from './DogForm';
import Dogs from './Dogs';
import { Route, Switch} from 'react-router-dom';
import {useEffect, useState} from "react";
import Login from "./Login"
import About from "./About"

function App() {
  const [shelter, setShelter] = useState(null)

  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((shelter) => setShelter(shelter));
      }
    });
  }, []);

  function handleLogout(){
    fetch("/logout", {method: "DELETE"}).then(r => {
      setShelter(null)
    })
  }

  if (!shelter) return <Login putShelter ={setShelter} />
  return (
    <>
    <main>
     <Switch>
          <Route exact path = "/">
            < Dogs shelter= {shelter}/>
            <button onClick={handleLogout}> Logout </button>
          </Route>

        <Route exact path="/about">
         <About/>
        </Route>

      </Switch>
    </main>
    
    </>
    
   
  );
}

export default App;

/*

<div className="App">
      <header className="App-header"> 
      <Dogs/>
      <DogForm/>
      </header>
    </div>


     <>
    <main>
     <Switch>
          <Route path = "/new">
            <DogFrom/>
          </Route>

        <Route path="/">
         <Dogs/>
        </Route>

      </Switch>
    </main>
    
    </>
*/