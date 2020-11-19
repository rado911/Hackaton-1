import React, {useEffect, useState} from 'react';
import ArtContext from './context/ArtContext';
import Axios from 'axios';
import './App.css';
<<<<<<< HEAD
import Routerfunc from './components/routerfunc';
=======
import ArtMain from './components/ArtMain';
>>>>>>> dcf4858028cfc9821e9dd7c96672c3f305b03709


function App() {
  const [art, setArt] = useState([]);
  const [query, setQuery]=useState('0')

  
useEffect(() => {
  getArt();
}, [])

  function getArt() {
<<<<<<< HEAD
    Axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=mXKxHvz4&q=renaissance+${query}`)
=======
    Axios.get('https://www.rijksmuseum.nl/api/en/collection?key=mXKxHvz4&?verb=ListRecords&from=1401-01-10/1601-01-10&ps=100')
>>>>>>> dcf4858028cfc9821e9dd7c96672c3f305b03709
      .then((res) => setArt(res.data.artObjects))
      ;
  }
  
  return (
<<<<<<< HEAD
  <ArtContext.Provider value={{art}}>
    <Routerfunc />
  </ArtContext.Provider>
=======
  <ArtContext.Provider value={{art : art}}>
    <ArtMain/>
    {/* <MainComponent /> */}
  </ArtContext.Provider>
     
  
>>>>>>> dcf4858028cfc9821e9dd7c96672c3f305b03709
  );
}

export default App;
