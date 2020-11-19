import React, {useContext} from 'react';
import ArtContext from '../context/ArtContext';


function ArtMain(props) {
    const {art} = useContext(ArtContext);

    return(
     <div>
         {art.map(e=> {
             return (
                 <div>
         <h1>{e.title}</h1>
         <img src={e.webImage.url} alt={e.webImage.id}/>
         </div>
         )})}
     </div>
    )
}

export default ArtMain;