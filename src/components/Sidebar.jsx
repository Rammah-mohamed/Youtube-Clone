import {Stack} from '@mui/material'

import {categories} from '../utils/constants'

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack direction= 'row' sx={{
      overflowY: 'auto',
      height: {sx: 'auto', md: '95%'},
      flexDirection: 'column'
    }}>
      {categories.map(category => (
            <button className='category-btn' style={{
              backgroundColor: selectedCategory === category.name && "red", 
              color: "white",
              userSelect: 'none',
            }}
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            >
              <span style={{
                color: selectedCategory !== category.name && 'red', 
                marginRight: '15px'}}>{category.icon}</span>
              <span style={{opacity: selectedCategory === category.name ? '1' : '0.8'}}>{category.name}</span>
            </button>
          ))}
    </Stack>
  )
}

export default Sidebar