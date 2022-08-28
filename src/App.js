import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { IsArchive } from "./store/actions/maindata";

import MusicPlayer from "./components/MusicPlayer";
import Navbar from "./components/Navbar";
import './index.css'
// Pages
import Home from './routes/Home'
import Archive from './routes/Archive'
import Schedule from './routes/Schedule'

function App() {
  const dispatch = useDispatch();
  useEffect(() =>dispatch(IsArchive(true)), [])
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
    <MusicPlayer />
    </>
  );
}
export default App;
