import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import React from 'react';
import EntryPage from "./entry-page";
import NavBar1 from "./navbar";
import ArtMain from "./ArtMain";


function Routerfunc() {
    return (

        <Router>
            <NavBar1 />
            <Switch>
            <Route exact path="/" component={EntryPage} />
         
            </Switch>
        </Router>
    )
}

export default Routerfunc