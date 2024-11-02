import React from 'react'
import "./Blog.css"

const Blog = () => {
  return (
    <div className='blog-body'>
      <div className="blog-top">
      <h4>NOTICE BOARD</h4>
            <h1>Stay updated with our blog</h1>
            <p>Explore the latest product updates, features, and insights </p>
      </div>
      <div className="blog-mid">
        <button>All</button>
        <button>Company</button>
        <button>Partnerships</button>
        <button>Financing</button>
        <button>Industry Trends</button>
        <button>Community</button>
      </div>
      <div className="blog-down">
        <div className="blog-card-holder">
            <div className="blog-card">
                <div className='blog-card-img'><img src="/chowdeck.png" alt="" /></div>
                <div className='blog-card-txt'>
                    <h4>Partnerships</h4>
                    <p>Scupay partners with Chowdeck to provide free meals to over 10,000 school children </p>
                    <h4>23 March 2024</h4>
                    </div>
                <div className='blog-card-btn'><button className='blog-learn'>Learn more <img  src="/chevron_right.png" alt="" /></button></div>
            </div>
            <div className="blog-card">
                <div className='blog-card-img'><img src="/woman.png" alt="" /></div>
                <div className='blog-card-txt'>
                    <h4>General</h4>
                    <p>How Scupay simplifies fee payment and management for parents</p>
                    <h4>18 April 2022</h4>
                    </div>
                <div className='blog-card-btn'><button className='blog-learn'>Learn more <img  src="/chevron_right.png" alt="" /></button></div>
            </div>
            <div className="blog-card">
                <div className='blog-card-img'><img src="/items.png" alt="" /></div>
                <div className='blog-card-txt'>
                    <h4>Partnerships</h4>
                    <p>The future of school payments: Why schools are choosing Scupay</p>
                    <h4>22 March 2024</h4>
                    </div>
                <div className='blog-card-btn'><button className='blog-learn'>Learn more <img  src="/chevron_right.png" alt="" /></button></div>
            </div>
            <div className="blog-card">
                <div className='blog-card-img'><img src="/schools.png" alt="" /></div>
                <div className='blog-card-txt'>
                    <h4>Partnerships</h4>
                    <p>Scupay partners with schools in Lagos State to streamline fee payment</p>
                    <h4>14 June 2024</h4>
                    </div>
                <div className='blog-card-btn'><button className='blog-learn'>Learn more <img  src="/chevron_right.png" alt="" /></button></div>
            </div>
            <div className="blog-card">
                <div className='blog-card-img'><img src="/newschool.png" alt="" /></div>
                <div className='blog-card-txt'>
                    <h4>Partnerships</h4>
                    <p>Scupay partners with African schools to streamline classroom experience</p>
                    <h4>19 August 2024</h4>
                    </div>
                <div className='blog-card-btn'><button className='blog-learn'>Learn more <img  src="/chevron_right.png" alt="" /></button></div>
            </div>
            <div className="blog-card">
                <div className='blog-card-img'><img src="/youtubepic.png" alt="" /></div>
                <div className='blog-card-txt'>
                    <h4>General</h4>
                    <p>Scupay reaches 5,000 subscribers on YouTube</p>
                    <h4>23 April 2024</h4>
                    </div>
                <div className='blog-card-btn'><button className='blog-learn'>Learn more <img  src="/chevron_right.png" alt="" /></button></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
