import {useState, useEffect} from 'react'
import {Link, useParams } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'
import  ReactPlayer  from 'react-player'
import { CheckCircle } from '@mui/icons-material'

import {Videos} from './'
import { fetchFromApi } from '../utils/fetchFromApi'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
    .then(data => setVideoDetail(data.items[0]))

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then(data => setVideos(data.items))
  }, [id])

  if(!videoDetail?.snippet) return 'Loading...'
  const {snippet : {title, channelId, channelTitle}, statistics: {
    viewCount, likeCount, dislikeCount
  }} = videoDetail

  return (
    <Box minHeight='90.1vh'>
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
            className='react-player' controls/>
            <Typography variant='h5' color='#fff' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{color:'white'}} px={2} py={1}>
              <Link to={`/channel/${channelId}`}>
              <Typography variant={{xs: 'subtitle1', md:'h3'}} color='white'>
                {channelTitle}
                <CheckCircle sx={{fontSize: 14, color: 'grey', ml: '5px'}}/>
              </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{opacity: '0.7'}}>
                  {parseInt(viewCount).toLocaleString()} View
                </Typography>
                <Typography variant='body1' sx={{opacity: '0.7'}}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
                <Typography variant='body1' sx={{opacity: '0.7'}}>
                  {parseInt(dislikeCount).toLocaleString()} Dislikes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box justifyContent='center' alignItems='center' px={2} py={{md: 1, sx:5}}>
          <Videos videos={videos} direction='column'/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail