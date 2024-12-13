// import {React, useState} from 'react'
// import { useLocation, useNavigate } from 'react-router-dom';
// import "./CreateAcct.css"

// const CreateAcct = () => {
  
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const location = useLocation()
//     const navigate = useNavigate();

//   const handleSignin = () => {
//     // Navigate to '/start' when the button is clicked
//     navigate('/auth/institution/signin');
//   };
//   const handleClick = () => {
//     // Navigate to '/start' when the button is clicked
//     navigate('/');
//   };

//   const handleJoinWaitlistClick = () => {
//     setIsModalOpen(true); // Show the modal
// };

// const handleNavClick2 = () => {
//     setIsMenuOpen(false);
//     navigate('/auth/institution/signup');

// };
// const handleNavClick1 = () => {
//     setIsMenuOpen(false);
//     navigate('/auth/student/signup');

// };

// const closeModal = () => {
//     setIsModalOpen(false); // Hide the modal
// };

//   return (
//     <div className='sch-signup' >
        
//         <div className="sch-signup-header">
//                     <button onClick={handleClick}> <img src="/xlogo.png" alt="" /></button>
//                     <div className='sch-signup-header-nav'>
//                     <button className={location.pathname === '/auth/institution/signup' ? 'active' : ''} onClick={handleNavClick2}>
//                     <p>For Institutions</p>
//                     </button>
//                     <button className={location.pathname === '/auth/student/signup' ? 'active' : ''} onClick={handleNavClick1}>
//                     <p>For Students</p>
//                     </button>
//                     </div>
//                 </div>

//                 <div className="sch-signin-mheader">
//             {/* <div className="signin-head-logo"></div> */}
//             <button onClick={handleClick}> <img src="/scupaylogo.png" alt="" /></button>
//             <div className='sch-signin-mheader-nav'>
//                 <button 
//                     className={location.pathname === '/auth/institution/signup' ? 'active' : ''} 
//                     onClick={handleNavClick2}
//                 >
//                     <p>For Institutions</p>
//                 </button>
//                 <button 
//                     className={location.pathname === '/auth/student/signup' ? 'active' : ''} 
//                     onClick={handleNavClick1}
//                 >
//                     <p>For Students</p>
//                 </button>
//             </div>
//         </div>
//         <div className="sch-signup-body">
//         {/* <div className="sch-signup-logo-mobile">
//                     <button onClick={handleClick}> <img src="/xlogo.png" alt="" /></button>
//                 </div> */}
                
//             <div className="sch-signup-body-left">
//                 <div className="sch-signup-logo">
//                     {/* <button onClick={handleClick}> <img src="/xlogo.png" alt="" /></button> */}
//                 </div>
//                 <div className="sch-signup-left-down">
//                     <h1>For management</h1>
//                     <div className="sch-signup-left-hold">
//                         <div className="sch-signup-left-hold-body">
//                             <div className="sch-signup-left-img">
//                                 <img src="/check_circle.png" alt="" />
//                                 <h4>Goodbye to manual payment processing</h4>
//                             </div>
//                             <div className="sch-signup-left-txt">
//                                 <p>Schools can get real-time notifications and automated tracking of payments</p>
//                             </div>
//                         </div>
//                         <div className="sch-signup-left-hold-body">
//                             <div className="sch-signup-left-img">
//                                 <img src="/check_circle.png" alt="" />
//                                 <h4>Centralized payment management</h4>
//                             </div>
//                             <div className="sch-signup-left-txt">
//                                 <p>Admins can manage all payment channels from a single dashboard</p>
//                             </div>
//                         </div>
//                         <div className="sch-signup-left-hold-body">
//                             <div className="sch-signup-left-img">
//                                 <img src="/check_circle.png" alt="" />
//                                 <h4>Secure transactions</h4>
//                             </div>
//                             <div className="sch-signup-left-txt">
//                                 <p>Trust in our robust security to keep all payment data encrypted and safe</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="sch-signup-body-right">
//                 <div className="sch-signup-card">
//                     <div className="sch-signup-card-up">
//                         <h5>Create a Scupay account </h5>
//                         <p>Join over 100 schools and associations already streamlining their payment processes with Scupay</p>
//                     </div>
//                     <div className="sch-signup-card-body">
//                         <div className="sch-signup-card-hold">
//                             <div className="sch-signup-input-hold">
//                                 <label>Email</label>
//                                 <input type="text" placeholder='Enter email address' />
//                             </div>
//                             <div className="sch-signup-input-hold">
//                                 <label>School</label>
//                                 <input type="text" placeholder='Enter correct school name' />
//                             </div>
//                             <div className="sch-signup-input-hold">
//                                 <label>Phone No.</label>
//                                 <input type="text" placeholder='Enter phone number' />
//                             </div>
//                         </div>
//                         <div className="sch-signup-card-btn">
//                             <button onClick={handleJoinWaitlistClick}>Verify your email</button>
//                         </div>
//                     </div>
//                     <div className='sch-signup-card-lower'>
//                         <div className='linediv'>
//                             <div className='line'></div>
//                             <p>OR</p>
//                             <div className='line'></div>
//                         </div>
//                         <div className="google-auth-btn">
//                             <button onClick={handleJoinWaitlistClick}>
//                                <img src="/google.png" alt="" />Sign up with Google</button>
//                         </div>
//                         <div className="sch-signup-card-sub">
//                             <p>Already have a Scupay account? <span onClick={handleSignin}> Sign in</span></p>
//                         </div>
        
