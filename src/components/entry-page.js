import './entry-page.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


const EntryPage = () => {

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