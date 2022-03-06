import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Women from './components/Women'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Men from './components/Men';
import Kids from './components/Kids'
ReactDOM.render(
    <Router>
    <Routes>
        <Route path="/" element={< App />}/>
        <Route path="/women" element={< Women />}/>
        <Route path="/sign-in" element={< SignIn />}/>
        <Route path="/sign-up" element={< SignUp />}/>
        <Route path="/men" element={< Men />}/>
        <Route path="/kids" element={< Kids />}/>
    </Routes>
</Router>, document.getElementById("root"));
