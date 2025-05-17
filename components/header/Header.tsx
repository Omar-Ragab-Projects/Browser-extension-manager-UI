"use client"
import Image from 'next/image'
import React from 'react'
import logo from "@/public/images/logo.svg"
import sun from "@/public/images/icon-sun.svg";
import moon from "@/public/images/icon-moon.svg";

function Header() {
  return (
    <div className='mt-10 mb-16 rounded-lg bg-white dark:bg-Neutral-800 p-4 text-white font-bold flex-between'>
      <div>
        <Image src={logo} width={188} height={40} alt={'Logo'} className='dark:grayscale dark:invert' />
      </div>
      <div className='bg-Neutral-600 p-2 rounded-sm cursor-pointer hidden dark:block'
      onClick={()=>document.body.classList.toggle("dark")}
      >
        <Image src={sun} alt={'Light'}/>
      </div>
      <div className='bg-Neutral-100 p-2 rounded-sm cursor-pointer dark:hidden'
      onClick={()=>document.body.classList.toggle("dark")}
      >
        <Image src={moon} alt={'Light'}/>
      </div>
    </div>
  )
}

export default Header