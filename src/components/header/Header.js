// import React from "react";
// import { IconButton } from "rsuite";
// import { Search } from '@rsuite/icons';
// import fb from './images/fb.png';
// import git from './images/git.png';
// import insta from './images/insta.png';
// import "rsuite/dist/rsuite.min.css";
  


// function Heading() {

//     const onhandleclick  =()=>{
//         console.log("hello");
//     } 
//   return (
//     <>
     
//       <div className="d-flex flex-row mb-3 d-flex justify-content-around" >
//         <div className="p-2">
//           <div className="d-flex flex-row mb-3" style={{margin: "40px  auto" }}>
//             <div className="p-2"><img src={fb}/></div>
//             <div className="p-2" ><img src={git}/></div>
//             <div className="p-2"><img src={insta}/></div>
//           </div>
//         </div>
//         <div className="p-2">
//           <h1 style={{ textAlign: "center", margin: "20px  auto" }}>sikkim</h1>
//         </div>
//         <div className="p-2">
//         <IconButton icon={<Search />} color="cyan" 
//                 appearance="default" style={{margin: "40px  auto"}}   onClick={onhandleclick}/>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Heading;
import React from 'react'
import'./Header.css';
import photo from '../images/travel4.gif';
import phototwo from  '../images/travel5.png';

export default function Header() {
  return (
    <div className='header'>
      <div className='titles'>
        <span className='uppertitle'>TriPPy</span>
  
        <span className='lowertitle'>By Cheshta</span>
      </div>

       <center><img className = "himg" src={photo}/></center>
     
    </div>
  )
}

