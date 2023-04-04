import React from 'react'

import photo from '../images/kasauli.JPG'
import './Post.css'  

function Kasauli() {
  return (
    
  <div className='post'>
      <button className='btn'>
        <img className='postimg' src={photo}/>
        <div className='postdetail'>
        <div className='postcats'>
        <span className='postcat'> 20 Jan 2023 - </span>
        <span className='postcat'>21 Jan 2023</span>
        </div>
        <span className='posttitle'>
           KASAULI
        </span>
        {/* <span className="postdate">i hr ago </span> */}
        <p className='postdesc'>
            loqweiwghjkdo ifrekjl dopfigjklodfij qewgrhtngbdvcq r3t4ehtrbgfvc fegrht nbfvfwe ghntr gfir ewgr hjkbm vlc
             kfeij wor bflki efgwrhfenw klsfd pbges loqweiwghjkdo ifrekjl dopfigjklodfij qewgrhtngbdvcq r3t4ehtrbgfvc fegrht nbfvfwe ghntr gfir ewgr hjkbm vlc kfeij wor bflki efgwrhfenw klsfd pbges
        </p>
        </div>
        </button>
    </div>
  )
}

export default Kasauli