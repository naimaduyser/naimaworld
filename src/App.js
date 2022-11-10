import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { IsArchive } from "./store/actions/maindata";

import MusicPlayer from "./components/MusicPlayer";
import Navbar from "./components/Navbar";
import './index.css'
// Pages
import Archive from './routes/Archive'
import Residents from './routes/Residents'
import Contact from './routes/Contact'

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(IsArchive(true)), [])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Archive />} />
        <Route path="/residents" element={<Residents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <MusicPlayer />
    </>
  );
}
export default App;
