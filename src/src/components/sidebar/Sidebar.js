import React from 'react'
import './sidebar.css'
import profile from '../images/profile.png';

export default function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className='items'>
        <span className='stittle'>About Me</span>
        <img className="photo" src={profile}/>
        <p className='name'><strong style={{color:' rgb(222, 145, 186)'}}>CHESHTA ARORA</strong>
        <br/>
        Hi, I'm born and brought up in Rohtak(Haryana) . I love to  Eat, Sleep and Travel. A developer by profession and a traveller by passion. As I was facing a lack of budget-friendly information on the internet while planning my travel, I started drafting my travel experiences here to help you all having a pocket-friendly smooth travel experience.
        </p>

        </div>
         <div className='items'>
        <span className="stittle">FOLLOW ME : </span>
        <div className="social">
        <i className=" sicons fa-brands fa-square-facebook"></i>
        <i className=" sicons fa-brands fa-square-instagram"></i>
        <i className=" sicons fa-brands fa-square-github"></i>
        </div>
      </div>
    </div>
  )
}
