import {Link} from 'react-router-dom'

import { Typography, Card, CardMedia, CardContent } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { 
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl } from '../utils/constants'
  const noPicture = 'https://i.ytimg.com/vi/J6Ok7F3xANQ/hqdefault_live.jpg'

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <Card sx={{width:{md: '320px', sm: '350px', xs: '100%'}, boxShadow: 'none', borderRadius: 0}}>
      <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url === noPicture ? demoProfilePicture: snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width: {md:'320px', sm: '350px', xs: '100%'}, height: 180}}
        />
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
        <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId? `/video/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight='bold' color='grey'>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{fontSize: 12, color: 'grey', ml: '5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard