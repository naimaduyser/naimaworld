import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { IsArchive } from "./store/actions/maindata";

import MusicPlayer from "./components/musicplayer";
import Navbar from "./components/navbar";
import './index.css'
// Pages
import Live from './routes/live'
import Archive from './routes/archive'
import Schedule from './routes/schedule'
import Residents from './routes/residents'

function App() {
  const dispatch = useDispatch();
  useEffect(() =>dispatch(IsArchive(true)), [])
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Archive />} />
      <Route path="/residents" element={<Residents />} />
      <Route path="/live" element={<Live />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
    <MusicPlayer />
    </>
  );
}
export default App;
