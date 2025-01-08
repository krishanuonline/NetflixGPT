import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-50">
      <img src={logo} alt="logo" className='w-48'/>
    </div>
  )
}

export default Header