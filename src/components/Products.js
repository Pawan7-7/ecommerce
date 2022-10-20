import { Box, Grid } from "@mui/material";
import { getProducts } from "./Redux/features/productSlice";

import LinearProgress from "@mui/material/LinearProgress";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Products({data}) {
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { loading, products } = useSelector((state) => state.products);

  if (loading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <Grid container>
      {products.filter((val)=>{
        if(data==""){
          return val;
        }else if(val.title.toLowerCase().includes(data.toLowerCase())){
          // console.log(val)
          return val;
        }
        
      }).map((apiData) => {
        return (
          <Grid
            md={2}
            sm={4}
            xs={12}
            item
            sx={{
              boxShadow: 3,
              m: 1,
              borderRadius: 4,
              "&:hover": {
                boxShadow: 7,
              },
            }}
            key={apiData.id}
          >
            <Link to={`/cart/${apiData.id}`}>
              {" "}
              <Box
                component="img"
                src={apiData.image}
                sx={{
                  width: "80%",
                }}
              ></Box>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Products;
