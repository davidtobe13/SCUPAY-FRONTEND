// // Card.js
// import React from 'react';
// import './Cardprop.css';

// import cardimage from '/diversity_3.png'
// import { BsActivity } from 'react-icons/bs';

// const Cardprop = () => {
//   return (
//     <div className='card-body'>
//     <div className="card">
//         <div className="topcard">
//       {cardimage && (
//         <div className="card-image">
//           <img src={cardimage} alt='title' />
//         </div>
//       )}
//       <div className="card-header">
//         <p>Number of students</p>
//       </div>
//       </div>
//       <div className="bottomcard">
//       <div className="card-number">
//         500
//       </div>
//       <div className="card-footer">
//       <BsActivity/>
//       <p>+23.2%</p>
//       </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Cardprop;



// Cardprop.js
import React from 'react';
import './Cardprop.css';

// import cardimage from '/diversity_3.png';
import { BsActivity } from 'react-icons/bs';

const Cardprop = ({ title, content, footer, cardBgColor, cardimage, iconColor }) => {
  return (
      <div className="card" style={{ backgroundColor: cardBgColor }}>
        <div className="topcard">
          {cardimage && (
            <div className="card-image">
              <img src={cardimage} alt="title" />
            </div>
          )}
          <div className="card-header">
            <p>{title}</p>
          </div>
        </div>
        <div className="bottomcard">
          <div className="card-number">{content}</div>
          <div
            className="card-footer"
            style={{ color: iconColor }}
          >
            <BsActivity size={'18px'}/>
            <p>{footer}</p>
          </div>
        </div>
      </div>
  );
};

export default Cardprop;