import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to '/start' when the button is clicked
    navigate('/get-started');
  };
  return (
    <div className='hero-body'>
    <div className='hero-holder'>
        <div className="hero-up">
        <h3>Make education accessible with <span>simplified payment</span></h3>
        <p>Scupay helps over 1000 school administrators and students associations receive and monitor payments made by students</p>
        </div>
        <div className="hero-down">
            <button className='hero-create-acc' onClick={handleClick}>Get started</button>
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