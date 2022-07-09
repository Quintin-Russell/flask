import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState({message: 'not recieved'})

  useEffect(()=>{
    // const fetchData = async () => {
    //   const apiData = await fetch('/hi')
    //   const parsedData = await apiData.json()
    //   setGreeting(parsedData)
    // }
    // fetchData()
    //   .catch(err => console.log(err))
    fetch('http://localhost:5000/hi')
      .then(res => res.json())
      .then(data => setGreeting(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Message: {greeting.message}
        </p>
      </header>
    </div>
  );
}

export default App;
