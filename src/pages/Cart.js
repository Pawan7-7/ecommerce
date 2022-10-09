import React from 'react'
import { Button, Grid, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom'
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState,useEffect } from 'react';
import { Box } from '@mui/material';
import { add,sub } from '../components/Redux/features/productSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Cart = () => {
  const count =useSelector((state)=>state.products.count)
  const dispatch=useDispatch()
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
    <Grid container sx={{py:"100px",pl:{
      xs:10,
      sm:20,
      md:30,
      lg:40,
    }}} >
      <Grid item >
       <Stack direction='row'>
       <Box component='img' src={data.image} sx={{width:{
        xs:100,
        sm:100,
        md:200,
        lg:200,
       }}}></Box>
        <Box >
       <Stack direction='column' >
       <Typography sx={{fontSize:{
        xs:15,
        sm:20,
        md:30,
        lg:40,
       }}}>{data.title}</Typography>
        <Typography sx={{fontSize:"28px",color:"orange",width:"200px"}}  >${data.price*count}</Typography>
        <Stack direction='row' sx={{width:"80%"}}>
          <Button startIcon={<AddIcon/>} variant='outlined' onClick={()=>dispatch(add())}/>
          <Box component='span'>{count}</Box>
          <Button startIcon={<RemoveIcon/>} variant='outlined'  onClick={()=>dispatch(sub())}/>
        </Stack>
        <Button color='success' variant='contained' sx={{width:"150px",my:"5%"}} >Buy Now</Button>
       </Stack>
        
        </Box>

       
       
       </Stack>
      </Grid>
    </Grid>
  )
}
