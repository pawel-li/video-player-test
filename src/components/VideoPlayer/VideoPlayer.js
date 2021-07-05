import React, { useState, useRef, useEffect } from 'react'
import {VideoPlayerContainer, VideoPlayerControls, VideoPlayerTimer, VideoPlayerTimeLine, VideoPlayerTimeLineDot} from './VideoPlayer.styled';
import {VideoPlayPauseBtn} from '../VideoPlayPauseBtn/VideoPlayPauseBtn'

export const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoSeconds, setVideoSeconds] = useState(0);
  const [videoPercentage, setVideoPercentage] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    calculateVideoTimeLineBarPercentage();
    console.log('1234123')
  }, 10);
  return () => clearInterval(interval);
}, []);

  function playPauseClick(){
    //play/pause video
    const interval = setInterval(() => updateVideoSeconds(), 1000);
    if(isPlaying){
      videoRef.current.play();
    }else{
      videoRef.current.pause();
      //Do i have to do this???
      clearInterval(interval);
    }
    //change state
    setIsPlaying(() => !isPlaying);
    }
    function updateVideoSeconds(){
      setVideoSeconds(() => videoRef.current.currentTime);
    }

    function calculateVideoTimeLineBarPercentage(){
      setVideoPercentage(() => videoRef.current.currentTime*100/videoRef.current.duration)
    }

    function ClickOnTimeLine(e){
      // Get the target
      const target = e.target;

      // Get the bounding rectangle of target
      const rect = target.getBoundingClientRect();

      // Mouse position
      const x = e.clientX - rect.left;
      const percentage = (x/rect.width);
      //calculate time in seconds from percebtage
      const videoTimeinSeconds = videoRef.current.duration * percentage;
      videoRef.current.currentTime = videoTimeinSeconds;
      //update state
      setVideoSeconds(() => videoTimeinSeconds);
    }

  return (
    <VideoPlayerContainer>

    <VideoPlayerControls>
        <VideoPlayPauseBtn onClick={playPauseClick} play={isPlaying}/>
        <VideoPlayerTimeLine onClick={(e) => ClickOnTimeLine(e)}>
            <VideoPlayerTimeLineDot style={{left: videoPercentage+"%"}}/>
        </VideoPlayerTimeLine>
        <VideoPlayerTimer>{new Date(videoSeconds * 1000).toISOString().substr(11, 8)}</VideoPlayerTimer>
    </VideoPlayerControls>
    {videoPercentage}
    <video
    ref={videoRef}
    width="auto"
    height="auto"
    onClick={playPauseClick}
    >
      <source src={process.env.PUBLIC_URL + '/video.mp4'} type="video/mp4" />
      </video>
    </VideoPlayerContainer>
  )
}
