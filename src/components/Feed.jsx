import {useState, useEffect} from 'react'

import { Stack, Box, Typography } from '@mui/material'
import {Sidebar, Videos} from './'
import {fetchFromApi} from '../utils/fetchFromApi'


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then(data => setVideos(data.items))
  }, [selectedCategory])
  return (
    <Stack sx={{
      flexDirection: {xs: 'column', md: 'row'}
    }}>
      <Box sx={{
        height: {xs: 'auto', md: '90.1vh'},
        borderRight: '1px solid #666',
        px: {sx: 0, md: 2}}}>
          <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          />
          <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
            Copyright 2023 My Youtube
          </Typography>
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height:'86vh', flex: '2'}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style={{color: '#F31503'}}>Videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}


export default Feed