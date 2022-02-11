import './App.css';
import Card from './components/Card';
import { useState, useEffect } from 'react';

const App = () => {

  const [personajes, setPersonajes] = useState([]);

  useEffect(()=> {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res)=> res.json())
      .then((data)=> {
        setPersonajes(data.results)
      })
  }, []);





  return (
    <div className="container">
      {console.log(personajes)}
      {personajes.map((personaje) => 
        
        <Card 
        img={personaje.image}
        name={personaje.name}
        status={personaje.status}/>
      
      
      )}
      

    </div>
  )
}

export default App;
