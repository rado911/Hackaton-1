import React, {useEffect, useState} from 'react';
import ArtContext from './context/ArtContext';
import Axios from 'axios';
import './App.css';
import ArtMain from './components/ArtMain';


function App() {
  const [art, setArt] = useState([]);
  
useEffect(() => {
  getArt();
})

  function getArt() {
    Axios.get('https://www.rijksmuseum.nl/api/en/collection?key=mXKxHvz4&?verb=ListRecords&from=1401-01-10/1601-01-10&ps=100')
      .then((res) => console.log(res.data.artObjects))
      ;
  }
  
  return (
  <ArtContext.Provider value={{art : art}}>
    <ArtMain/>
  </ArtContext.Provider>
  );
}

export default App;
