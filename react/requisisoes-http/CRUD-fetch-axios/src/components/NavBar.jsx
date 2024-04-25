import { BottomNavigationAction, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Box>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Fetch Posts" icon={<RestoreIcon />}>
                
            </BottomNavigationAction>
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} >
                
            </BottomNavigationAction>
        </BottomNavigation>
    </Box>
  )
}

export default NavBar