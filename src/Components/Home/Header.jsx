import React, { useState } from 'react'
import './Header.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking a navigation item
    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='header-body'>
            <div className="header-left">
                <img src="/xlogo.png" alt="Logo" />
            </div>
            
            <div className="header-right">
                <div className="header-right-nav">
                    <p onClick={handleNavClick}>Company</p>
                    <p onClick={handleNavClick}>For Institutions</p>
                    <p onClick={handleNavClick}>For Students</p>
                    <p onClick={handleNavClick}>Resources</p>
                </div>
                <div className="header-right-auth">
                    <button className='header-signin-btn'>Sign in</button>
                    <button className='header-signup-btn'>Get Started</button>
                </div>
            </div>
            {/* Mobile menu button - only visible on mobile */}
            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A505C" strokeWidth="2" strokeLinecap="round">
                    {isMenuOpen ? (
                        <>
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </>
                    ) : (
                        <>
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </>
                    )}
                </svg>
            </button>

            {/* Mobile menu - only visible when active */}
            <div className={`header-mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <nav className="header-mobile-nav">
                    <p onClick={handleNavClick}>Company</p>
                    <p onClick={handleNavClick}>For Institutions</p>
                    <p onClick={handleNavClick}>For Students</p>
                    <p onClick={handleNavClick}>Resources</p>
                </nav>
                <div className="header-mobile-auth">
                    <button className="header-signin-btn">Sign in</button>
                    <button className="header-signup-btn">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Header



