import React, { useState, useContext, useEffect } from 'react';
import ArtContext from '../context/ArtContext';
import './entry-page.css'


const EntryPage = () => {

    const {art} = useContext(ArtContext); 
    return(
        <>
        <div className="textCont">
        <h1 className="title">Buy Art</h1>
        
        <h1 className="title">Sell Art</h1>
        </div>

        <div className="backgroundInfo">
            <p>Nachtwacht, Schutters van wijk II onder leiding van kapitein Frans Banninck Cocq</p>
            <p>Rembrandt van Rijn</p>
        </div>
        </>
    )
}


export default EntryPage