// import {React, useState} from 'react'
// import { useLocation, useNavigate } from 'react-router-dom';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import "./SchoolSignin.css"

// const SchoolSignin = () => {
  
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [password, setPassword] = useState(""); 
//       const [showPassword, setShowPassword] = useState(false);

//     const location = useLocation()
//     const navigate = useNavigate();

//   const handleSignup = () => {
//     // Navigate to '/start' when the button is clicked
//     navigate('/auth/institution/signup');
//   };
//   const handleClick = () => {
//     // Navigate to '/start' when the button is clicked
//     navigate('/');
//   };

//     const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword); // Toggle password visibility
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
//     <div className='sch-signin' >
        
//         <div className="sch-signin-mheader">
//                     <button onClick={handleClick}> <img src="/xlogo.png" alt="" /></button>
//                     <div className='sch-signin-mheader-nav'>
//                     <button className={location.pathname === '/auth/institution/signin' ? 'active' : ''} onClick={handleNavClick2}>
//                     <p>For Institutions</p>
//                     </button>
//                     <button className={location.pathname === '/auth/student/signup' ? 'active' : ''} onClick={handleNavClick1}>
//                     <p>For Students</p>
//                     </button>
//                     </div>
//                 </div>
//         <div className="sch-signin-body">
//         <div className="sch-signin-logo-mobile">
//                     <button onClick={handleClick}> <img src="/xlogo.png" alt="" /></button>
//                 </div>
                
//             <div className="sch-signin-body-left">
//                 <div className="sch-signin-logo">
//                     {/* <button onClick={handleClick}> <img src="/xlogo.png" alt="" /></button> */}
//                 </div>
//                 <div className="sch-signin-left-down">
//                     <h1>For management</h1>
//                     <div className="sch-signin-left-hold">
//                         <div className="sch-signin-left-hold-body">
//                             <div className="sch-signin-left-img">
//                                 <img src="/check_circle.png" alt="" />
//                                 <h4>Goodbye to manual payment processing</h4>
//                             </div>
//                             <div className="sch-signin-left-txt">
//                                 <p>Schools can get real-time notifications and automated tracking of payments</p>
//                             </div>
//                         </div>
//                         <div className="sch-signin-left-hold-body">
//                             <div className="sch-signin-left-img">
//                                 <img src="/check_circle.png" alt="" />
//                                 <h4>Centralized payment management</h4>
//                             </div>
//                             <div className="sch-signin-left-txt">
//                                 <p>Admins can manage all payment channels from a single dashboard</p>
//                             </div>
//                         </div>
//                         <div className="sch-signin-left-hold-body">
//                             <div className="sch-signin-left-img">
//                                 <img src="/check_circle.png" alt="" />
//                                 <h4>Secure transactions</h4>
//                             </div>
//                             <div className="sch-signin-left-txt">
//                                 <p>Trust in our robust security to keep all payment data encrypted and safe</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="sch-signin-body-right">
//                 <div className="sch-signin-card">
//                     <div className="sch-signin-card-up">
//                         <h5>Login to access portal</h5>
//                         <p>Welcome back to this community of schools and associations streamlining their payment processes with Scupay</p>
//                     </div>
//                     <div className="sch-signin-card-body">
//                         <div className="sch-signin-card-hold">
//                             <div className="sch-signin-input-hold">
//                                 <label>Email</label>
//                                 <input type="text" placeholder='Enter email address' />
//                             </div>
//                             <div className="sch-signin-input-hold">
//                                 <label>Password</label>
//                                 <div className='passwordHolder'>
//                                 <input
//                                     type= 'text'
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter your password"
//                     />
//                                     <button
//                                     type="button"
//                                     className="peek-eye"
//                                     onClick={togglePasswordVisibility}
//                                     >
//                                     {showPassword ? <AiOutlineEyeInvisible size={15} /> : <AiOutlineEye size={15} />}
//                                     </button>
//                                 </div>
                               
//                             </div>
//                             <div className="sch-signin-remember">
                                
//                             </div>
//                         </div>
//                         <div className="sch-signin-card-btn">
//                             <button onClick={handleJoinWaitlistClick}>Sign in</button>
//                         </div>
//                     </div>
//                     <div className='sch-signin-card-lower'>
//                         <div className='linediv'>
//                             <div className='line'></div>
//                             <p>OR</p>
//                             <div className='line'></div>
//                         </div>
//                         <div className="google-auth-btn">
//                             <button onClick={handleJoinWaitlistClick}>
//                                <img src="/google.png" alt="" />Sign in with Google</button>
//                         </div>
//                         <div className="sch-signin-card-sub">
//                             <p>Do not have a Scupay account <span onClick={handleSignup}> Sign up</span></p>
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

