import { useState, useEffect } from 'react'
import React from 'react'
import './Getstarted.css'
import { useNavigate } from 'react-router-dom';

const Getstarted = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to '/start' when the button is clicked
    navigate('/');
  };

  const handleJoinWaitlistClick = () => {
    setIsModalOpen(true); // Show the modal
};

const closeModal = () => {
    setIsModalOpen(false); // Hide the modal
};

  return (
    <div className='get-started' >
        <div className="get-started-body">
        <div className="get-started-logo-mobile">
                    <button onClick={handleClick}> <img src="./xlogo.png" alt="" /></button>
                </div>
            <div className="get-started-body-left">
                <div className="get-started-logo">
                    <button onClick={handleClick}> <img src="./xlogo.png" alt="" /></button>
                </div>
                <div className="get-started-left-down">
                    <h1>Why Scupay?</h1>
                    <div className="get-started-left-hold">
                        <div className="get-started-left-hold-body">
                            <div className="get-started-left-img">
                                <img src="/check_circle.png" alt="" />
                                <h4>Goodbye to manual payment processing</h4>
                            </div>
                            <div className="get-started-left-txt">
                                <p>Schools can get real-time notifications and automated tracking of payments</p>
                            </div>
                        </div>
                        <div className="get-started-left-hold-body">
                            <div className="get-started-left-img">
                                <img src="/check_circle.png" alt="" />
                                <h4>Centralized payment management</h4>
                            </div>
                            <div className="get-started-left-txt">
                                <p>Admins can manage all payment channels from a single dashboard</p>
                            </div>
                        </div>
                        <div className="get-started-left-hold-body">
                            <div className="get-started-left-img">
                                <img src="/check_circle.png" alt="" />
                                <h4>Secure transactions</h4>
                            </div>
                            <div className="get-started-left-txt">
                                <p>Trust in our robust security to keep all payment data encrypted and safe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="get-started-body-right">
                <div className="get-started-card">
                    <div className="get-started-card-up">
                        <h5>Get started</h5>
                        <p>Join our waitlist and simplify your school payments with ease</p>
                    </div>
                    <div className="get-started-card-body">
                        <div className="get-started-card-hold">
                            <div className="get-started-input-hold">
                                <label>Full name</label>
                                <input type="text" placeholder='Enter full name' />
                            </div>
                            <div className="get-started-input-hold">
                                <label>Email</label>
                                <input type="text" placeholder='Enter email address' />
                            </div>
                            <div className="get-started-input-hold">
                                <label>Phone No.</label>
                                <input type="text" placeholder='Enter phone number (optional)' />
                            </div>
                            <div className="get-started-input-hold">
                                <label>School/Institution name</label>
                                <input type="text" placeholder='Enter name of school or association' />
                            </div>
                            <div className="get-started-input-hold">
                                <label>Role</label>
                                <select>
                                    {/* <option value="">Select Role</option> */}
                                    <option value="administrator">Administrator</option>
                                    <option value="student">Student</option>
                                </select>
                                {/* <input type="option" placeholder='Enter full name' /> */}
                            </div>
                        </div>
                        <div className="get-started-card-btn">
                            <button onClick={handleJoinWaitlistClick}>Join the Waitlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src="/Like.png" alt="" />
                        <h3>Thank you for joining the waitlist.</h3>
                        <p>Keep an eye on your inbox for early access updates.</p>
                        {/* <button onClick={closeModal}>Close</button> */}
                    </div>
                </div>
            )}

        <div className="get-started-footer">
        <svg className='svg1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#F0F5FF" fill-opacity="1" d="M0,256L120,240C240,224,480,192,720,181.3C960,171,1200,181,1320,186.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" ></path></svg>
        <div className="get-started-footer-inner">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#1D5BD6" fill-opacity="1" d="M0,256L120,240C240,224,480,192,720,181.3C960,171,1200,181,1320,186.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" ></path></svg>
            </div>

        </div>
    </div>
  )
}

export default Getstarted
