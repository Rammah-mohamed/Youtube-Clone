import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import ToggleButton from '@mui/material/ToggleButton';
import { IconButton } from '@mui/material';
import '../../global.scss'
import './Navbar.scss'

export default function Navbar(props) {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      if(searchTerm) {
        navigate(`/search/:${searchTerm}`)
      }
      setSearchTerm('')
    }

    const handleClick = (e) => {
      e.preventDefault()
        navigate(`/`)
      }

      const handleChange = () => {
        props.setDarkTheme(prev => !prev)
      }
  return (
    <div className='navbar' style={{backgroundColor: props.darkTheme && '#000'}}>
      <div className="wrapper">
        <div className="left" >
          <div className="hamburger" onClick={() => props.setShowSidebar(prev => !prev)}>
              <span className="line" style={{backgroundColor: props.darkTheme && '#fff'}}></span>
              <span className="line" style={{backgroundColor: props.darkTheme && '#fff'}}></span>
              <span className="line" style={{backgroundColor: props.darkTheme && '#fff'}}></span>
          </div>
          <div className="logo" onClick={handleClick}>
            <YouTubeIcon className='icon'/>
            <h2 style={{color: props.darkTheme && '#fff'}}>MY.Youtube</h2>
          </div>
        </div>
        <form  className="right" onSubmit={handleSubmit}>
          <div className="leftContainer">
          <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{color: props.darkTheme && '#fff', 
          caretColor: props.darkTheme && '#fff'}}
          />
          <IconButton className='button'>
            <SearchIcon className='icon'/>
          </IconButton>
          </div>
          <div className="rightContainer">
          <ToggleButton
          value={props.darkTheme}
          onChange={handleChange} 
          selected={props.darkTheme} 
          className='toggle' 
          style={{color: props.darkTheme && '#fff'}}
          >
            {props.darkTheme? 'White Theme': 'Dark Theme'}
          </ToggleButton>
          </div>
        </form>
      </div>
    </div>
  )
}
