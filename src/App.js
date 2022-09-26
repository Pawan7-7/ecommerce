import { Grid } from "@mui/material";
import {Box} from "@mui/material";
import axios from "axios";
import { useEffect,useState } from "react";
  function App() {
    const [data,setData]=useState([])
useEffect(()=>{ axios.get('https://fakestoreapi.com/products')
.then((response)=>{
 console.log(response.data);
 setData(response.data)
})},[])
// console.log(data);
  return (
    <Grid container>
     
   {data.map((val)=>{
    return(
     
 <Grid key={val.title} md={2} xs={12} sm={6} item sx={{
  boxShadow: 3,
 p: 1,
 m: 1,
 borderRadius: 2,
 textAlign: 'center',
 fontSize: '0.875rem',
 fontWeight: '700', "&:hover": {
  boxShadow: 7,
},}}>
         <Box  component='img' src={val.image} sx={{width:"80%"}} />
      </Grid>
     
    )
   })}
    </Grid>
  );
}

export default App;
