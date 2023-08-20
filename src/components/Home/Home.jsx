import {useState, useEffect} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Videos from '../Videos/Videos'
import './Home.scss'
import {fetchFromApi} from '../../utils/fetchFromApi'

export default function Home(props) {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromApi(`search?query=${props.selectedCategory}&type=video&geo=US&lang=en`)
      .then(result => setVideos(result.data))
  }, [props.selectedCategory])

  return (
    <div className='home'>
      <Sidebar
        selectedCategory={props.selectedCategory}
        setSelectedCategory={props.setSelectedCategory}
        showSidebar={props.showSidebar}
        darkTheme={props.darkTheme}
      />
      <Videos 
      videos={videos} 
      selectedCategory={props.selectedCategory}
      darkTheme={props.darkTheme}
      />
    </div>
  )
}
