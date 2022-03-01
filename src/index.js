import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Women from './components/Women'
import SignIn from './components/SignIn';


ReactDOM.render(
    <Router>
    <Routes>
        <Route path="/" element={< App />}/>
        <Route path="/women" element={< Women />}/>
        <Route path="/sign-in" element={< SignIn />}/>
    </Routes>
</Router>, document.getElementById("root"));
