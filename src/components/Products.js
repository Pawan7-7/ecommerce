import { Grid } from "@mui/material";
import {Box} from "@mui/material";
import { getProducts } from "./Redux/features/productSlice";

import LinearProgress from '@mui/material/LinearProgress';


import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
  function Products() {
 
const dispatch =useDispatch()
useEffect(()=>{
  dispatch(getProducts())
},[])
const {loading,products}=useSelector((state)=>state.products)

if (loading){
  return (
    <Box sx={{ width: '100%' }}>
    <LinearProgress />
  </Box>
  );
}

  return (
   <Grid container  >
   {
    products.map((apiData)=>{
      return(
        <Grid  md={2} sm={4} xs={12} item sx={{
          boxShadow:3,
          m:1,
          borderRadius:4,
          '&:hover':{
            boxShadow:7
          }
        }} key={apiData.id}>
            <Link to={`/cart/${apiData.id}`}>   <Box component='img' src={apiData.image} sx={
            {
              width:"80%",
              
            }
          }></Box></Link>
         
        </Grid>
      )
    })
   }
   </Grid>
  );
}

export default Products;