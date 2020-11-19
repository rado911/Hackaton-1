import React, {useEffect, useState} from 'react';
import ArtContext from './context/ArtContext';
import Axios from 'axios';
import './App.css';
<<<<<<< HEAD
import Routerfunc from './components/routerfunc';
<<<<<<< HEAD
=======
import ArtMain from './components/ArtMain';
>>>>>>> dcf4858028cfc9821e9dd7c96672c3f305b03709
=======
import ArtMain from './components/ArtMain'
>>>>>>> a37b83bdbb6e59fc72d318c5825c795b11913922


function App() {
  const [art, setArt] = useState([]);
  const [query, setQuery]=useState('0')

  
useEffect(() => {
  getArt();
}, [])

  function getArt() {
<<<<<<< HEAD
<<<<<<< HEAD
    Axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=mXKxHvz4&q=renaissance+${query}`)
=======
    Axios.get('https://www.rijksmuseum.nl/api/en/collection?key=mXKxHvz4&?verb=ListRecords&from=1401-01-10/1601-01-10&ps=100')
>>>>>>> dcf4858028cfc9821e9dd7c96672c3f305b03709
=======
    Axios.get('https://www.rijksmuseum.nl/api/en/collection?key=mXKxHvz4&?verb=ListRecords&from=1401-01-10/1601-01-10&ps=100&toppieces=true')
>>>>>>> a37b83bdbb6e59fc72d318c5825c795b11913922
      .then((res) => setArt(res.data.artObjects))
      ;
  }
  
  return (
<<<<<<< HEAD
<<<<<<< HEAD
  <ArtContext.Provider value={{art}}>
    <Routerfunc />
  </ArtContext.Provider>
=======
  <ArtContext.Provider value={{art : art}}>
    <ArtMain/>
    {/* <MainComponent /> */}
=======
  <ArtContext.Provider value={{art : art}}>
    {/* <Routerfunc /> */}
    <ArtMain/>
>>>>>>> a37b83bdbb6e59fc72d318c5825c795b11913922
  </ArtContext.Provider>
     
  
>>>>>>> dcf4858028cfc9821e9dd7c96672c3f305b03709
  );
}

export default App;
