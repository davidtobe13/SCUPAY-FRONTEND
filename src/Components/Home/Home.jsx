import React from 'react'
import './Home.css'
import Header from './Header'
import Hero from './Hero'
import SchoolLogo from './SchoolLogo'
import About from './About'
import Benefit from './Benefit'
import Ticket from './Ticket'
import Blog from './Blog'
import Option from './Option'
import Testimonial from './Testimonial'
import Faq from './Faq'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='home-body'>
      <Header/>
      <Hero/>
      <SchoolLogo/>
      <About/>
      <Benefit/>
      <Ticket/>
      <Blog/>
      <Option/>
      <Testimonial/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home
