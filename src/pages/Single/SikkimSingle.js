import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlepost/SinglePost'
import'./Single.css';

import { Sikkimpost } from '../../components/singlepost/Sikkimpost';


export default function Single() {
  return (
    <>
    <div className='single'>
        <Sikkimpost/>
        <Sidebar/>
    </div>
    </>
  )
}
