import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { assets } from '../../assets/assets'
import TitleCards from '../../Components/TitleCards/TitleCards'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero relative">
        <img src={assets.hero_banner} className='banner-img w-full' />
        <div className="hero-caption absolute w-full bottom-0 px-[6%]">
          <img src={assets.hero_title} className='caption-img w-[90%] max-w-[420px] mb-8' />
          <p className='max-w-[700px] text-lg mb-5'>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns flex gap-2.5 mb-12">
            <button className='btn'><img src={assets.play_icon}/>Play</button>
            <button className='btn dark-btn'><img src={assets.info_icon}/>More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards px-[6%]">
        <TitleCards/>
        <TitleCards/>
        <TitleCards/>
        <TitleCards/>
      </div>
    </div>
  )
}

export default Home
