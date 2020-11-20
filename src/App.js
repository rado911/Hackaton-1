import React, {useEffect, useState} from 'react';
import ArtContext from './context/ArtContext';
import Axios from 'axios';
import './App.css';
import Routerfunc from './components/routerfunc';


function App() {
  const [art, setArt] = useState([]);
  const [query, setQuery]=useState('0')
  const [cowBid, setCowBid] = useState(0);

 
  
useEffect(() => {
  getArt();
},[])

  function getArt() {
    Axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=mXKxHvz4&q=renaissance+${query}`)
      .then((res) => setArt(res.data.artObjects))
      ;
  }
  
  return (
  <ArtContext.Provider value={{art, cow : cowBid, setCow : setCowBid}}>
    <Routerfunc />
  </ArtContext.Provider>
  )
}

export default App;
