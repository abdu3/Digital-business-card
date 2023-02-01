import React from 'react'
import About from './About'
import Info from './Info'
import SocialMedia from './SocialMedia'

export default function Card() {
  return (
    <div className='card'>
      <div className="info">
        <Info/>
        <About/>
        <SocialMedia/>
      </div>
    </div>
  )
}
