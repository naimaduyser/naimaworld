import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./musicplayer.css";

import { SetAudioPlay } from "../store/actions/maindata";

// Buttons
import { BsFillSkipBackwardFill } from "react-icons/bs/";
import { BsFillSkipForwardFill } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";

import { SetAudioIndex } from "../store/actions/maindata";
const MusicPlayer = () =>
{
  const dispatch = useDispatch();
  const maindata = useSelector(store => store.maindata);
  const [audioURL, SetaudioURL] = useState('');


  // State

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volumeControl, setVolumeControl] = useState(100);

  // References
  const audioPlayer = useRef(); // reference for our audio component
  const progressBar = useRef(); // reference for progress bar
  const animationRef = useRef(); // reference for animation

  useEffect(() =>
  {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [
    audioPlayer?.current?.loadeddata,
    audioPlayer?.current?.readyState,
    currentSongIndex,
  ]);

  // Calculate Length of Song
  const calculateTime = (secs) =>
  {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  // Change Play/Pause Btton
  const togglePlayPause = () =>
  {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue)
    {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else
    {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () =>
  {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () =>
  {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () =>
  {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  // Change Start Over Track button
  const handleStartOverTrack = () =>
  {
    if (!maindata.isArchive) {
      progressBar.current.value = Number(0);
      changeRange();
    } else {
      nextPrePlay(false)
    }
  }

  // Change Previous Track Btton
  const handlePreviousTrack = () =>
  {
    if (!maindata.isArchive) {
      currentSongIndex === 0
        ? setCurrentSongIndex(4)
        : setCurrentSongIndex((prev) => prev - 1);
      setTimeout(() =>
      {
        setCurrentTime(0);
        audioPlayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
        setIsPlaying(true);
      }, 0);
    }
  };

  // Change Next Track Btton
  const nextTrack = () =>
  {
    if (!maindata.isArchive){
      currentSongIndex === 4
        ? setCurrentSongIndex(0)
        : setCurrentSongIndex((prev) => prev + 1);
      setTimeout(() =>
      {
        setCurrentTime(0);
        audioPlayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
        setIsPlaying(true);
      }, 0);
    } else {
      nextPrePlay(true);
    }
  };


  const onVolumeControl = ({ target }) => {
    setVolumeControl(target.value);
    audioPlayer.current.volume = target.value / 100;
  };


  useEffect(() =>{
    if (maindata.isArchive){
      const prevValue = !maindata.playChange;
      setIsPlaying(!prevValue);
      if (!prevValue) {
        audioPlayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
      } else {
        audioPlayer.current.pause();
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, [maindata.playChange])

  useEffect(() => {
    if (maindata.audioswitch) SetaudioURL(maindata.mix[maindata.audioIndex].audio.url);
  }, [maindata.audioswitch, maindata.playChange, maindata.audioIndex])

  const metaloadedFunc = () => {
    audioPlayer.current.play();
  }

  const audioPlayPause = (status) => {
    dispatch(SetAudioPlay(status));
  }

  const audioplayEnd = () => {
    let aIndex = maindata.audioIndex;
    if (aIndex < maindata.mix.length - 1) {
      aIndex++; dispatch(SetAudioIndex(aIndex));
    } else if (aIndex === maindata.mix.length - 1) {
      setIsPlaying(false)
    }
  }

  const nextPrePlay = (status) => {
    let aIndex = maindata.audioIndex;
    if (aIndex >= 0 && aIndex < maindata.mix.length) {
      if ((!status && aIndex === 0) || (status && aIndex === maindata.mix.length -1)) return;
      status ? aIndex++ : aIndex--;
      dispatch(SetAudioIndex(aIndex));
    }
  }

  return (
    <div className="music-container">
      {/* Audio Source */}
      <audio
        // autoPlay="autoPlay"
        ref={audioPlayer}
        src={maindata.isArchive?audioURL: ''}
        onLoadedData={metaloadedFunc}
        onPlay={()=>{audioPlayPause(true)}}
        onPause={() => { audioPlayPause(false) }}
        onEnded={audioplayEnd}
        id="audio"
        preload="metadata"
      ></audio>
      {/* Song Title */}
      <div className="song-title" id="title">
        <div className="playing-from">{maindata.isArchive? maindata.mix.length? "NOW PLAYING:" : "WELCOME" : ""}</div>
        <div className="mix-title">{maindata.isArchive? maindata.mix.length? maindata.mix[maindata.audioIndex].title : '' : ''}</div>
      </div>

      {/* Music Player Buttons */}
      <div className="player-buttons">
        <button
          className="arrows"
          onClick={handleStartOverTrack}
          onDoubleClick={handlePreviousTrack}

        >
          <BsFillSkipBackwardFill style={{ color: "white" }} />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? (
            <BsFillPauseFill style={{ color: "white" }} />
          ) : (
            <BsFillPlayFill style={{ color: "white" }} />
          )}
        </button>

        <button className="arrows" onClick={nextTrack}>
          <BsFillSkipForwardFill style={{ color: "white" }} />
        </button>
      </div>

      <div className="player-slider">
        {/* Current Time */}
        <div className="current-time">{calculateTime(currentTime)}</div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <input
            type="range"
            className="progress-bar-slider"
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          />
        </div>

        {/* Duration */}
        <div className="duration">
          {maindata.isArchive? maindata.mix.length? maindata.isArchive?calculateTime(audioPlayer.current.duration) : duration && !isNaN(duration) && calculateTime(duration) : "00:00" : ""}

        </div>
      </div>

      {/* Volume Control */}
      <div className="volume">
          VOL
          <input
            className="volume-control"
            onChange={onVolumeControl}
            min="0"
            max="100"
            value={volumeControl}
            type="range"
            step="0.1"
          />
        </div>

    </div>
  );
};

export default MusicPlayer;
