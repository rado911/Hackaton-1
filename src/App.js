import React, {useEffect, useState} from 'react';
import ArtContext from './context/ArtContext';
import Axios from 'axios';
import './App.css';
import EntryPage from './components/entry-page';
import Routerfunc from './components/routerfunc';


function App() {
  const [art, setArt] = useState([]);
  
useEffect(() => {
  getArt();
})

  function getArt() {
    Axios.get('https://www.rijksmuseum.nl/api/en/collection?key=mXKxHvz4&?verb=ListRecords&from=1401-01-10/1601-01-10&ps=100&toppieces=true')
      .then((res) => setArt(res.data.artObjects))
      ;
  }
  
  return (
  <ArtContext.Provider value={{art : art}}>
    <Routerfunc />
  </ArtContext.Provider>
  );
}

export default App;
