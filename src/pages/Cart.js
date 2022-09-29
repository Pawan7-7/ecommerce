import React from 'react'
import { Button, Grid, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom'
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState,useEffect } from 'react';
import { Box } from '@mui/material';
export const Cart = () => {
    let params = useParams();
    console.log(params);
    let id = params.id;
    const [data,setData]=useState([])
    useEffect(()=>{ axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((response)=>{
    //  console.log(response.data);
     setData(response.data)
    })},[id])
    
  return (
    <Grid container sx={{py:"100px",pl:"40px"}} >
      <Grid item >
       <Stack direction='row'>
       <Box component='img' src={data.image} sx={{width:"200px"}}></Box>
        <Box >
       <Stack direction='column' >
       <Typography sx={{fontSize:"30px"}} sx={{width:"200px"}}>{data.title}</Typography>
        <Typography sx={{fontSize:"28px",color:"orange",width:"200px"}}  >${data.price}</Typography>
        <Stack direction='row' sx={{width:"80%"}}>
          <Button startIcon={<AddIcon/>} variant='outlined'/>
          <Box component='span'>1</Box>
          <Button startIcon={<RemoveIcon/>} variant='outlined'/>
        </Stack>
        <Button color='success' variant='contained' sx={{width:"150px",my:"5%"}} >Buy Now</Button>
       </Stack>
        
        </Box>

       
       
       </Stack>
      </Grid>
    </Grid>
  )
}
