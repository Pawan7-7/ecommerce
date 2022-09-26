import axios from "axios";
import { useEffect } from "react";
  function App() {
useEffect(()=>{ axios.get('https://fakestoreapi.com/products')
.then((response)=>{
 console.log(response.data);
})},[])
  return (
    <div>
     Initial Setup
    </div>
  );
}

export default App;
