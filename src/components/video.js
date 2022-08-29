import React from 'react'

// Styling
import './video.css'

// Media
import homeVideo from "../assets/videos/video.mp4"

const Video = () => {
  return (
    <div className="hero">
        <video autoPlay loop muted id="video">
            <source src={homeVideo} type="video/mp4"/>
        </video>
        <h1 className="hero-text">Work in progress, check back later!</h1>
    </div>
  )
}

export default Video