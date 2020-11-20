import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import React from 'react';
import EntryPage from "./entry-page";
import NavBar1 from "./navbar";
import MainComponent from "./MainComponent";
import ArtMain from "./ArtMain";


function Routerfunc() {
    return (

        <Router>
            <NavBar1 className="navbar"/>
            <Switch>
            <Route exact path="/search/:objectNumber" component={ArtMain} />
            <Route exact path="/search" component={MainComponent} />
            <Route exact path="/" component={EntryPage} />
         
            </Switch>
        </Router>
    )
}

export default Routerfunc