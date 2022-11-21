import React from 'react'
import photo from '../images/amritsar.JPG'
import './Post.css'
//////////amritsar/////////////////////
export default function AMRITSAR() {
  return (
    <div className='post'>
      <button className='btn'>
        <img className='postimg' src={photo}/>
        <div className='postdetail'>
        <div className='postcats'>
        <span className='postcat'> 29 July 2022 - </span>
        <span className='postcat'>31 July 2022</span>
        </div>
        <span className='posttitle'>
           AMRITSAR
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
