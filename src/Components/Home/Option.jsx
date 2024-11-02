import React, { useState } from 'react';
import './Option.css';

const Option = () => {
  const [activeSection, setActiveSection] = useState("students");

  const handleButtonClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className='option-body'>
      <div className="option-holder">
        <div className="option-top">
          <button 
            className={activeSection === 'students' ? 'active' : ''} 
            onClick={() => handleButtonClick('students')}
          >
            Students
          </button>
          <button 
            className={activeSection === 'associations' ? 'active' : ''} 
            onClick={() => handleButtonClick('associations')}
          >
            Associations
          </button>
          <button 
            className={activeSection === 'schools' ? 'active' : ''} 
            onClick={() => handleButtonClick('schools')}
          >
            Schools
          </button>
        </div>
        <div className="option-down">
        <div className={`option-student ${activeSection === 'students' ? 'active' : ''}`}>
            <div className='option'>
            <h4>Chat & pay - that’s all.</h4>
          <p>Scupay makes paying school fees as easy as buying an airtime—just a WhatsApp chat away!</p>
          </div>
          <div className="option-btn">
          <button className='option-create-acc'>Create account</button>
          <button className='option-learn'>Learn more <img  src="/chevron_right.png" alt="" /></button>
          </div>
        </div>
        <div className={`option-association ${activeSection === 'associations' ? 'active' : ''}`}>
        <div className='option'>
            <h4>Collect dues, stress-free</h4>
          <p>Scupay makes it easy for student unions to collect dues and simplifies event payments.</p>
          </div>
          <div className="option-btn">
          <button className='option-create-acc1'>Create account</button>
          <button className='option-learn1'>Learn more <img  src="/chevron_right.png" alt="" /></button>
          </div>
        </div>
        <div className={`option-school ${activeSection === 'schools' ? 'active' : ''}`}>
        <div className='option'>
            <h4>Simplified fee collection.</h4>
          <p>With Scupay, schools are now able to monitor and manage fee payment with ease.</p>
          </div>
          <div className="option-btn">
          <button className='option-create-acc2'>Create account</button>
          <button className='option-learn2'>Learn more <img  src="/chevron_right.png" alt="" /></button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Option;

