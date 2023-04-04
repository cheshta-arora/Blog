import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

import'./Single.css';
import AmritsarPost from '../../components/singlepost/amritsarpost';


export default function Single() {
  return (
    <>
    <div className='single'>
         <AmritsarPost/>   
        <Sidebar/>
    </div>
    </>
  )
}
