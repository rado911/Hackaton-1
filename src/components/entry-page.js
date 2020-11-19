import React, { useState, useContext, useEffect } from 'react';
import ArtContext from '../context/ArtContext';


const EntryPage = () => {

    const {art} = useContext(ArtContext); 
    const [loader, setLoader] = useState(true)

    const [background, setBackground] = useState([])

    const backgroundArray = []
    const backgroundPush = () => {
        {art.slice(50).map(e=> backgroundArray.push(`${e.webImage.url}`))}

    }

useEffect(()=>{

    backgroundPush()
    // function randomInteger(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    //   }
    console.log(backgroundArray)



    
}, [loader])



    return(
        
        <div className="backgroundImage" style={{backgroundImage:`url(https://lh3.googleusercontent.com/aKEZzQMkmdQ_j3TAieahX0YNq6IdF180754RUN_8e8frbxMFJnHXw5lBW49lASh7khTc_5hRSLVBGylMm-fazdO2UR0=s0)`}}>
        <h1>Buy Art</h1>
        
        <h1>Sell Art</h1>
        </div>
        
    )
}


export default EntryPage