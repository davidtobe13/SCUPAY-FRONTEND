import React from 'react'
import './About.css'
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to '/start' when the button is clicked
    navigate('/get-started');
  };
  return (
    <div className='about-hold'>
      <div className="about-left">
        <div className="about-left-up">
            <h4>ABOUT SCUPAY</h4>
            <h1>A payment management solution for schools</h1>
            <p>Scupay is a payment solution designed to streamline payment management for educational institutions</p>
        </div>
        <div className="about-left-down">
        <button className='hero-create-acc' onClick={handleClick}>Get started</button>
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
