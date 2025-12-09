import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <Image
        src={assets.profile_img}
        alt="Header Image"
        className="rounded-full w-32"
      />
    </div>
  )
}

export default Header
