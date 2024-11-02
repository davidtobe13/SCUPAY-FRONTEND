
import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="logo-spinner-container">
      <img 
        src="/scupaylogo.png" 
        alt="Loading" 
        className="rotating-logo"
      />
    </div>
  );
};

export default Loading;