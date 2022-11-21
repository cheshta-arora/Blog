// import React from 'react'

// function Navbar() {
//   return (
//     <div className='navbar-fixed-top'><ul className="nav justify-content-center fs-5 fw-lighter" style={{postion:'sticky' , top:'0'}}> 
//     <li className="nav-item">
//       <a className="nav-link active" aria-current="page" href="#">Home</a>
//     </li>
   
//     <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//            India
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="#">Sikkim</a></li>
//             <li><a className="dropdown-item" href="#">Amritsar</a></li>
            
//           </ul>
//         </li>


//     <li className="nav-item">
//       <a className="nav-link" href="#">About me</a>
//     </li>
//   </ul></div>
//   )
// }

// export default Navbar
import React from 'react'; 
import { Link } from 'react-router-dom';
import profile from '../images/profile.png';
import './Navbar.css'; 


export default function Navbar() {
  return (
    <div className='top'>
      <div className='topleft'>
       <a  href= " https://www.facebook.com/" > <i className=" topicons fa-brands fa-square-facebook"></i></a>
       <a href = "https://www.instagram.com/" > <i className=" topicons fa-brands fa-square-instagram"></i></a>
       <a href = "https://github.com/" > <i className=" topicons fa-brands fa-square-github"></i></a>
      </div>
      <div className='topcenter'>
         <ul className='toplist'>
           <li className='toplistItems'><Link to="/" style={{  color: 'rgb(222, 145, 186)'}}>Home</Link></li>
           <li className='toplistItems'><Link to="/aboutme" style={{  color: 'rgb(222, 145, 186)'}}>About me</Link></li>

         </ul>
      </div>

      <div className='topright'>
        <img className='topimg' src={profile}/>
              <i className=" topsearchicon fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
}
