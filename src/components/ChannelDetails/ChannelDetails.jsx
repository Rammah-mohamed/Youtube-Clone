import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Videos from '../Videos/Videos'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import { fetchFromApi } from '../../utils/fetchFromApi'
import {demoProfilePicture} from '../../utils/constants'
import './ChannelDetails.scss'

function ChannelDetails(props) {
  const [channelDetails, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams() 
  useEffect(() => {
    fetchFromApi(`channel?id=${id}`)
      .then(result => {
        setChannelDetails(result.meta)
        setVideos(result.data)
      })
  }, [id])


  if(!channelDetails) return '';

  const {image:{banner} ,title, thumbnail, subscriberCount} = channelDetails;
  
  return (
    <div className='channelDetails'>
      <div className="head">
        <div className="image" style={{backgroundImage: `url(${banner[5].url || banner[4].url || banner[3].url || banner[2].url || banner[1].url || banner[0].url})`}}>
        <img src={thumbnail[2].url || thumbnail[1] .url|| thumbnail[0].url || demoProfilePicture} alt="channel" className='channelImg'/>
        </div>
        <div className="info">
          <div className="title">
            <h3 style={{color : props.darkTheme && '#fff'}}>{title}</h3>
            <CheckCircleIcon className='icon'/>
          </div>
          <div className="subs">
            <h4 style={{color : props.darkTheme && '#fff'}}>{subscriberCount} Subscribers</h4>
            <PersonIcon className='icon'/>
          </div>
        </div>
      </div>
      <Videos videos={videos} darkTheme={props.darkTheme}/>
    </div>
  )
}

export default ChannelDetails