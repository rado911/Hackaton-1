import './entry-page.css'
import React from 'react';

import {
    Link
} from "react-router-dom";



const EntryPage = () => {
        return(
        <div className="background">
        <div className="textCont">

        <h1 className="title">Welcome to Art Markplaats</h1>
        
            <Link to={{pathname: '/search'}}>
        <h1 className="nextpage">Buy Art</h1>
            </Link>
        
        </div>
        </div>
    )
}


export default EntryPage