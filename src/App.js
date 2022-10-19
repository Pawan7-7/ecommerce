import { Home } from "./pages/Home";
import { Route,Routes } from "react-router-dom";

import { Cart } from "./pages/Cart";
import { Navbar } from "./components/Navbar";
  function App() {
   

  return (
    <>
  <Navbar />
  
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/cart/:id" element={<Cart/>}/>

</Routes>
    </>

     
  );
}

export default App;