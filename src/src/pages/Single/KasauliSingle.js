import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import'./Single.css';
import Kasaulipost from '../../components/singlepost/Kasaulipost'

function KasauliSingle() {
  return (
    <div className='single'>
        <Kasaulipost/>
        <Sidebar/>
        
    </div>
  )
}

export default KasauliSingle