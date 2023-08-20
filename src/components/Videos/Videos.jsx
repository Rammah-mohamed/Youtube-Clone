import VideoCard from '../VideoCard/VideoCard'
import './Videos.scss'

export default function Videos(props) {
  if(!props.videos?.length) return (
    <div className='videos'>
      <h1 style={{color: props.darkTheme && '#fff'}}>
        <span>{props.searchTerm? props.searchTerm.slice(1) : props.selectedCategory}</span> Videos Not Found
      </h1>
    </div>
  )
  return (
    <div className='videos' style={{transform : props.videoDetails && 'translateY(50px)'}}>
      <h1 style={{color: props.darkTheme && '#fff'}}>
        <span>{props.searchTerm? props.searchTerm.slice(1) : props.selectedCategory}</span> 
        {props.videoDetails? 'Related Videos': ' Videos'}
      </h1>
      <div className="videosWrapper">
      {
        props.videos.map((item, index) => (
        <div className="box" key={index} >
          <VideoCard video={item} darkTheme={props.darkTheme}/>
        </div>
      ))
      }
      </div>
    </div>
  )
}
