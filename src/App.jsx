import react from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Landing from "./pages/Landing"; // ✔ correct

function App(){
  return(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Landing/>}/>
</Routes>

</BrowserRouter> 
 )
}
export default App;