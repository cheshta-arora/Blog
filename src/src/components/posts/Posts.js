import React from 'react'
import { Link } from 'react-router-dom';
import Sikkim from "../post/sikkim";
import Amritsar from '../post/Amritsar';
import Mysore from '../post/mysore';
import Kasauli from '../post/Kasauli';
import './Posts.css'

export default function Posts() {
  return (
    <div className='posts'>
     
      <Link to="/sikkim"><Sikkim/></Link>
      <Link to="/amritsar"><Amritsar/></Link>
     <Link to="/mysore"> <Mysore/></Link>
      <Link to="/kasauli"><Kasauli/></Link>
     
    </div>
  )
}
