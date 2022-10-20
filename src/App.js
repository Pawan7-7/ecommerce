import { Home } from "./pages/Home";
import { Route,Routes } from "react-router-dom";

import { Cart } from "./pages/Cart";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
  function App() {
   const [data,setData]=useState('')
const getData=(val)=>{
  setData(val)
}
  return (
    <>
  <Navbar onChange={getData}/>
  
    <Routes>
<Route path="/" element={<Home data={data}/>}/>
<Route path="/cart/:id" element={<Cart/>}/>

</Routes>
    </>

     
  );
}

export default App;