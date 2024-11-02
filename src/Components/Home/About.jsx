import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-hold'>
      <div className="about-left">
        <div className="about-left-up">
            <h4>ABOUT SCUPAY</h4>
            <h1>A payment management solution for schools</h1>
            <p>Scupay is a payment solution designed to streamline payment management for educational institutions</p>
        </div>
        <div className="about-left-down">
        <button className='hero-create-acc'>Create account</button>
        <button className='hero-learn'>Learn more <img  src="/chevron_right.png" alt="" /></button>
        </div>
      </div>
      <div className="about-right">
        <img src="/video.png" alt="" />
      </div>
    </div>
  )
}

export default About
