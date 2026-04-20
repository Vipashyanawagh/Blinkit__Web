import react from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Landing from "./pages/Landing"; // ✔ correct
import MilkCards from './components/landing/MilkCards';

function App(){
  return(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Landing/>}/>
<Route path="/cn" element={<MilkCards/>}/> 
</Routes>

</BrowserRouter> 
 )
}
export default App;