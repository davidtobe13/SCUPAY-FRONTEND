// Faq.jsx
import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Is Scupay secure?",
      answer: "Scupay is a payment solution designed to simplify the collection of dues and fees for schools and student associations."
    },
    {
      question: "What types of payments can I make with Scupay?",
      answer: "Yes, Scupay prioritizes security with robust encryption and advanced security protocols to ensure that all transactions and data are protected."
    },
    {
      question: "How can schools get started with Scupay?",
      answer: "Schools and student associations unions can sign up on our website and follow the onboarding process to start collecting payments."
    },
    {
      question: "What payment methods are supported?",
      answer: "Scupay supports bank transfers, mobile payments, and WhatsApp Pay. Check our website for a complete list of supported methods."
    },
    {
      question: " What if I encounter issues while using Scupay?",
      answer: "If you experience any problems, our customer support team is here to help! Contact us through our support page for assistance."
    },
    {
      question: "Are there any fees associated with using Scupay?",
      answer: "Please refer to our pricing page for detailed information about any applicable fees."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-body">
    <div className="faq-container">
    <div className="faq-top">
        <h4>FAQs</h4>
      <h1>Frequently Asked Questions</h1>
      <p>Got questions? We got answers.</p>
      </div>
      
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button 
              className="faq-question" 
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className="faq-icon"></span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-content">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Faq;
