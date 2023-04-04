import React from 'react'
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/Sidebar";

import'./Home.css'

export default function Home() {
  return (
    <>
    <Header/>
     <div className='home'>
      <Posts/>
     <SideBar/>
    </div> 
    </>
   
  )
}