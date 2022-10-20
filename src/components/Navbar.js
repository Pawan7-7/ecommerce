import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import { AppBar, Box, InputBase, styled, Toolbar, Typography } from '@mui/material';
import {Badge,Avatar}from '@mui/material';
import { useState } from 'react';
// import { NotificationAdd } from '@mui/icons-material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import React from 'react';
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
const Icons =styled(Box) (({theme})=>({
    display: 'none',
    gap:"15px",
    alignItems:'center',
    justifyContent:'center',
    [theme.breakpoints.up('sm')]:{
      display:'flex',
      
    }}
))

const UserBox=styled(Box)(({theme})=>({
    display:'flex',
    gap:10,
    alignItems:'center',
    justifyContent:'center',
    [theme.breakpoints.up('sm')]:{
      display: 'none',
    }
}))

export const Navbar = (props) => {
 
const [value,setValue]=useState('')
const handleChange=(e)=>{
  setValue(e.target.value);
  props.onChange(value)

}
  
  return (
    <AppBar position='sticky'>
        <NavToolBar>
        <Typography variant='h6' sx={{display:{xs:'none',sm:"block"}}}>.Store</Typography>
        <LocalConvenienceStoreIcon sx={{display:{xs:'block',sm:"none"}}}></LocalConvenienceStoreIcon>
        <Search><InputBase placeholder='Search...' onChange={handleChange} value={value}></InputBase></Search>
        <Icons>
        <Badge badgeContent={3} color='warning'><LocalGroceryStoreIcon/></Badge>
       <Avatar sx={{width:30,height:30}} src='https://media-exp1.licdn.com/dms/image/C5603AQEWm91nTKq5VA/profile-displayphoto-shrink_800_800/0/1648607173364?e=1671667200&v=beta&t=i1s4B3c6MsQ95lR17mcNTdWoyYLoGAWjoVcgQ16_dtY'/>
       </Icons>
       <UserBox>
       <Avatar sx={{width:30,height:30}} src='https://media-exp1.licdn.com/dms/image/C5603AQEWm91nTKq5VA/profile-displayphoto-shrink_800_800/0/1648607173364?e=1671667200&v=beta&t=i1s4B3c6MsQ95lR17mcNTdWoyYLoGAWjoVcgQ16_dtY'/>
       <Typography variant='h6'>Pawan</Typography>
       </UserBox>
        </NavToolBar>
    </AppBar>
  )
}