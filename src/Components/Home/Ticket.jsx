import React from 'react'
import './Ticket.css'
import { useNavigate } from 'react-router-dom';

const Ticket = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to '/start' when the button is clicked
    navigate('/get-started');
  };
  return (
    <div className="ticket-body">
        <div className="ticket-holder">
            <div className="ticket-left">
              <div className="ticket-left-img">
                <img src="/groupimg.png" alt="" />
              </div>
              <div className="ticket-left-txt">
                <h3>Scupay: Your ticket to seamless school payments</h3>
                <p>Join over 10,000 students all over the world to embrace the <br/> simplicity, convenience, and ease of payments now.</p>
              </div>
              <div className="ticket-left-btn">
              <button className='ticket-btn' onClick={handleClick}>Get started</button>
              </div>
            </div>
            <div className="ticket-right">
              <img src="/boyimg.png" alt="" className='boy1'/>
              <img src="/boyy.png" alt="" className='boy2'/>
            </div>
        </div>
      
    </div>
  )
}

export default Ticket
