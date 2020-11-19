import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import DisplayArt from './DisplayArt'



const MainComponent = () => {
const [query, setQuery] = useState([]);

 const getData = () => {
 const myKey = 'mXKxHvz4'
        axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=${myKey}&?verb=ListRecords&from=1401-01-10/1601-01-10`)
        .then(resp => setQuery(resp.data))
        };
    useEffect(() => { getData() }, [query])
    console.log(query)

return (
    <div>
        {query.map(e => <DisplayArt {...e}/>)}

    </div>
)
}
export default MainComponent