//                     </div>
//                 </div>
//             </div>
//         </div>
//             {isModalOpen && (
//                 <div className="modal-overlay" onClick={closeModal}>
//                     <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                         <img src="/Like.png" alt="" />
//                         <h3>Thank you for joining the waitlist.</h3>
//                         <p>Keep an eye on your inbox for early access updates.</p>
//                         {/* <button onClick={closeModal}>Close</button> */}
//                     </div>
//                 </div>
//             )}

//         <div className="sch-signup-footer">
//         <svg className='svg1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#F0F5FF" fill-opacity="1" d="M0,256L120,240C240,224,480,192,720,181.3C960,171,1200,181,1320,186.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" ></path></svg>
//         <div className="sch-signup-footer-inner">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#1D5BD6" fill-opacity="1" d="M0,256L120,240C240,224,480,192,720,181.3C960,171,1200,181,1320,186.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" ></path></svg>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default CreateAcct
import React, { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import "./CreateAcct.css"

const CreateAcct = () => {
    const [email, setEmail] = useState('');
    const [schoolName, setSchoolName] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation()
    const navigate = useNavigate();

    const handleSignin = () => {
        navigate('/auth/institution/signin');
    };

    const handleClick = () => {
        navigate('/');
    };

    const validateForm = () => {
        if (!email || !schoolName || !password) {
            setError('All fields are required');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return false;
        }

        const phoneRegex = /^[0-9]{10,}$/;
        if (!phoneRegex.test(phoneNumber.replace(/\D/g, ''))) {
            setError('Please enter a valid phone number');
            return false;
        }

        return true;
    };

    const handleJoinWaitlistClick = async () => {
        setError(null);

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            // Replace with your actual API endpoint
            const response = await axios.post('https://scupay-api.onrender.com/school/signup', {
                email,
                schoolName,
                // phoneNumber,
                password
            });

            setIsModalOpen(true);
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleNavClick2 = () => {
        setIsMenuOpen(false);
        navigate('/auth/institution/signup');
    };

    const handleNavClick1 = () => {
        setIsMenuOpen(false);
        navigate('/auth/student/signup');
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleGoogleSignup = async () => {
        try {
            // Implement Google OAuth logic here
            // This might involve redirecting to a Google OAuth endpoint
            // or using a Google Sign-In library
            console.log('Google signup initiated');
        } catch (err) {
            setError('Google signup failed');
        }
    };

    return (
        <div className='sch-signup'>
            <div className="sch-signup-header">
                <button onClick={handleClick}> <img src="/xlogo.png" alt="" /></button>
                <div className='sch-signup-header-nav'>
                    <button 
                        className={location.pathname === '/auth/institution/signup' ? 'active' : ''} 
                        onClick={handleNavClick2}
                    >
                        <p>For Institutions</p>
                    </button>
                    <button 
                        className={location.pathname === '/auth/student/signup' ? 'active' : ''} 
                        onClick={handleNavClick1}
                    >
                        <p>For Students</p>
                    </button>
                </div>
            </div>

            <div className="sch-signin-mheader">
                <button onClick={handleClick}> <img src="/scupaylogo.png" alt="" /></button>
                <div className='sch-signin-mheader-nav'>
                    <button 
                        className={location.pathname === '/auth/institution/signup' ? 'active' : ''} 
                        onClick={handleNavClick2}
                    >
                        <p>For Institutions</p>
                    </button>
                    <button 
                        className={location.pathname === '/auth/student/signup' ? 'active' : ''} 
                        onClick={handleNavClick1}
                    >
                        <p>For Students</p>
                    </button>
                </div>
            </div>

            <div className="sch-signup-body">
                <div className="sch-signup-body-left">
                    <div className="sch-signup-left-down">
                        <h1>For management</h1>
                        <div className="sch-signup-left-hold">
                            <div className="sch-signup-left-hold-body">
                                <div className="sch-signup-left-img">
                                    <img src="/check_circle.png" alt="" />
                                    <h4>Goodbye to manual payment processing</h4>
                                </div>
                                <div className="sch-signup-left-txt">
                                    <p>Schools can get real-time notifications and automated tracking of payments</p>
                                </div>
                            </div>
                            <div className="sch-signup-left-hold-body">
                                <div className="sch-signup-left-img">
                                    <img src="/check_circle.png" alt="" />
                                    <h4>Centralized payment management</h4>
                                </div>
                                <div className="sch-signup-left-txt">
                                    <p>Admins can manage all payment channels from a single dashboard</p>
                                </div>
                            </div>
                            <div className="sch-signup-left-hold-body">
                                <div className="sch-signup-left-img">
                                    <img src="/check_circle.png" alt="" />
                                    <h4>Secure transactions</h4>
                                </div>
                                <div className="sch-signup-left-txt">
                                    <p>Trust in our robust security to keep all payment data encrypted and safe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sch-signup-body-right">
                    <div className="sch-signup-card">
                        <div className="sch-signup-card-up">
                            <h5>Create a Scupay account </h5>
                            <p>Join over 100 schools and associations already streamlining their payment processes with Scupay</p>
                        </div>

                        {error && (
                            <div style={{
                                color: 'red', 
                                padding: '10px', 
                                backgroundColor: '#ffeeee', 
                                marginBottom: '15px',
                                borderRadius: '5px'
                            }}>
                                {error}
                            </div>
                        )}

                        <div className="sch-signup-card-body">
                            <div className="sch-signup-card-hold">
                                <div className="sch-signup-input-hold">
                                    <label>Email</label>
                                    <input 
                                        type="text" 
                                        placeholder='Enter email address' 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="sch-signup-input-hold">
                                    <label>School</label>
                                    <input 
                                        type="text" 
                                        placeholder='Enter correct school name' 
                                        value={schoolName}
                                        onChange={(e) => setSchoolName(e.target.value)}
                                    />
                                </div>
                                {/* <div className="sch-signup-input-hold">
                                    <label>Phone No.</label>
                                    <input 
                                        type="text" 
                                        placeholder='Enter phone number' 
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div> */}
                                <div className="sch-signup-input-hold">
                                    <label>Password</label>
                                    <input 
                                        type="text" 
                                        placeholder='Enter password' 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="sch-signup-card-btn">
                                <button 
                                    onClick={handleJoinWaitlistClick}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Verifying...' : 'Verify your email'}
                                </button>
                            </div>
                        </div>
                        <div className='sch-signup-card-lower'>
                            <div className='linediv'>
                                <div className='line'></div>
                                <p>OR</p>
                                <div className='line'></div>
                            </div>
                            <div className="google-auth-btn">
                                <button onClick={handleGoogleSignup}>
                                    <img src="/google.png" alt="" />Sign up with Google
                                </button>
                            </div>
                            <div className="sch-signup-card-sub">
                                <p>Already have a Scupay account? <span onClick={handleSignin}> Sign in</span></p>
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
                    </div>
                </div>
            )}

            <div className="sch-signup-footer">
                <svg className='svg1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#F0F5FF" fill-opacity="1" d="M0,256L120,240C240,224,480,192,720,181.3C960,171,1200,181,1320,186.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" ></path></svg>
                <div className="sch-signup-footer-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#1D5BD6" fill-opacity="1" d="M0,256L120,240C240,224,480,192,720,181.3C960,171,1200,181,1320,186.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" ></path></svg>
                </div>
            </div>
        </div>
    )
}

export default CreateAcct