import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

import MysorePost from '../../components/singlepost/MysorePost'

export default function MysoreSingle() {
  return (
    <>
    <div className='single'>
     <MysorePost/>
   
        <Sidebar/>
    </div>
    </>
  )
}
