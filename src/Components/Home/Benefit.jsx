import React from 'react'
import './Benefit.css'

const Benefit = () => {
  return (
    <div className='benefit-body'>
      <div className="benefit-top">
      <h4>BENEFITS</h4>
            <h1>Why schools are choosing Scupay?</h1>
            <p>Transform the way your school handles payments </p>
      </div>
      <div className="benefit-down">
        <div className="benefit-card-holder">
            <div className="benefit-card">
                <div className='benefit-card-img'><img src="/recenter.png" alt="" /></div>
                <div className='benefit-card-txt'>
                    <h4>Centralized payment management</h4>
                    <p>Parents can easily view any outstanding balances, while administrators effortlessly track payments in real time.</p>
                    </div>
                <div className='benefit-card-img'><img src="/arrow.png" alt="" /></div>
            </div>
            <div className="benefit-card">
                <div className='benefit-card-img'><img src="/chat.png" alt="" /></div>
                <div className='benefit-card-txt'>
                    <h4>Pay fees easily with WhatsApp Pay</h4>
                    <p>Scupay enable fee payments through WhatsApp, eliminating the need to navigate complicated payment portals.</p>
                    </div>
                <div className='benefit-card-img'><img src="/arrow.png" alt="" /></div>
            </div>
            <div className="benefit-card">
                <div className='benefit-card-img'><img src="/domain.png" alt="" /></div>
                <div className='benefit-card-txt'>
                    <h4>Goodbye to manual payment processing</h4>
                    <p>An automated payment processor that eliminates manual entries, saving valuable hours for school administrators.</p>
                    </div>
                <div className='benefit-card-img'><img src="/arrow.png" alt="" /></div>
            </div>
            <div className="benefit-card">
                <div className='benefit-card-img'><img src="/encrypted.png" alt="" /></div>
                <div className='benefit-card-txt'>
                    <h4>All transactions are secure</h4>
                    <p>Built with advanced encryption, Scupay ensures every transaction is secure for both schools and families.</p>
                    </div>
                <div className='benefit-card-img'><img src="/arrow.png" alt="" /></div>
            </div>
            <div className="benefit-card">
                <div className='benefit-card-img'><img src="/chartbars.png" alt="" /></div>
                <div className='benefit-card-txt'>
                    <h4>Get financial insight and analytics</h4>
                    <p>We provide administrators with insights into payment patterns, balances, and trends for data-driven decisions.</p>
                    </div>
                <div className='benefit-card-img'><img src="/arrow.png" alt="" /></div>
            </div>
            <div className="benefit-card">
                <div className='benefit-card-img'><img src="/secure.png" alt="" /></div>
                <div className='benefit-card-txt'>
                    <h4>Cut administrative burden on schools</h4>
                    <p>Scupay reduces administrative burdens that allows more resources to be directed toward educational initiatives.</p>
                    </div>
                <div className='benefit-card-img'><img src="/arrow.png" alt="" /></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Benefit
