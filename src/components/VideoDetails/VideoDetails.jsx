import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import Videos from '../Videos/Videos'
import ReactPlayer from 'react-player'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {fetchFromApi} from '../../utils/fetchFromApi'
import './VideoDetails.scss'

function VideoDetails(props) {
  const [videoDetails, setVideoDetails] = useState(null)
  const [videos, setVideos] = useState(null)
  const {id} = useParams()

  useEffect (() => {
    fetchFromApi(`video?id=${id}`)
    .then(result => setVideoDetails(result))

    fetchFromApi(`related?id=${id}&type=video`)
    .then(result => setVideos(result.data))
  }, [id])

  if(!videoDetails) return ''
  const {title, channelId, channelTitle, viewCount, uploadDate} = videoDetails;

  return (
    <div className='videoDetails'>
      <div className="video">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='player' controls/>
        <div className="details">
        <h3 style={{color: props.darkTheme && '#fff'}}>{title}</h3>
        <div className="info">
          <Link to={`/channel/${channelId}`} className='channel'>
            <h4 style={{color: props.darkTheme && '#fff'}}>{channelTitle}</h4>
              <CheckCircleIcon className='icon'/>
          </Link>
          <div className="stats">
            <div className="upload">
              <CalendarMonthIcon className='icon'/>
              <span style={{color: props.darkTheme && '#fff'}}>Upload Date {uploadDate}</span>
            </div>
            <div className="views">
              <VisibilityIcon className='icon'/>
              <span style={{color: props.darkTheme && '#fff'}}>Views {parseInt(viewCount).toLocaleString()}</span>
            </div>
          </div>
        </div>
        </div>
      </div>
      {videos && <div className="relatedVideos">
        <Videos 
        videos={videos} 
        videoDetails={videoDetails} 
        darkTheme={props.darkTheme}/>
      </div>}
    </div>
  )
}

export default VideoDetails