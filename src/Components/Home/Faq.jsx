// Faq.jsx
import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Is Scupay secure?",
      answer: "Yes, Scupay employs industry-standard security measures to protect all transactions and user data. We use encryption protocols and maintain strict security standards to ensure your payments are safe and secure."
    },
    {
      question: "What types of payments can I make with Scupay?",
      answer: "Scupay supports a wide range of payment types including tuition fees, school activities, cafeteria payments, and other educational expenses. Our platform is designed to handle both one-time and recurring payments."
    },
    {
      question: "How can schools get started with Scupay?",
      answer: "Schools can get started by contacting our team for a demo and consultation. We'll guide you through the setup process, provide necessary training, and help integrate Scupay with your existing systems."
    },
    {
      question: "What payment methods are supported?",
      answer: "We support multiple payment methods including credit cards, debit cards, bank transfers, and digital wallets. This ensures flexibility and convenience for all users."
    },
    {
      question: "What if I encounter issues while using Scupay?",
      answer: "Our dedicated support team is available to help with any issues you might encounter. You can reach us through our help center, email support, or phone support during business hours."
    },
    {
      question: "Are there any fees associated with using Scupay?",
      answer: "Fee structures vary depending on the type of service and payment method used. Please contact our sales team for detailed pricing information tailored to your institution's needs."
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
