import React from 'react'

import Logo from '../Images/logo.png'


export const Headers = () => {
  return (
    <header className='headtop'>
      <img src={Logo} alt='' width={50} height={50}/>
      <a href='/'>Home</a>
    </header>
  )
}
