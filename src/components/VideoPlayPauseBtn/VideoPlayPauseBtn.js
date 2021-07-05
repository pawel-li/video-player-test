import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import {VideoPlayPauseBtnContainer} from './VideoPlayPauseBtn.styled';

export function VideoPlayPauseBtn({play,onClick}){
  return (
    <VideoPlayPauseBtnContainer onClick={onClick}>
      {play ? <PlayArrowIcon htmlColor={"rgba(0,0,0,0)"} stroke={"white"} strokeWidth={1} /> : <PauseIcon htmlColor={"rgba(0,0,0,0)"} stroke={"white"} strokeWidth={1} /> }
    </VideoPlayPauseBtnContainer>
  )
}