//         <div className="sch-signin-footer">
//         <svg className='svg1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#F0F5FF" fill-opacity="1" d="M0,256L120,240C240,224,480,192,720,181.3C960,171,1200,181,1320,186.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" ></path></svg>
//         <div className="sch-signin-footer-inner">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#1D5BD6" fill-opacity="1" d="M0,256L120,240C240,224,480,192,720,181.3C960,171,1200,181,1320,186.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" ></path></svg>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default SchoolSignin




import {React, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import "./SchoolSignin.css"

const SchoolSignin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [password, setPassword] = useState(""); 
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation()
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/auth/institution/signup');
  };

  const handleClick = () => {
    navigate('/');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleJoinWaitlistClick = () => {
    setIsModalOpen(true);
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

  return (
    <div className='sch-signin'>
        <div className="sch-signin-header">
            <button onClick={handleClick}> <img src="/xlogo.png" alt="" /></button>
            <div className='sch-signin-header-nav'>
                <button 
                    className={location.pathname === '/auth/institution/signin' ? 'active' : ''} 
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
            {/* <div className="signin-head-logo"></div> */}
            <button onClick={handleClick}> <img src="/scupaylogo.png" alt="" /></button>
            <div className='sch-signin-mheader-nav'>
                <button 
                    className={location.pathname === '/auth/institution/signin' ? 'active' : ''} 
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

        <div className="sch-signin-body">
            {/* <div className="sch-signin-logo-mobile">
                <button onClick={handleClick}> <img src="/xlogo.png" alt="" /></button>
            </div> */}
            
            <div className="sch-signin-body-left">
                <div className="sch-signin-logo">
                </div>
                <div className="sch-signin-left-down">
                    <h1>For management</h1>
                    <div className="sch-signin-left-hold">
                        <div className="sch-signin-left-hold-body">
                            <div className="sch-signin-left-img">
                                <img src="/check_circle.png" alt="" />
                                <h4>Goodbye to manual payment processing</h4>
                            </div>
                            <div className="sch-signin-left-txt">
                                <p>Schools can get real-time notifications and automated tracking of payments</p>
                            </div>
                        </div>
                        <div className="sch-signin-left-hold-body">
                            <div className="sch-signin-left-img">
                                <img src="/check_circle.png" alt="" />
                                <h4>Centralized payment management</h4>
                            </div>
                            <div className="sch-signin-left-txt">
                                <p>Admins can manage all payment channels from a single dashboard</p>
                            </div>
                        </div>
                        <div className="sch-signin-left-hold-body">
                            <div className="sch-signin-left-img">
                                <img src="/check_circle.png" alt="" />
                                <h4>Secure transactions</h4>
                            </div>
                            <div className="sch-signin-left-txt">
                                <p>Trust in our robust security to keep all payment data encrypted and safe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sch-signin-body-right">
                <div className="sch-signin-card">
                    <div className="sch-signin-card-up">
                        <h5>Login to access portal</h5>
                        <p>Welcome back to this community of schools and associations streamlining their payment processes with Scupay</p>
                    </div>
                    <div className="sch-signin-card-body">
                        <div className="sch-signin-card-hold">
                            <div className="sch-signin-input-hold">
                                <label>Email</label>
                                <input type="text" placeholder='Enter email address' />
                            </div>
                            <div className="sch-signin-input-hold">
                                <label>Password</label>
                                <div className='passwordHolder'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        aria-label="Password input"
                                    />
                                    <button
                                        type="button"
                                        className="peek-eye"
                                        onClick={togglePasswordVisibility}
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? <AiOutlineEyeInvisible size={15} /> : <AiOutlineEye size={15} />}
                                    </button>
                                </div>
                            </div>
                            <div className="sch-signin-remember">
                                <div className="sch-signin-remember-left">
                                     <input type="checkbox" />
                                    <label>Stay signed in for a month</label>
                                </div>
                                <div className="sch-signin-remember-right">
                                     <p>Forgot password</p>
                                </div>
                            </div>
                        </div>
                        <div className="sch-signin-card-btn">
                            <button onClick={handleJoinWaitlistClick}>Sign in</button>
                        </div>
                    </div>
                    <div className='sch-signin-card-lower'>
                        <div className='linediv'>
                            <div className='line'></div>
                            <p>OR</p>
                            <div className='line'></div>
                        </div>
                        <div className="google-auth-btn">
                            <button onClick={handleJoinWaitlistClick}>
                               <img src="/google.png" alt="" />Sign in with Google
                            </button>
                        </div>
                        <div className="sch-signin-card-sub">
                            <p>Do not have a Scupay account <span onClick={handleSignup}> Sign up</span></p>
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

        <div className="sch-signin-footer">
            <svg className='svg1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#F0F5FF" fillOpacity="1" d="M0,256L120,240C240,224,480,192,720,181.3C960,171,1200,181,1320,186.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
            <div className="sch-signin-footer-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#1D5BD6" fillOpacity="1" d="M0,256L120,240C240,224,480,192,720,181.3C960,171,1200,181,1320,186.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    </div>
  );
};

export default SchoolSignin;