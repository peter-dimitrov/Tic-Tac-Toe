import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ResumePage from "./ResumePage.js";
import App from "./App.js";
import styles from "./App.css"

 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter>
    <Switch>
     <Route exact path="/" component={App} />
     <Route path="/Resume" component={ResumePage} />
   </Switch>
   </BrowserRouter>,
   rootElement
 );

 
