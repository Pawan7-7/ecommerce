import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { add, auth, sub } from "../components/Redux/features/productSlice";
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
export const Cart = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange1 = (event) => {
    setChecked(event.target.checked);
  };
  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const count = useSelector((state) => state.products.count);
  const dispatch = useDispatch();
  let params = useParams();
  // console.log(params);
  let id = params.id;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      //  console.log(response.data);
      setData(response.data);
    });
  }, [id]);

  if (count >= 0) {
    return (
      <div>
        <Grid
          container
          sx={{
            py: "100px",
            pl: {
              xs: 10,
              sm: 20,
              md: 30,
              lg: 40,
            },
          }}
        >
          <Grid item>
            <Stack direction="row">
              <Box
                component="img"
                src={data.image}
                sx={{
                  width: {
                    xs: 100,
                    sm: 100,
                    md: 200,
                    lg: 200,
                  },
                }}
              ></Box>
              <Box>
                <Stack direction="column">
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 15,
                        sm: 20,
                        md: 30,
                        lg: 40,
                      },
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "28px", color: "orange", width: "200px" }}
                  >
                    ${(data.price * count).toFixed(2)}
                  </Typography>
                  <Stack direction="row" sx={{ width: "80%" }}>
                    <Button
                      startIcon={<AddIcon />}
                      variant="outlined"
                      onClick={() => dispatch(add())}
                    />
                    <Box component="span">{count}</Box>
                    <Button
                      startIcon={<RemoveIcon />}
                      variant="outlined"
                      onClick={() => dispatch(sub())}
                    />
                  </Stack>
                  <Stack direction="row">
                    <Button
                      color="success"
                      variant="contained"
                      sx={{ width: "150px", my: "5%" }}
                      onClick={handleOpen}
                    >
                      Buy Now
                    </Button>
                    <Button
                      color="warning"
                      variant="contained"
                      sx={{ width: "150px", my: "5%", ml: "1%" }}
                      onClick={handleOpen}
                    >
                      Add to Cart
                    </Button>
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
          <Formik
            initialValues={{
              username: "",
              password: "",
              email: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
              dispatch(auth(values));
              setOpen(false)
            }}
          >
            {({ errors, touched, values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={style}>
                  <Grid
                    container
                    spacing={3}
                    direction={"column"}
                    justify={"center"}
                    alignItems={"center"}
                  >
                    <Grid item xs={12}>
                      <TextField
                        label="Username"
                        name="username"
                        onChange={handleChange}
                        value={values.username}
                      ></TextField>
                      {touched.username && errors.username && (
                        <div color="red">{errors.username}</div>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                      ></TextField>
                      {touched.email && errors.email && (
                        <div>{errors.email}</div>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                      ></TextField>
                      {touched.password && errors.password && (
                        <div>{errors.password}</div>
                      )}
                    </Grid>

                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked}
                            onChange={handleChange1}
                            label={"Keep me logged in"}
                            inputProps={{ "aria-label": "primary checkbox" }}
                          />
                        }
                        label="Keep me logged in"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button color="warning" type="submit">
                        {" "}
                        Login{" "}
                      </Button>
                      <Button color="warning" type="submit">
                        {" "}
                        Register{" "}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            )}
          </Formik>
        </Modal>
      </div>
    );
  } else {
    return <div>{dispatch(add())}</div>;
  }
};
