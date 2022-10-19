import React from 'react'
import {InputBase, styled, Typography} from '@mui/material'
import { AppBar, Toolbar } from '@mui/material'
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import { LocalConvenienceStore } from '@mui/icons-material';
const NavToolBar= styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})
const Search =styled('div')({
    backgroundColor:'white',
    borderRadius: '10px',
    width:'40%',
    padding:'0 10px',
    

})

export const Navbar = () => {
  return (
    <AppBar position='sticky'>
        <NavToolBar>
        <Typography variant='h6' sx={{display:{xs:'none',sm:"block"}}}>.Store</Typography>
        <LocalConvenienceStoreIcon sx={{display:{xs:'block',sm:"none"}}}></LocalConvenienceStoreIcon>
        <Search><InputBase placeholder='Search...'></InputBase></Search>
        </NavToolBar>
    </AppBar>
  )
}
