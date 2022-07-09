import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
//import axios from 'axios'

function App() {
  const [getMessage, setGetMessage] = useState({message: "not recieved"})

  useEffect(()=>{
    // axios.get('https://react-flask-tutorial.herokuapp.com/flask/hello').then(response => {
    //   console.log("SUCCESS", response)
    //   setGetMessage(response)
    // }).catch(error => {
    //   console.log(error)
    // })
    const fetchData = async () => {
      const fetchData = await fetch('http://localhost:5000/HelloWorld')
      console.log('fetchdata:', fetchData)
      const jsonData = await fetchData.json()
      console.log('jsonData:', jsonData)
      setGetMessage(jsonData)
    }
    fetchData()
    .catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React + Flask Tutorial</p>
        <p>{getMessage.message}</p>
      </header>
    </div>
  );
}

export default App;
