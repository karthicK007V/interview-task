
import "./App.css"

import Bar from "./charts/Bar"
import Line from "./charts/Line"
import Rader from "./charts/Rader";
import Pie from "./charts/Pie"
import Polar from "./charts/Polar";
import Bubble from "./charts/Bubble"
import Home from "./home";
import {Route,BrowserRouter,Routes} from "react-router-dom"
import Navbar from "./Navbar";



function App() {

 
  return (<div className="">

  
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Bar" element={<Bar/>}/>
      <Route path="/Line" element={<Line/>}/>

      <Route path="/Rader" element={<Rader/>}/>
      <Route path="/Pie" element={<Pie/>}/>
      <Route path="/Polar" element={<Polar/>}/>
      <Route path="/Bubble" element={<Bubble/>}/>
    </Routes>
    </BrowserRouter>
   
    
    

   </div>)
   
   
   
}

export default App;
