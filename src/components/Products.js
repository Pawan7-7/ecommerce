import { Grid } from "@mui/material";
import {Box} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
  function Products() {
 
    const [data,setData]=useState([])
useEffect(()=>{ axios.get('https://fakestoreapi.com/products')
.then((response)=>{
 console.log(response.data);
 setData(response.data)
})},[])
// console.log(data);
  return (
   <Grid container  >
   {
    data.map((apiData)=>{
      return(
        <Grid  md={2} sm={4} xs={12} item sx={{
          boxShadow:3,
          m:1,
          borderRadius:4,
          '&:hover':{
            boxShadow:7
          }
        }}>
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