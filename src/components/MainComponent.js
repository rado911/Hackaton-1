import { useState, useEffect } from 'react'
//import {Nav, Navbar, Form, Button, FormControl} from 'react-bootstrap'
import axios from 'axios'
import DisplayArt from './DisplayArt'
import './MainComponent.css'


const SearchBar = (props) => {

const [search, setSearch] = useState ('')
const [query, setQuery]=useState('0')
const [select, setSelect] = useState ([])

const getData = () => {
           axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=mXKxHvz4&imgonly=true&q=${query}`)
           .then(resp => setSelect(resp.data.artObjects))
           };

       useEffect(() => { getData()}, [query])
       useEffect(() => { console.log(select)}, [select])

const handleChange = (e) => {
    e.preventDefault()
   setQuery(search)
   
}
    return (
        <>
<h1 className="searchtitle">Search For Art!</h1>
<form className="searchform">
<input type="text" name="searchbar" onChange={(e) => setSearch(e.target.value)}></input>
<button className="submitbutton" onClick={(e) => handleChange(e)}>search</button>
</form>

<div className="grid">
{select.map(e => <DisplayArt {...e}/> )}
</div>
</>
    )
}
export default SearchBar 