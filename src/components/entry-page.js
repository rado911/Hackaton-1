import './entry-page.css'
import React from 'react';

import {
    Link
} from "react-router-dom";



const EntryPage = () => {
        return(
        <div className="background">
        <div className="textCont">
            <Link to={{pathname: '/search'}}>
        <h1 className="title">Buy Art</h1>
            </Link>
        
        <h1 className="title">Sell Art</h1>
        </div>

        <div className="backgroundInfo">
            <p>Nachtwacht, Schutters van wijk II onder leiding van kapitein Frans Banninck Cocq</p>
            <p>Rembrandt van Rijn</p>
        </div>
        </div>
    )
}


export default EntryPage