import styled from 'styled-components';

export const VideoPlayerContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  position: relative;
`;

export const VideoPlayerControls = styled.div`
  position: absolute;
  z-index:999;
  bottom:1em;
  width: 100%;
  display:flex;
`;
export const VideoPlayerTimer = styled.div`
  margin: auto;
  padding:0;
  color:#FFF;
`


export const VideoPlayerTimeLine = styled.div`
  width: 80%;
  height: 1px;
  margin: auto 1em;
  background-color:#FFF;
  position: relative;
`
export const VideoPlayerTimeLineDot = styled.div`
width: 1em;
height: 1em;
padding: 0;
margin: 0;
box-sizing: border-box;
background-color:transparent;
border: 1px solid #fff;
position: absolute;
top: -0.5em;
transition: all 0.1s;
margin-left:-0.5em;
left: 0%;
border-radius: 50%;
`
