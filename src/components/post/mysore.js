import React from 'react'
import photo from '../images/mysore.jpg'
import './Post.css'  
//////////mysore//////////////////////////

export default function MYSORE() {
  return (
    <div className='post'>
      <button className='btn'>
        <img className='postimg' src={photo}/>
        <div className='postdetail'>
        <div className='postcats'>
        <span className='postcat'>30 March 2020 - </span>
        <span className='postcat'>10 April 2020</span>
        </div>
        <span className='posttitle'>
           MYSORE
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
