import React, {useContext} from 'react';
import ArtContext from '../context/ArtContext';


function ArtMain(props) {
    const {art} = useContext(ArtContext);

    return(
     <div>
         {art.map(e=> <h1>{e.title}</h1>)}
     </div>
    )
}

export default ArtMain;