import React from 'react'
import photo from '../images/sikkim1.JPG'
import './Post.css'  
//////////sikkim///////////////////////////

export default function Sikkim() {
  return (
    <div className='post'>
      <button className='btn'>
        <img className='postimg' src={photo}/>
        <div className='postdetail'>
        <div className='postcats'>
        <span className='postcat'>1 Oct 2022 - </span>
        <span className='postcat'>6 Oct 2022</span>
        </div>
        <span className='posttitle'>
           SIKKIM
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
