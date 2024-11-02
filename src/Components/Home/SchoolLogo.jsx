import React from 'react'
import './SchoolLogo.css'

const SchoolLogo = () => {
        const images = [
          'unn.png',
          'unilag.png',
          'elton.png',
          'covenant.png',
          'laksh.png',
          'khan.png',
        ];
      
        return (
        <div className="marquee">
            <div className="marquee-content">
                {images.map((src, index) => (
                <img key={index} src={src} alt={`Image ${index + 1}`} />
                ))}
                {images.map((src, index) => (
                <img key={`copy-${index}`} src={src} alt={`Image ${index + 1} (copy)`} />
                ))}
                {images.map((src, index) => (
                <img key={`copy-${index}`} src={src} alt={`Image ${index + 1} (copy)`} />
                ))}
                {images.map((src, index) => (
                <img key={`copy-${index}`} src={src} alt={`Image ${index + 1} (copy)`} />
                ))}
            </div>
        </div>
        );
      };

export default SchoolLogo
