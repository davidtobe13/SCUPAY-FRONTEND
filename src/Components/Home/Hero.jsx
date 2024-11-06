import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-body'>
    <div className='hero-holder'>
        <div className="hero-up">
        <h3>Make education accessible with <br/><span>simplified payment</span></h3>
        <p>Scupay helps over 1000 school administrators and students associations receive and monitor payments made by students</p>
        </div>
        <div className="hero-down">
            <button className='hero-create-acc'>Create account</button>
            <button className='hero-learn'>Learn more <img  src="/chevron_right.png" alt="" /></button>
        </div>
        </div>
        <div className="hero-img-hold">
            <img src="/dashframe.png" alt="" />
        </div>
    </div>
  )
}

export default Hero
