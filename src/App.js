import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { IsArchive } from "./store/actions/maindata";

import MusicPlayer from "./components/MusicPlayer";
import Navbar from "./components/Navbar";
import './index.css'
// Pages
import Archive from './routes/Archive'
import About from './routes/About'
import Residents from './routes/Residents'

function App() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(IsArchive(true)), [])
    return ( <
        >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Archive / > }
        /> <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route path = "/residents"
        element = { < Residents / > }
        /> <
        /Routes> <
        MusicPlayer / >
        <
        />
    );
}
export default App;
