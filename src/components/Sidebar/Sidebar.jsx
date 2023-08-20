import {categories} from '../../utils/constants'
import './Sidebar.scss';

function Sidebar(props) {
  return (
    <div className='sidebar' style={{display: props.showSidebar && 'none'}}>
      {categories.map((category, index) => (
      <button key={index}
      style={{backgroundColor: props.selectedCategory === category.name && 'red'}}
      onClick={() => props.setSelectedCategory(category.name)}
      >
        <span className='icon' style={{color: props.selectedCategory === category.name && '#fff'}}>{category.icon}</span>
        <span className='name' style={{color: props.selectedCategory === category.name ||  props.darkTheme? '#fff' : ''}}>{category.name}</span>
      </button>
      ))}
    </div>
  )
}

export default Sidebar