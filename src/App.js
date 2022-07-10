import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState({message: []})

  useEffect(()=>{
    // const fetchData = async () => {
    //   const apiData = await fetch('/hi')
    //   const parsedData = await apiData.json()
    //   setGreeting(parsedData)
    // }
    // fetchData()
    //   .catch(err => console.log(err))s
    // const options = {
    // //   // headers: new Headers({'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Credentials" : true }),
    // // //   method: "GET",
    //   // 'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin': '*',
    // //   "Access-Control-Allow-Credentials" : true,
    //   mode: 'no-cors'
    // }
    fetch('http://localhost:5000/hi/')
      .then(res => res.json())
      .then(data => {
        setGreeting(data)
        console.log('greeting:', greeting)})
      .catch(err => console.log('ERR:', err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {greeting && greeting.message["poodle"].map(x => <p>{x}</p>)}
        </p>
      </header>
    </div>
  );
}

export default App;
