import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import React from 'react';
import EntryPage from "./entry-page";
import NavBar1 from "./navbar";
<<<<<<< HEAD
import MainComponent from "./MainComponent";
=======
import ArtMain from "./ArtMain";
>>>>>>> a37b83bdbb6e59fc72d318c5825c795b11913922


function Routerfunc() {
    return (

        <Router>
            <NavBar1 />
            <Switch>
            <Route exact path="/search" component={MainComponent} />
            <Route exact path="/" component={EntryPage} />
         
            </Switch>
        </Router>
    )
}

export default Routerfunc