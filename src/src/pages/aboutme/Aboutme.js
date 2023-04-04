import React from 'react'
import profile from '../../components/images/profile.png'
import './Aboutme.css'

export default function Aboutme() {
  return (
    <>
    <div className='aboutme'>
        <div className='abouttitle'>About me</div>
        <br />
        <br />
        <div className=' content'>
        <div className='aboutsdesc'>
            <p>Hey guys!! Myself Cheshta Arora born and brought up in Rohtak(Haryana), India.
               A Engineer  by profession and an avid traveller by heart. This travel bug in me is kinda hereditary, got it from my father! He is in Railway dept. , so we as a family used to get free passes thrice a year.
               <br/>
               <br/>
               We were always a budget traveller. Generally, we used to travel without any specific itinerary and return date. So we used to stay longer whatever destination impressed us. I still remember, how we used to travel with just a one-way ticket and kept on improvising our plan as we kept proceeding! We used to carry a trunk with a stove, some basic utensils (for cooking) and ration for first 2-3 days as we used to cook on our own. So for us, it was always travelling and exploring instead of holidaying and relaxing! I really miss those days, as we used to travel without any boundaries.
           
          <br />
          <br />
          Although, nowadays it has been super easy with internet, social media and blogs. I love researching about the destinations and planning trips on my own. However, doing so have it’s own benefits and disadvantages too. Generally, we like to keep our plan flexible. We do follow a draft itinerary which I deliberately prepare after doing some research, but I like to keep my options open. This way nature keeps surprising me every minute! Although, nowadays I feel puzzled with an ever-growing wishlist of mine with which I’m unable to cope-up! Life is too short to explore even a quarter of the world.
          So it all started with, when I tried to plan my Trip To Gangtok and North Sikkim on a budget, I faced a scarcity of available information on the internet. The existing travel blogs didn’t help much, as they were more focussed into describing the beauty of the place. What I wanted instead was information like, how to reach there by the public transport, budget accommodations like homestays or hostels or dorms and how and what can I explore after reaching there without making a hole in my pocket! 
          So one fine day, after this trip of mine, this idea of starting a blog sparked up in my mind where I can share my experiences in detail with you all so that you don’t have to face the same issues as I do. And then TriPPY with cheshta was born!
            </p>
        </div>
        <div className='photo'>
                <img src={profile} alt=""/>
            </div>
               
            <br/>
             </div>
             <div className="footer"> 
             <b>You can get in touch with me :
             <div className="bottomlist">
              instagram<br/>facebook
             </div>
             </b>
             </div>
             <div className="aboutme">
              <p className='last'>
             If you have any questions regarding your itinerary or anything else, I’d be glad to help you out. <br/>
             So please don’t hesitate to drop me a mail at<u> cheshta.arora2002@gmail.com.</u>
             </p>
             </div>
             </div>
             

  </>
             
  )
}
