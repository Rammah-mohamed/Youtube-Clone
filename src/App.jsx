import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import VideoDetails from './components/VideoDetails/VideoDetails'
import ChannelDetails from './components/ChannelDetails/ChannelDetails'
import Search from './components/Search/Search'
import Navbar from './components/Navbar/Navbar'
import './App.scss'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [showSidebar, setShowSidebar] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={ darkTheme ? 'app darkTheme' : 'app'}>
      <BrowserRouter>
        <Navbar setShowSidebar={setShowSidebar} 
        darkTheme={darkTheme} 
        setDarkTheme={setDarkTheme}
        />
        <Routes>
          <Route path='/' exact element={
          <Home
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            showSidebar={showSidebar}
            darkTheme={darkTheme}
            />} 
          />
          <Route path='/video/:id' element={<VideoDetails darkTheme={darkTheme}/>} />
          <Route path='/channel/:id' element={<ChannelDetails darkTheme={darkTheme}/>} />
          <Route path='/search/:searchTerm' element={<Search darkTheme={darkTheme}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
