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
import Modal from '@mui/material/Modal';

export const Cart = () => {
  const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
    
if (count>=0){
  return (

    <div>
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
        <Stack direction='row'>
        <Button color='success' variant='contained' sx={{width:"150px",my:"5%"}} onClick={handleOpen}>Buy Now</Button>
        <Button color='warning'  variant='contained' sx={{width:"150px",my:"5%",ml:"1%"}} onClick={handleOpen}>Add to Cart</Button>

        </Stack>
        
       </Stack>
        
        </Box>

       
       
       </Stack>
      </Grid>
  
    </Grid>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
    
  )
}
else{
  return(
   <div>
    {dispatch(add())}
   </div>
  )
}
}
