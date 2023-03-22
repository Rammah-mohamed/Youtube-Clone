import {useState, useEffect} from 'react'
import { Box } from '@mui/system'
import {Videos, ChannelCard} from './'
import {fetchFromApi} from '../utils/fetchFromApi'
import { useParams} from 'react-router-dom'

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams() 
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then(data => setChannelDetail(data?.items[0]))
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => setVideos(data?.items))
  }, [id])
  return (
    <Box minHeight='90.1vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '280px'
        }}
        />
        <ChannelCard marginTop='-110px' channelDetail={channelDetail}/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr: {sm: '180px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetails