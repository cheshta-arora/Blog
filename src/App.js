import React from 'react';
import Navbar from './components/navbar/Navbar';
import Aboutme from './pages/aboutme/Aboutme';
import Home from './pages/home/Home';
import Single from './pages/Single/Single';
import Write from './pages/write/Write';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import SikkimSingle from './pages/Single/SikkimSingle';
import AmritsarSingle from './pages/Single/AmritsarSingle'
import MysoreSingle from './pages/Single/MysoreSingle';



function App() {
  return (
   <>
  <Router>
  <Navbar/>
    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/aboutme' element={<Aboutme/>}/>
   <Route path='/sikkim' element={<SikkimSingle/>}/>
   <Route path='/amritsar' element={<AmritsarSingle/>}/>
   <Route path='/mysore' element={<MysoreSingle/>}/>



  </Routes>
  </Router> 
  {/* <Single/>
  <Write/>*/}
 </>
  );
}

export default App;
